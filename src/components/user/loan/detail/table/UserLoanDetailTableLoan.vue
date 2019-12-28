<template>
  <div>
    <h6>
      {{ $t('user.loan.detail.application') }}
    </h6>
    <b-table :items="[item]" :fields="fields" stacked>
      <template slot="statusText" slot-scope="data">
        {{ data.item.statusText }}
      </template>
      <template slot="reason">
        {{ `${reasonText} ${reasonDetail !== null ? reasonDetail : ''}` }}
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    loanMoney: { type: Number, default: 0 },
    loanMonth: { type: Number, default: 0 },
    refund: { type: String, default: '' },
    statusText: { type: String, default: '' },
    typeText: { type: String, default: '' },
    reasonText: { type: String, default: '' },
    reasonDetail: { type: String, default: null },
    isLoanScreening: { type: Boolean, default: false },
  },
  data() {
    return {
      fields: [
        {
          key: 'statusText',
          label: this.$t('user.loan.detail.status'),
        },
        {
          key: 'typeText',
          label: this.$t('user.loan.detail.type'),
        },
        {
          key: 'loanMoney',
          label: this.$t('user.loan.detail.loan-money'),
        },
        {
          key: 'loanMonth',
          label: this.$t('user.loan.detail.loan-month'),
        },
      ],
      item: {
        loanMoney: this.$n(this.loanMoney, 'currency'),
        loanMonth: this.$t('user.loan.detail.month-format', {
          value: this.loanMonth,
        }),
        statusText: this.statusText,
        typeText: this.typeText,
      },
    };
  },
  beforeMount() {
    if (!this.isLoanScreening) {
      return;
    }
    this.fields = [
      ...this.fields,
      {
        key: 'refund',
        label: this.$t('user.loan.detail.refund'),
      },
      {
        key: 'reason',
        label: this.$t('user.loan.detail.reason'),
      },
    ];
    this.item = {
      ...this.item,
      refund: this.refund,
      reason: `[${this.reasonText}] ${
        this.reasonDetail !== null ? this.reasonDetail : ''
      }`,
    };
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
