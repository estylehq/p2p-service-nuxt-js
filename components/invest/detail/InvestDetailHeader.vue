<template>
  <b-card no-body>
    <div class="bdg">
      <b-badge v-if="funded" class="funded" variant="primary">
        {{ $t('invest.detail.joined') }}
      </b-badge>
      <b-badge :variant="convertState(stateValue)">
        {{ stateText }}
      </b-badge>
    </div>
    <p class="name">
      {{ name }}
    </p>
    <div>
      <h3>
        {{ $t('invest.rate-format', { value: rate }) }}
      </h3>
      /
      <h5>
        {{ $t('invest.month-format', { value: months }) }}
      </h5>
    </div>
    <div class="loan">
      <div>
        {{ $t('invest.money-format', { value: $n(current / 10000) }) }}
      </div>
      <div>
        {{ $t('invest.money-format', { value: $n(target / 10000) }) }}
      </div>
    </div>
    <b-progress
      :value="convertFundingRate"
      :max="100"
      show-progress
      height="16px"
    >
      <b-progress-bar
        :value="convertFundingRate"
        :label="`${convertFundingRate.toFixed(2)}%`"
      ></b-progress-bar>
    </b-progress>
    <div class="under">
      <p class="term">
        {{
          $t('invest.term-format', {
            start: $d(start, 'short'),
            end: $d(end, 'short'),
          })
        }}
      </p>
      <p v-if="invest || invest > 0" class="invest">
        {{ $n(invest, 'currency') }}
      </p>
    </div>
    <template v-if="funded && activated && !completed">
      <div class="divider"></div>
      <button @click="$emit('download')" class="simple btn-sm">
        <i class="fa fa-file-o"></i>
        {{ $t('invest.detail.download-principle') }}
      </button>
    </template>
  </b-card>
</template>

<script>
import stateMixin from '~/mixin/invest/loan-state-variant-mixin';

export default {
  mixins: [stateMixin],
  props: {
    id: { type: Number, required: true },
    rate: { type: String, default: '0.0' },
    months: { type: Number, default: 0 },
    stateText: { type: String, default: '' },
    stateValue: { type: String, default: '' },
    name: { type: String, required: true },
    current: { type: Number, default: 0 },
    target: { type: Number, default: 0 },
    joined: { type: Number, default: 0 },
    start: { type: Date, default: () => new Date() },
    end: { type: Date, default: () => new Date() },
    invest: { type: Number, default: 0 },
    funded: { type: Boolean, default: false },
    activated: { type: Boolean, default: false },
    completed: { type: Boolean, default: false },
  },
  computed: {
    convertFundingRate: function convertFundingRate() {
      return (this.current / this.target) * 100;
    },
    convertRepayRate: function convertRepayRate() {
      return (this.repay / this.invest) * 100;
    },
  },
};
</script>

<style lang="scss" scoped>
div.card {
  margin: 16px auto;
  padding: 0;
  border: unset;
  box-shadow: unset;

  &,
  &:hover,
  &:active {
    box-shadow: unset;
    opacity: unset;
  }
}

a {
  color: inherit;
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

div.loan,
div.under {
  display: flex;
  align-items: flex-end;
}

div.loan {
  font-size: 0.8rem;
  margin-bottom: 4px;
}

div.loan > div {
  width: 50%;
}

div.loan > div:first-child {
  text-align: left;
}

div.loan > div:last-child {
  text-align: right;
  font-size: 1.2rem;
  font-weight: bold;
}

p.term {
  font-size: 0.8rem;
  margin-top: 8px;
}

div.under > p {
  width: 50%;
  margin-bottom: 4px;
}

div.under p.invest {
  text-align: right;
}

.badge.funded {
  margin-right: 8px;
}
</style>
