<template>
  <div class="content">
    <h5>{{ title }}</h5>
    <div v-html="content"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    content: { type: String, default: '' },
  },
};
</script>

<style lang="scss" scoped>
div.content {
  padding: 8px;
}

@media (max-width: 768px) {
  div.content {
    padding: 8px;
  }
}
</style>
