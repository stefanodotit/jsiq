<template>
  <div class="mainContainer">
    <Header />
    <div class="mainBody">
      <nuxt />
    </div>
  </div>
</template>

<script>
import Header from '~~/components/Header.vue'
export default {
  components: {
    Header
  }
}
</script>

<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

html,
body {
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background: black;
}

.mainContainer {
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.mainBody {
  height: 100%;
  flex-grow: 1;
  overflow: auto;
}
</style>
