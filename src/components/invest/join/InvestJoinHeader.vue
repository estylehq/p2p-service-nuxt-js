<template>
  <b-card no-body>
    <p class="name">{{ name }}</p>
    <h3 class="currency">{{ $n(target, 'currency') }}</h3>
    <div>
      <h3>{{ $t('invest.rate-format', { value: rate }) }}</h3>
      <h5>{{ $t('invest.month-format', { value: months }) }}</h5>
    </div>
    <div class="under">
      <p class="term">
        {{ `${$d(start, 'short')} ~ ${$d(end, 'short')}` }}
      </p>
    </div>
  </b-card>
</template>

<script>
export default {
  props: {
    rate: { type: String, default: '0.0' },
    months: { type: Number, default: 0 },
    name: { type: String, default: '' },
    target: { type: Number, default: 0 },
    start: { type: Date, default: () => new Date() },
    end: { type: Date, default: () => new Date() },
  },
};
</script>

<style scoped>
div.card {
  margin: 0 auto 8px;
  display: block;
}

h3,
h5,
p.name {
  padding: 4px 0;
}

h3,
h5 {
  width: fit-content;
  display: inline-block;
}

h3.currency {
  float: right;
}

p.name {
  font-size: 0.9rem;
}

div.under {
  display: flex;
  align-items: flex-end;
}

p.term {
  font-size: 0.8rem;
  margin-top: 8px;
}

div.under > p {
  margin-bottom: 4px;
}

@media (max-width: 768px) {
  div.card {
    padding: 8px 16px;
  }

  h3 {
    font-size: 1.5rem;
  }

  h5 {
    font-size: 1rem;
  }

  p.name {
    font-size: 0.85rem;
    margin-bottom: 4px;
  }
}
</style>
