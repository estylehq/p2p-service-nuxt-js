<template>
  <b-row class="header">
    <b-col cols="12" md="9">{{ `${title} [${replies}]` }}</b-col>
    <b-col cols="12" md="3">{{ $d(created, 'short') }}</b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    title: { type: String, default: null },
    replies: { type: Number, default: 0 },
    created: { type: Date, default: () => new Date() },
  },
};
</script>

<style scoped>
div.row {
  margin-top: 16px;
  font-size: 0.9rem;
}

div.row > div:first-child {
  text-align: left;
}

div.row > div:last-child {
  text-align: right;
}
</style>
