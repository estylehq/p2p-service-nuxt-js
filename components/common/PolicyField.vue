<template>
  <b-row>
    <b-col cols="12" md="8">
      <b-form-checkbox
        :id="id"
        :checked="checked"
        :name="name"
        @change="$emit('change', { id, name, value: $event })"
      >
        {{ text }}
      </b-form-checkbox>
    </b-col>
    <b-col cols="12" md="4">
      <b-button
        v-if="link !== null"
        @click="$emit('policy', link)"
        variant="outline-secondary"
        size="sm"
      >
        {{ $t('policy.detail') }}
      </b-button>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    id: { type: String, required: true },
    name: { type: String, default: null },
    label: { type: String, required: true },
    required: { type: Boolean, default: true },
    checked: { type: Boolean, defualt: false },
    link: { type: String, default: null },
  },
  computed: {
    text: function getText() {
      const { required, label } = this;
      return `[${
        required ? this.$t('policy.require') : this.$t('policy.optional')
      }] ${label}`;
    },
  },
};
</script>

<style scoped>
div.row {
  margin: 0 0 16px;
}

div.row > div:first-child {
  padding: 0;
}

div.row > div:last-child {
  text-align: right;
}

button {
  font-size: 0.8rem;
  padding: 8px 16px;
}

button:hover {
  color: inherit;
}

@media (max-width: 768px) {
  div.row {
    margin-bottom: 8px;
  }
}
</style>
