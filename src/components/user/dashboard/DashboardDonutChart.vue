<template>
  <b-card no-body>
    <h6>
      {{ $t('dashboard.status') }}
    </h6>
    <vc-donut
      :has-legend="true"
      :sections="sections"
      :total="total === 0 ? 9999999 : total"
      unit="px"
      legend-placement="top"
    >
      {{ $t('dashboard.status-total', { total: $n(total) }) }}
    </vc-donut>
  </b-card>
</template>

<script>
export default {
  props: {
    ready: { type: Number, default: 0 },
    repay: { type: Number, default: 0 },
    delay: { type: Number, default: 0 },
    complete: { type: Number, default: 0 },
  },
  data() {
    return {
      sections: [
        {
          label: `${this.$t('dashboard.status-ready')} ${this.ready}`,
          value: this.ready,
        },
        {
          label: `${this.$t('dashboard.status-repay')} ${this.repay}`,
          value: this.repay,
        },
        {
          label: `${this.$t('dashboard.status-delay')} ${this.delay}`,
          value: this.delay,
        },
        {
          label: `${this.$t('dashboard.status-complete')} ${this.complete}`,
          value: this.complete,
        },
      ],
    };
  },
  computed: {
    total: function getTotal() {
      const { ready, repay, delay, complete } = this;
      return ready + repay + delay + complete;
    },
  },
};
</script>

<style scoped>
div.card {
  font-size: 0.9rem;
  margin-bottom: 16px;
}

@media (max-width: 768px) {
  div.card {
    border-radius: 0;
    border: unset;
  }
}
</style>
