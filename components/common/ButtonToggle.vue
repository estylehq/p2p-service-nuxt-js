<template>
  <b-button-group :size="size">
    <b-button
      v-for="(item, index) in array"
      :key="`${index}${item.text}`"
      :pressed="item.value === mode"
      @click="mode = item.value"
      variant="outline-primary"
    >
      {{ item.text }}
    </b-button>
  </b-button-group>
</template>

<script>
export default {
  props: {
    array: { type: Array, default: () => [{ text: 'Text', value: 'value' }] },
    size: { type: String, default: 'md' },
  },
  data() {
    return {
      mode: this.array[0].value,
    };
  },
  watch: {
    mode: function onResponse(mode) {
      this.$emit('change', mode);
    },
  },
};
</script>

<style lang="scss" scoped>
div.btn-group {
  margin: 8px;
}
</style>
