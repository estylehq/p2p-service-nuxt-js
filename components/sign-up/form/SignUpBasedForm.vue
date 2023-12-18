<template>
  <div class="_form">
    <p class="header">
      <span>{{ number }}</span>
      {{ text }}
    </p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      default: 0,
    },
    text: {
      type: String,
      default: 'Header',
    },
  },
};
</script>

<style lang="scss" scoped>
div._form {
  p.header {
    span {
      display: inline-block;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      margin-right: 8px;
      color: white;
      text-align: center;
      background-color: #1193ff;
    }
  }
}
</style>
