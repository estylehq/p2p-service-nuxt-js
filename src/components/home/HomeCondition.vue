<template>
  <div class="container">
    <p>{{ `${$d(date, 'short')} 기준` }}</p>
    <div class="summary">
      <span>누적 대출액</span>
      <h2>
        {{ $n(amount, 'currency') }}
      </h2>
    </div>
    <b-row class="condition">
      <b-col cols="12" md="4">
        <p class="header">대출 잔액</p>
        <h4>
          {{ $n(balance, 'currency') }}
        </h4>
      </b-col>
      <b-col cols="12" md="4">
        <p class="header">연체율 (잔액기준)</p>
        <h4>{{ delayRate }}<span>%</span></h4>
      </b-col>
      <b-col cols="12" md="4">
        <p class="header">평균 수익률</p>
        <h4>{{ marginRate }}<span>%</span></h4>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    date: { type: Date, default: () => new Date() },
    amount: { type: String, default: '' },
    balance: { type: String, default: '' },
    delayRate: { type: String, default: '' },
    marginRate: { type: String, default: '' },
  },
};
</script>

<style scoped>
div.container {
  padding: 56px 8px 24px;
  min-height: 384px;
  color: #606060;
}

p {
  text-align: center;
}

p.header {
  font-size: 0.8rem;
}

div.row {
  margin-bottom: 16px;
}

div.summary {
  margin-top: 32px;
  margin-bottom: 32px;
  text-align: center;
}

div.summary span {
  margin-right: 16px;
}

div.summary h2 {
  width: fit-content;
  display: contents;
}

h4 {
  text-align: center;
}

h2 > span,
h4 > span {
  font-size: 1rem;
  margin-left: 8px;
}

div.row.condition {
  padding: 8px;
}

div.row.condition > div {
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
  border-left: 1px solid #dbdbdb;
  padding: 32px;
}

div.row.condition > div:last-child {
  border-right: 1px solid #dbdbdb;
}

@media (max-width: 768px) {
  div.row.condition > div {
    padding: 16px;
  }

  div.row.condition > div > h4 {
    font-size: 1.4rem;
  }

  div.row.condition > div {
    border-right: 1px solid #dbdbdb;
  }
}
</style>
