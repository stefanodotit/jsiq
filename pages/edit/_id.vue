<template>
  <div class="addPage">
    <div class="container">
      <h1 class="has-text-warning is-size-1">Add your Q&A!</h1>
      <div class="field">
        <label class="label is-size-4	has-text-light">Question</label>
        <div class="control">
          <input v-model="question" class="input" />
        </div>
      </div>

      <div class="field">
        <label class="label is-size-4	has-text-light">Category</label>
        <div
          v-if="pickedCategories.length"
          class="field is-grouped is-grouped-multiline categoriesPicked"
        >
          <div
            v-for="category of pickedCategories"
            :key="category.id"
            class="control"
          >
            <div class="tags has-addons">
              <span class="tag is-success">{{ category.name }}</span>
              <a
                @click="handleDeleteCategory(category)"
                class="tag is-delete"
              ></a>
            </div>
          </div>
        </div>
        <div class="control tags categoryToPick">
          <span
            v-for="category of categories"
            :key="category.id"
            @click="handlePickupCategory(category)"
            class="tag is-light"
            >{{ category.name }}</span
          >
        </div>
      </div>

      <div class="field">
        <label class="label is-size-4	has-text-light">Answer</label>
        <div class="control">
          <Editor
            v-model="answer"
            :init="{
              height: 500,
              skin: 'oxide-dark',
              content_css: 'dark',
              width: '100%',
              menubar: 'file edit view insert format tools table help',
              toolbar_sticky: true,
              contextmenu: 'link image imagetools table',
              plugins: [
                'advlist autolink lists link image charmap',
                'searchreplace visualblocks code fullscreen',
                'print preview anchor insertdatetime media',
                'paste code help wordcount table'
              ],
              toolbar:
                'undo redo | formatselect | bold italic | \
          alignleft aligncenter alignright | \
          bullist numlist outdent indent'
            }"
            api-key="l8mxs66xeav72ba1jdb6uf9liasphebufckpt705xmc5veqy"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-centered">
        <p class="control">
          <a
            :disabled="btnIsDisabled"
            @click="handleSaveBtn"
            class="button is-success"
          >
            Edit
          </a>
        </p>
        <p class="control">
          <a @click="handleCancelBtn" class="button is-light">
            Cancel
          </a>
        </p>
      </div>
    </div>
    <Loading v-if="loading" />
    <div v-if="notification" class="notification is-primary">
      Question added successfully! Redirect in 3... 2... 1...
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Editor from '@tinymce/tinymce-vue'
import Loading from '@/components/dumb/Loading.vue'

export default {
  name: 'EditPage',
  components: {
    Editor,
    Loading
  },
  data() {
    return {
      answer: null,
      question: null,
      pickedCategories: [],
      loading: false,
      notification: false,
      categories: null,
      idQuestion: null
    }
  },
  computed: {
    ...mapGetters('questions', ['questions']),
    btnIsDisabled() {
      return (
        this.answer === null ||
        this.question === null ||
        this.pickedCategories.length === 0
      )
    }
  },
  fetch({ store }) {
    store.commit('categories/load')
    return store.dispatch('questions/load')
  },
  mounted() {
    this.categories = [...this.$store.getters['categories/categories']]
    const id = parseInt(this.$route.params.id)
    for (const index of Object.keys(this.questions)) {
      for (const question of this.questions[index]) {
        if (question.id === id) {
          this.question = question.question
          this.answer = question.answer
          this.idQuestion = question.id
          for (const cat of question.categories) {
            this.handlePickupCategory(cat)
          }
          return
        }
      }
    }
  },
  methods: {
    handleSaveBtn() {
      this.loading = true
      this.$store
        .dispatch('questions/edit', {
          question: this.question,
          answer: this.answer,
          categories: this.pickedCategories,
          id: this.idQuestion
        })
        .then(res => {
          this.notification = true
          setTimeout(() => {
            this.$router.push('/')
          }, 2000)
        })
    },
    handleCancelBtn() {
      this.$router.push('/')
    },
    handlePickupCategory(cat) {
      this.categories.forEach((category, index) => {
        if (category.id === cat.id) {
          this.pickedCategories.push(cat)
          this.categories.splice(index, 1)
        }
      })
    },
    handleDeleteCategory(cat) {
      this.categories.push(cat)
      this.pickedCategories.splice(this.pickedCategories.indexOf(cat), 1)
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  margin-top: 20px;
  font-weight: bold;
}
.addPage {
  padding: 5px;
}

.field {
  margin-top: 50px;
}

.categoryToPick {
  justify-content: center;
  .tag {
    cursor: pointer;
  }
}

.categoriesPicked {
  justify-content: center;
  margin-top: 0;
}

.notification {
  z-index: 2;
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
