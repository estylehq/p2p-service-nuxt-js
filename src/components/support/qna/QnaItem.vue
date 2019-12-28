<template>
  <b-row
    :class="`item ${small ? 'small' : ''} ${active ? 'active' : ''}`"
    @click="$emit('click')"
  >
    <b-col cols="8" md="9" class="title">
      {{ `${title} [${replies}]` }}
    </b-col>
    <b-col cols="4" md="3" class="date">
      {{ $d(created, 'short') }}
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    id: { type: Number, default: 0 },
    title: { type: String, default: '' },
    created: { type: Date, default: () => new Date() },
    replies: { type: Number, default: 0 },
    small: { type: Boolean, default: false },
    active: { type: Boolean, default: false },
  },
};
</script>

<style scoped>
div.row {
  margin: 0;
}

div.title {
  text-overflow: ellipsis;
}

div.date {
  text-align: center;
}

@media (max-width: 767px) {
  div.title {
    font-weight: bold;
    margin-bottom: 4px;
    padding: 2px 6px;
  }

  div.date {
    text-align: right;
    text-align: end;
    font-size: 0.75rem;
    padding: 2px 6px;
  }
}
</style>
