<template>
  <div class="header">
    <div class="bdg">
      <b-badge :variant="convertState(statusValue)">
        {{ statusText }}
      </b-badge>
    </div>
    <p class="name">
      {{ loanType }}
    </p>
    <div class="info">
      <h3>
        {{ $t('user.loan.money-format', { value: $n(loanMoney / 10000) }) }}
      </h3>
      /
      <h5>
        {{ $t('user.loan.month-format', { value: loanMonth }) }}
      </h5>
    </div>
    <p class="created">
      <span>
        {{ $t('user.loan.requested-date') }}
      </span>
      {{ $d(created, 'short') }}
    </p>
    <p class="company">
      {{ company }}
    </p>
  </div>
</template>

<script>
import stateMixin from '~/mixin/invest/loan-state-variant-mixin';

export default {
  mixins: [stateMixin],
  props: {
    statusText: { type: String, default: '' },
    statusValue: { type: String, default: '' },
    loanType: { type: String, default: '' },
    loanMoney: { type: Number, default: 0 },
    loanMonth: { type: Number, default: 0 },
    company: { type: String, default: '' },
    created: { type: Date, default: () => new Date() },
  },
};
</script>

<style scoped>
div.header {
  padding: 16px;
}

p.created,
div.bdg {
  float: right;
}

div.bdg {
  position: relative;
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

p.name {
  font-size: 0.9rem;
}

p.created > span {
  font-size: 0.8rem;
  margin-right: 8px;
}
</style>
