<template functional>
  <div class="loader-wrapper">
    <div class="loader is-loading"></div>
  </div>
</template>

<style lang="scss" scoped>
.loader-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  z-index: 1;

  .loader {
    height: 80px;
    width: 80px;
  }
}
</style>
