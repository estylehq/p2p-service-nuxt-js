<template>
  <div>
    <h6>
      {{ $t('user.loan.detail.loan-result') }}
    </h6>
    <b-table :items="[item]" :fields="fields" stacked></b-table>
  </div>
</template>

<script>
export default {
  props: {
    approvedMoney: { type: Number, default: 0 },
    approvedMonth: { type: Number, default: 0 },
    approvedRate: { type: String, default: '0.0' },
    approvedDate: { type: Date, default: () => new Date() },
    isLoanActivated: { type: Boolean, default: false },
  },
  data() {
    return {
      fields: [
        {
          key: 'approvedMoney',
          label: this.$t('user.loan.detail.approved-money'),
        },
        {
          key: 'approvedMonth',
          label: this.$t('user.loan.detail.approved-month'),
        },
        {
          key: 'approvedRate',
          label: this.$t('user.loan.detail.approved-rate'),
        },
      ],
      item: {
        approvedMoney: this.$n(this.approvedMoney, 'currency'),
        approvedMonth: this.$t('user.loan.detail.month-format', {
          value: this.approvedMonth,
        }),
        approvedRate: `${this.approvedRate} %`,
      },
    };
  },
  beforeMount() {
    if (this.isLoanActivated) {
      this.fields = [
        ...this.fields,
        {
          key: 'approvedDate',
          label: this.$t('user.loan.detail.approved-date'),
        },
      ];
      this.item = {
        ...this.item,
        approvedDate: this.$d(this.approvedDate, 'short'),
      };
    }
  },
};
</script>

<style scoped>
h6 {
  font-weight: bold;
  padding: 8px;
  margin-bottom: 8px;
}

p {
  margin: 0;
}
</style>
