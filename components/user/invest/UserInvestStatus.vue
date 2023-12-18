<template>
  <b-form-select
    v-model="selected"
    @input="$emit('input', $event)"
  >
    <option value="all" selected>전체</option>
    <template v-for="(state, index) in status">
      <option :key="`${index}state${state.value}`" :value="state.value">{{ state.text }}</option>
    </template>
  </b-form-select>
</template>

<script>
export default {
  props: {
    status: {
      type: Array,
    },
  },
  data() {
    return { selected: 'all' };
  },
};
</script>

<style scoped>
</style>
