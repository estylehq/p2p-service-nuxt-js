<template>
  <div>
    <invest-detail-preview-form
      :disabled="funded"
      :available="avaliable"
      :money="money"
      :is-biz-user="isBizUser"
      @submit="$emit('submit', $event)"
    ></invest-detail-preview-form>
    <invest-detail-preview-summary
      v-if="items && items.length > 0"
      :items="items"
    ></invest-detail-preview-summary>
    <invest-detail-preview-header
      v-if="items && items.length > 0"
    ></invest-detail-preview-header>
    <template v-for="(item, index) in items">
      <invest-detail-preview-item
        :key="`${id}preview${index}`"
        :id="id"
        :type="item.type"
        :sequence="item.sequence"
        :principal="item.principal"
        :interest="item.interest"
        :refund="item.refund"
        :tax="item.tax"
        :fee="item.fee"
        :date="item.date"
      ></invest-detail-preview-item>
    </template>
  </div>
</template>

<script>
import _ from 'lodash';
import { mapState, mapActions } from 'vuex';
import InvestDetailPreviewForm from './InvestDetailPreviewForm.vue';
import InvestDetailPreviewHeader from './InvestDetailPreviewHeader.vue';
import InvestDetailPreviewItem from './InvestDetailPreviewItem';
import InvestDetailPreviewSummary from './InvestDetailPreviewSummary.vue';

export default {
  components: {
    InvestDetailPreviewForm,
    InvestDetailPreviewHeader,
    InvestDetailPreviewItem,
    InvestDetailPreviewSummary,
  },
  props: {
    id: { type: Number, default: 0 },
    items: { type: Array, default: () => [] },
    money: { type: Number, default: 0 },
    funded: { type: Boolean, default: false },
    avaliable: { type: Number, default: 0 },
    isBizUser: { type: Boolean, default: false },
    onMounted: { type: Function, default: () => {} },
  },
  mounted() {
    this.onMounted();
  },
};
</script>

<style scoped></style>
