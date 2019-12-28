<template>
  <b-row>
    <b-col cols="12" md="4">
      <h6>{{ $t('invest.detail.schedule.summary-accum-interest') }}</h6>
      <h4>{{ $n(interests, 'currency') }}</h4>
    </b-col>
    <b-col cols="12" md="4">
      <h6>{{ $t('invest.detail.schedule.summary-accum-taxes') }}</h6>
      <h4>{{ $n(taxes, 'currency') }}</h4>
    </b-col>
    <b-col cols="12" md="4">
      <h6>{{ $t('invest.detail.schedule.summary-accum-refunds') }}</h6>
      <h4>{{ $n(refunds, 'currency') }}</h4>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    interests: { type: Number, default: 0 },
    taxes: { type: Number, default: 0 },
    refunds: { type: Number, default: 0 },
  },
};
</script>

<style scoped>
div.row {
  margin: 16px auto;
  text-align: center;
}
</style>
