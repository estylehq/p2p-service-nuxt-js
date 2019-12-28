<template>
  <b-col class="frame" cols="12" md="6">
    <b-card
      :class="cssClass"
      @click="$emit('click', { id, accessible, isBizOnly: !isNormalType })"
      no-body
    >
      <div v-if="!accessible" class="completed">
        {{ $t('invest.closed-item') }}
      </div>
      <div class="bdg">
        <b-badge v-if="!isNormalType" class="biz">
          {{ $t('invest.business-only') }}
        </b-badge>
        <b-badge v-if="funded" class="funded" variant="primary">
          {{ $t('invest.joined-item') }}
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
          {{
            $t('invest.money-format', {
              value: $n(current / 10000),
            })
          }}
        </div>
        <div>
          {{
            $t('invest.money-format', {
              value: $n(target / 10000),
            })
          }}
        </div>
      </div>
      <b-progress :max="100" show-progress height="16px">
        <b-progress-bar
          :value="convertFundingRate"
          :label="`${convertFundingRate.toFixed(2)}%`"
        ></b-progress-bar>
      </b-progress>
      <div class="under">
        <p class="term">
          {{
            $t('invest.term-format', {
              start: $d(termStart, 'short'),
              end: $d(termEnd, 'short'),
            })
          }}
        </p>
      </div>
    </b-card>
  </b-col>
</template>

<script>
import stateMixin from '~/mixin/invest/loan-state-variant-mixin';

export default {
  mixins: [stateMixin],
  props: {
    id: { type: Number, default: 0 },
    name: { type: String, default: 'abcd' },
    rate: { type: String, default: '0.0' },
    months: { type: Number, default: 1 },
    current: { type: Number, default: 0 },
    target: { type: Number, default: 0 },
    funded: { type: Boolean, default: false },
    stateText: { type: String, default: '' },
    stateValue: { type: String, default: '01' },
    termStart: { type: Date, default: () => new Date() },
    termEnd: { type: Date, default: () => new Date() },
    typeText: { type: String, default: '' },
    typeValue: { type: String, default: '' },
  },
  computed: {
    convertFundingRate: function convertFundingRate() {
      return (this.current / this.target) * 100;
    },
    convertRepayRate: function convertRepayRate() {
      return (this.repay / this.invest) * 100;
    },
    stateInt: function convertStateInt() {
      return parseInt(this.stateValue, 10);
    },
    accessible: function isAccessible() {
      if (this.funded) {
        return true;
      }
      return this.stateInt <= 29;
    },
    isNormalType: function isNormalType() {
      return this.typeValue === '01';
    },
    cssClass: function getCssClass() {
      const { accessible, isNormalType } = this;
      return `${accessible ? '' : 'disabled'} ${isNormalType ? '' : 'biz'}`;
    },
  },
};
</script>

<style scoped>
div.frame {
  margin-bottom: 12px;
}

a {
  color: inherit;
}

a:hover {
  text-decoration: none;
}

.card.biz {
  border: 1px solid rgba(255, 191, 49, 0.4);
}

.card:hover {
  cursor: pointer;
}

.card.biz:hover {
  box-shadow: 0 2px 2px rgba(255, 191, 49, 0.2);
}

.card:active {
  cursor: pointer;
}

div.bdg {
  position: relative;
  float: right;
}

div.bdg > * {
  margin-right: 8px;
}

div.bdg > *:last-child {
  margin-right: 0;
}

.badge.biz {
  border: 1px solid #ffbf31;
  color: #ffbf31;
  background-color: transparent;
}

.badge.funded {
  background-color: rgb(31, 147, 255);
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
  width: 100%;
  margin-bottom: 4px;
}

div.card.disabled {
  opacity: 0.6;
  background-color: #fafafa;
  color: #999999;
}

div.card.disabled:hover {
  cursor: inherit;
}

div.card.disabled div.completed {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 32px 16px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.75);
  margin: 8px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
}
</style>
