<template>
  <b-row>
    <b-col v-html="content" cols="12" lg="10"></b-col>
    <b-col cols="12" lg="2">{{ $d(created, 'short') }}</b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    content: { type: String, default: null },
    created: { type: Date, default: () => new Date() },
  },
};
</script>

<style scoped>
div.row {
  font-size: 0.9rem;
  margin: 8px auto;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

div.row > div {
  padding: 24px;
}

div.row > div:first-child {
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}

div.row > div:last-child {
  text-align: center;
}

@media (max-width: 767px) {
  div.row {
    font-size: 0.8rem;
  }

  div.row > div:last-child {
    text-align: left;
  }
}
</style>
