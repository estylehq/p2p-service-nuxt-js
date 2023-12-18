<template>
  <b-card no-body>
    <div class="invests">
      <h6>
        {{ $t('dashboard.accrued') }}
      </h6>
      <p>{{ $n(invests, 'currency') }}</p>
      <h6>
        {{ $t('dashboard.estimated-amount') }}
      </h6>
      <p>{{ $n(leftInvests, 'currency') }}</p>
    </div>
    <div class="divider"></div>
    <div class="interests">
      <h6>
        {{ $t('dashboard.accrued-interests') }}
      </h6>
      <div>
        <p>{{ $n(withoutTaxInterests, 'currency') }}</p>
        <span v-if="!isDisableTaxes">
          {{ $t('dashboard.pre-tax') }}
        </span>
      </div>
      <div v-if="!isDisableTaxes">
        <p>{{ $n(interests, 'currency') }}</p>
        <span>
          {{ $t('dashboard.after-tax') }}
        </span>
      </div>
    </div>
    <div class="divider"></div>
    <div class="rates">
      <h6>
        {{ $t('dashboard.accrued-interests-rates') }}
      </h6>
      <div class="cont">
        <p>
          <span v-if="!isDisableTaxes">
            {{ $t('dashboard.pre-tax') }}
          </span>
          {{ withoutTaxRates }} %
        </p>
        <p v-if="!isDisableTaxes">
          <span>
            {{ $t('dashboard.after-tax') }}
          </span>
          {{ rates }} %
        </p>
      </div>
    </div>
  </b-card>
</template>

<script>
export default {
  props: {
    invests: { type: Number, default: 0 },
    leftInvests: { type: Number, default: 0 },
    interests: { type: Number, default: 0 },
    withoutTaxInterests: { type: Number, default: 0 },
    rates: { type: String, default: '0' },
    withoutTaxRates: { type: String, default: '0' },
    isDisableTaxes: { type: Boolean, default: false },
  },
};
</script>

<style scoped>
div.card {
  font-size: 0.9rem;
  margin-bottom: 16px;
}

div.invests > p:last-child {
  margin-bottom: 0;
}

div.interests > div {
  display: flex;
  min-height: 24px;
  margin-bottom: 8px;
}

div.interests > div > span {
  font-size: 80%;
  margin-right: 8px;
}

div.interests > div > p {
  position: absolute;
  right: 24px;
}

div.interests > div:last-child > p:last-child {
  margin-bottom: 0;
}

div.rates > div.cont {
  display: flex;
}

div.rates > div > * {
  width: 50%;
  margin-bottom: 0;
}

div.rates > div > *:last-child {
  text-align: right;
}

p > span {
  font-size: 80%;
  margin-right: 8px;
}

div.divider {
  margin: 8px 0;
}

@media (max-width: 768px) {
  div.card {
    border-radius: 0;
    border: unset;
  }
}
</style>
