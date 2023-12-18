<template>
  <b-col cols="12" md="6">
    <b-card @click="$emit('click', id)" no-body>
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
          {{
            $t('user.loan.money-format', {
              value: $n(loanMoney / 10000),
            })
          }}
        </h3>
        <h5>
          {{ $t('user.loan.month-format', { value: loanMonth }) }}
        </h5>
      </div>
      <p class="company">
        {{ company }}
      </p>
      <p class="created">
        <span>{{ $t('user.loan.requested-date') }}</span>
        &nbsp;
        {{ $d(created, 'short') }}
      </p>
    </b-card>
  </b-col>
</template>

<script>
import stateMixin from '~/mixin/invest/loan-state-variant-mixin';

export default {
  mixins: [stateMixin],
  props: {
    id: { type: Number, required: true },
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
div.card {
  margin-bottom: 16px;
}

div.frame {
  margin-bottom: 12px;
}

a {
  color: inherit;
}

a:hover {
  text-decoration: none;
}

.card:hover {
  cursor: pointer;
}

.badge.funded {
  background-color: rgba(31, 147, 255);
  margin-right: 8px;
}

.card:active {
  cursor: pointer;
}

div.bdg {
  position: relative;
  float: right;
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
