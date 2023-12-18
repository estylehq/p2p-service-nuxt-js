<template>
  <div class="list">
    <div class="buttons">
      <div class="spacer"></div>
      <button-toggle
        :array="types"
        @change="$emit('onChangeType', $event)"
      ></button-toggle>
    </div>
    <user-loan-detail-schedule-header
      :is-preview="isPreview"
    ></user-loan-detail-schedule-header>
    <template v-for="(item, index) in items">
      <user-loan-detail-schedule-item
        :key="`${id}${index}loan`"
        :id="id"
        :sequence="item.sequence"
        :principal="item.principal"
        :interest="item.interest"
        :refund="item.refund"
        :lateFee="item.lateFee"
        :date="item.date"
      ></user-loan-detail-schedule-item>
    </template>
  </div>
</template>

<script>
import UserLoanDetailScheduleHeader from './UserLoanDetailScheduleHeader.vue';
import UserLoanDetailScheduleItem from './UserLoanDetailScheduleItem.vue';
import ButtonToggle from '@/components/common/ButtonToggle.vue';

export default {
  components: {
    ButtonToggle,
    UserLoanDetailScheduleHeader,
    UserLoanDetailScheduleItem,
  },
  props: {
    id: { type: Number, required: true },
    items: { type: Array, default: () => [] },
    isPreview: { type: Boolean, default: true },
  },
  data() {
    return {
      types: [
        {
          text: this.$t('user.loan.detail.schedule.type-planed'),
          value: '01',
        },
        {
          text: this.$t('user.loan.detail.schedule.type-actual'),
          value: '03',
        },
      ],
    };
  },
  mounted() {
    this.$emit('onMounted');
  },
};
</script>

<style scoped></style>
