<template>
  <div class="headerBox">
    <div class="container">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a href="/" class="boxLogo navbar-item">
            <img src="~~/assets/logo.png" />
          </a>
          <a
            @click="handleClickBurger"
            :class="{ 'is-active': mobileOpenMenu }"
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div :class="{ 'is-active': mobileOpenMenu }" class="navbar-end">
          <a @click="handleClickAddBtn" class="navbar-item">
            <span class="icon has-text-warning">
              <i class="fas fa-plus-circle"></i>
            </span>
            Add</a
          >
          <div class="navbar-item">
            <iframe
              src="https://ghbtns.com/github-btn.html?user=stefanodotit&repo=jsiq&type=star&size=large"
              frameborder="0"
              scrolling="0"
              width="80"
              height="30"
              title="GitHub"
            ></iframe>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { IS_PROD, GITHUB_LINK } from '@/utils'

export default {
  name: 'Header',
  data() {
    return {
      mobileOpenMenu: false
    }
  },
  methods: {
    handleClickBurger() {
      this.mobileOpenMenu = !this.mobileOpenMenu
    },
    handleClickAddBtn() {
      !IS_PROD
        ? this.$router.push(`/add`)
        : (window.location.href = GITHUB_LINK)
    }
  }
}
</script>

<style lang="scss" scoped>
.headerBox {
  border-bottom: 1px solid rgb(52, 53, 54);
  padding: 10px 20px;
  background: #1a1a1b;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.boxLogo {
  display: flex;
  align-items: center;
  img {
    height: 40px;
  }
}
.navbar-end {
  flex-grow: 0;
  a {
    color: #fff;
    &:hover {
      background: black;
      color: #fff;
      border-radius: 10px;
    }
    .icon {
      margin-right: 1px;
    }
  }
}
.navbar,
.navbar-end {
  background: transparent;
}
.navbar {
  width: 100%;
}
.navbar-burger {
  color: white;
}
</style>
