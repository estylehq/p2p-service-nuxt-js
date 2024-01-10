<template>
  <nav class="navbar navbar-expand-lg navbar-light loan-notice">
    <div class="container">
      <span class="navbar-text loan-text">
        P2P 서비스 대부 (주) 2010-금감원-0000 (P2P연계대부업)
      </span>
      <b-button @click="$emit('modal')" variant="outline-secondary" size="sm">
        왜 대부업인가요?
      </b-button>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  z-index: 20;
  background-color: #e9eaec;

  button.btn,
  .loan-text {
    font-size: 0.85rem;
    color: #454f5d;
    opacity: 0.7;
  }

  .loan-text {
    letter-spacing: 0.3px;
  }

  button.btn {
    &:hover,
    &:active {
      color: #ffffff;
    }
  }
}
</style>
