<template>
  <b-row>
    <b-col cols="12" md="4">
      <h6>{{ $t('invest.detail.preview.summary-accum-interest') }}</h6>
      <h4>{{ $n(interests, 'currency') }}</h4>
    </b-col>
    <b-col cols="12" md="4">
      <h6>{{ $t('invest.detail.preview.summary-accum-taxes') }}</h6>
      <h4>{{ $n(taxes, 'currency') }}</h4>
    </b-col>
    <b-col cols="12" md="4">
      <h6>{{ $t('invest.detail.preview.summary-accum-refunds') }}</h6>
      <h4>{{ $n(refunds, 'currency') }}</h4>
    </b-col>
  </b-row>
</template>

<script>
import _ from 'lodash';

export default {
  props: {
    items: { type: Array, default: () => [] },
  },
  data() {
    return {
      interests: 0,
      taxes: 0,
      refunds: 0,
    };
  },
  beforeMount() {
    this.interests = 0;
    this.taxes = 0;
    this.refunds = 0;
    if (this.items && this.items.length > 0) {
      _.map(this.items, item => {
        this.interests += item.interest;
        this.taxes += item.tax + item.fee;
        this.refunds += item.refund;
      });
    }
  },
};
</script>

<style lang="scss" scoped>
div.row {
  margin: 16px auto;
  text-align: center;
}
</style>
