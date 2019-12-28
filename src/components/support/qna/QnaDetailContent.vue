<template>
  <div v-html="content"></div>
</template>

<script>
export default {
  props: {
    content: { type: String, default: null },
  },
};
</script>

<style scoped>
div {
  padding: 8px;
  font-size: 0.9rem;
  margin: 16px auto 24px;
}
</style>
