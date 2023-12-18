<template>
  <div>
    <invest-detail-schedule-form :money="money"></invest-detail-schedule-form>
    <invest-detail-schedule-summary
      :interests="totalInterests"
      :taxes="totalTaxes"
      :refunds="totalRefunds"
    ></invest-detail-schedule-summary>
    <div class="buttons">
      <div class="spacer"></div>
      <ButtonToggle :array="TYPE_PLANS" @change="onTypeChange"></ButtonToggle>
    </div>
    <invest-detail-schedule-header
      :is-loan-activated="isLoanActivated"
    ></invest-detail-schedule-header>
    <template v-for="(schedule, index) in items">
      <invest-detail-schedule-item
        :key="`${id}_${index}`"
        :id="id"
        :type="schedule.type"
        :sequence="schedule.sequence"
        :principal="schedule.principal"
        :interest="schedule.interest"
        :refund="schedule.refund"
        :tax="schedule.tax"
        :fee="schedule.fee"
        :is-loan-activated="isLoanActivated"
        :date="schedule.date"
      ></invest-detail-schedule-item>
    </template>
  </div>
</template>

<script>
import _ from 'lodash';
import { mapState, mapActions } from 'vuex';
import InvestDetailScheduleForm from './InvestDetailScheduleForm.vue';
import InvestDetailScheduleHeader from './InvestDetailScheduleHeader.vue';
import InvestDetailScheduleItem from './InvestDetailScheduleItem.vue';
import InvestDetailScheduleSummary from './InvestDetailScheduleSummary.vue';
import ButtonToggle from '~/components/common/ButtonToggle.vue';

export default {
  components: {
    ButtonToggle,
    InvestDetailScheduleForm,
    InvestDetailScheduleHeader,
    InvestDetailScheduleItem,
    InvestDetailScheduleSummary,
  },
  props: {
    id: { type: Number, default: 0 },
    money: { type: Number, default: 0 },
    onMounted: { type: Function, default: () => {} },
    isLoanActivated: { type: Boolean, default: false },
  },
  data() {
    return {
      TYPE_PLANS: [
        {
          text: this.$t('invest.detail.schedule.type-planed'),
          value: '01',
        },
        {
          text: this.$t('invest.detail.schedule.type-actual'),
          value: '03',
        },
      ],
      totalInterests: 0,
      totalTaxes: 0,
      totalRefunds: 0,
      listType: null,
    };
  },
  computed: {
    ...mapState('invest/detail/schedule', ['items', 'success', 'message']),
  },
  watch: {
    success: function onWatch(success) {
      if (!success) {
        return;
      }
      this.totalInterests = 0;
      this.totalTaxes = 0;
      this.totalRefunds = 0;
      _.map(this.items, schedule => {
        this.totalInterests += schedule.interest;
        this.totalTaxes += schedule.tax + schedule.fee;
        this.totalRefunds += schedule.refund;
      });
    },
  },
  beforeMount() {
    this.listType = this.TYPE_PLANS[0].value;
  },
  mounted() {
    this.onMounted();
  },
  methods: {
    onTypeChange: function onTypeChange(value) {
      this.getSchedule({ id: this.id, type: value });
    },
  },
};
</script>

<style scoped></style>
