<template>
  <div class="home">
    <div class="left">
      <template v-if="currentQuestion">
        <h1 class="has-text-warning has-text-centered title is-size-1">
          {{ currentQuestion.question }}
          <span @click="handleClickEditBtn" class="icon is-small editIco">
            <i class="fas fa-edit"></i>
          </span>
        </h1>
        <div class="spoilerBox">
          <button @click="handleClickSpoiler" class="button is-success">
            <span class="icon is-small">
              <i class="fas fa-hand-point-down"></i>
            </span>
            <span>Spolier solution</span>
          </button>
        </div>
        <div
          v-html="currentQuestion.answer"
          :class="{ spoiled: spoiled }"
          class="body"
        ></div>
      </template>
      <div v-else class="emptyQuestion has-text-warning">
        Choose a question
        <span class="icon">
          <i class="far fa-hand-point-right"></i>
        </span>
      </div>
    </div>
    <div class="right">
      <h2 class="has-text-warning is-size-3">Questions</h2>
      <div class="content">
        <template v-for="category of categories">
          <div v-if="questions[category.id]" :key="category.id">
            <h3
              class="is-size-5 has-text-weight-bold categoryTitle has-text-grey-lighter"
            >
              {{ category.name }}
            </h3>
            <ol type="1">
              <li
                v-for="question of questions[category.id]"
                :key="category.id + question.id"
                @click="handleClickQuestion(question)"
              >
                {{ question.question }}
              </li>
            </ol>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Highlight from 'highlightjs'
import { IS_PROD, GITHUB_LINK } from '@/utils'

export default {
  name: 'Home',
  data() {
    return {
      currentQuestion: null,
      spoiled: true
    }
  },
  computed: {
    ...mapGetters('categories', ['categories']),
    ...mapGetters('questions', ['questions'])
  },
  fetch({ store }) {
    store.commit('categories/load')
    return store.dispatch('questions/load')
  },
  methods: {
    handleClickQuestion(question) {
      this.currentQuestion = question
      this.spoiled = true
      setTimeout(() => {
        Highlight.initHighlighting.called = false
        Highlight.initHighlighting()
      }, 10)
    },
    handleClickEditBtn() {
      !IS_PROD
        ? this.$router.push(`/edit/${this.currentQuestion.id}`)
        : (window.location.href = GITHUB_LINK)
    },
    handleClickSpoiler() {
      this.spoiled = !this.spoiled
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 5px 0;
}

.right {
  width: 30%;
  height: 100%;
  overflow: hidden;
  padding-right: 5px;
  display: flex;
  flex-direction: column;
}

.left {
  height: 100%;
  width: 100%;
  border-right: 1px solid #ffdd57;
  overflow: auto;
  text-align: left;
  padding: 0 10px 10px 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.categoryTitle {
  margin-top: 10px;
  margin-bottom: 5px;
}

.content {
  overflow: auto;
  li {
    cursor: pointer;
    text-align: left;
  }
}
.spoilerBox {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.body {
  flex-grow: 1;
  overflow: auto;
  &.spoiled {
    filter: blur(10px);
  }
}

.editIco {
  font-size: 16px;
  margin-top: 5px;
  margin-left: 10px;
  cursor: pointer;
}

.title {
  display: flex;
}

.emptyQuestion {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<style src="highlightjs/styles/default.css"></style>
<style src="highlightjs/styles/androidstudio.css"></style>
