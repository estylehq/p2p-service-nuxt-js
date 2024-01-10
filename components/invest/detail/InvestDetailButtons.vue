<template>
  <div class="buttons">
    <div class="spacer"></div>
    <b-button
      v-if="isFunded ? false : isLoanFunding && !isLoanCollected"
      @click="$emit('join')"
      variant="primary"
      size="lg"
    >
      <i class="fa fa-money"></i>{{ $t('invest.detail.button-invest') }}
    </b-button>
    <b-button
      v-if="isFunded && (!isLoanFundingCompleted || !isLoanClosed)"
      @click="$emit('cancel')"
      variant="warning"
      size="lg"
    >
      <i class="fa fa-ban"></i>{{ $t('invest.detail.button-cancel') }}
    </b-button>
    <b-button v-if="isLoanClosed" disabled variant="primary" size="lg">
      <i class="fa fa-money"></i>{{ $t('invest.detail.button-funding-closed') }}
    </b-button>
  </div>
</template>

<script>
export default {
  props: {
    isFunded: { type: Boolean, default: false },
    isLoanFunding: { type: Boolean, default: false },
    isLoanCollected: { type: Boolean, default: false },
    isLoanFundingCompleted: { type: Boolean, default: false },
    isLoanClosed: { type: Boolean, default: false },
  },
};
</script>

<style lang="scss" scoped>
div.buttons {
  text-align: center;
  margin: 16px auto 32px;

  button {
    margin-right: 8px;
    min-width: 180px;
    padding: auto 24px;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
