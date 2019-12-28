<template>
  <b-row>
    <b-col>
      <p>{{ $t('user.invest.summary.accumulate') }}</p>
      <h5>{{ $n(money, 'currency') }}</h5>
    </b-col>
    <b-col>
      <p>{{ $t('user.invest.summary.accum-principal') }}</p>
      <h5>{{ $n(principal, 'currency') }}</h5>
    </b-col>
    <b-col>
      <p>{{ $t('user.invest.summary.accum-interest') }}</p>
      <h5>{{ $n(interest, 'currency') }}</h5>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    money: {
      type: Number,
      default: 0,
    },
    principal: {
      type: Number,
      default: 0,
    },
    interest: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped>
div.row {
  margin: 16px auto 24px;
  font-size: 0.85rem;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

div.row > div {
  padding-top: 8px;
  padding-bottom: 8px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}

div.row > div:last-child {
  border-right: unset;
}

p {
  margin-bottom: 8px;
}

h5,
h6 {
  display: inline;
  padding: 0;
  margin: 0;
}

h5 {
  margin-right: 4px;
}

@media (max-width: 768px) {
  div.row {
    font-size: 0.8rem;
  }

  h5 {
    font-size: 1.2rem;
  }

  h6 {
    font-size: 0.9rem;
  }
}
</style>
