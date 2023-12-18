<template>
  <div class="container">
    <template v-if="success">
      <user-loan-detail-header
        :status-text="status.text"
        :status-value="status.value"
        :loan-type="loan.type.text"
        :loan-money="loan.required.money"
        :loan-month="loan.required.month"
        :company="company.name"
        :created="created"
      >
      </user-loan-detail-header>
      <b-card no-body>
        <b-tabs card>
          <b-tab :title="$t('user.loan.detail.tab-detail-info')" active>
            <user-loan-detail-table-company
              :name="company.name"
              :code="company.code"
              :postcode="company.address.postcode"
              :city-state="company.address.cityState"
              :detail="company.address.detail"
            ></user-loan-detail-table-company>
            <user-loan-detail-table-offer
              :name="name"
              :contact="contact"
              :email="email"
              :postcode="offerer.address.postcode"
              :city-state="offerer.address.cityState"
              :detail="offerer.address.detail"
            ></user-loan-detail-table-offer>
            <user-loan-detail-table-loan
              :status-text="status.text"
              :status-value="status.value"
              :loan-money="loan.required.money"
              :loan-month="loan.required.month"
              :refund="loan.refund.text"
              :type-text="loan.type.text"
              :reason-text="loan.reason.text"
              :reason-value="loan.reason.value"
              :reason-detail="loan.reason.detail"
              :is-loan-screening="
                parseInt(status.value) > INT_LOAN_STATE_SCREENING
              "
            ></user-loan-detail-table-loan>
            <user-loan-detail-table-result
              v-if="parseInt(status.value) > INT_LOAN_STATE_SCREENING"
              :approved-money="loan.approved.money"
              :approved-month="loan.approved.month"
              :approved-rate="loan.approved.rate"
              :approved-date="loan.approved.date"
              :is-loan-activated="
                parseInt(status.value) > INT_LOAN_STATE_ACTIVATED
              "
            ></user-loan-detail-table-result>
            <user-loan-detail-table-deposit
              v-if="isLoanActivated(parseInt(status.value))"
            ></user-loan-detail-table-deposit>
          </b-tab>
          <b-tab
            v-if="isLoanActivated(parseInt(status.value))"
            :title="$t('user.loan.detail.tab-schedule')"
          >
            <user-loan-detail-schedule
              :id="id"
              :items="schedules"
              :is-preview="isPreview"
              @onMounted="onScheduleMonted"
              @onChangeType="onChangeScheduleType"
            ></user-loan-detail-schedule>
          </b-tab>
        </b-tabs>
      </b-card>
    </template>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import loanStateValueMixin from '~/mixin/invest/loan-state-mixin';
import UserLoanDetailHeader from '~/components/user/loan/detail/UserLoanDetailHeader.vue';
import UserLoanDetailTableCompany from '@/components/user/loan/detail/table/UserLoanDetailTableCompany.vue';
import UserLoanDetailTableOffer from '@/components/user/loan/detail/table/UserLoanDetailTableOffer.vue';
import UserLoanDetailTableLoan from '@/components/user/loan/detail/table/UserLoanDetailTableLoan.vue';
import UserLoanDetailTableResult from '@/components/user/loan/detail/table/UserLoanDetailTableResult.vue';
import UserLoanDetailTableDeposit from '@/components/user/loan/detail/table/UserLoanDetailTableDeposit.vue';
import UserLoanDetailSchedule from '@/components/user/loan/detail/schedule/UserLoanDetailSchedule.vue';

export default {
  layout: 'user-loan',
  components: {
    UserLoanDetailHeader,
    UserLoanDetailTableCompany,
    UserLoanDetailTableOffer,
    UserLoanDetailTableLoan,
    UserLoanDetailTableResult,
    UserLoanDetailTableDeposit,
    UserLoanDetailSchedule,
  },
  mixins: [loanStateValueMixin],
  data() {
    return {
      id: parseInt(this.$route.params.id) || -1,
      isPreview: true,
    };
  },
  computed: {
    ...mapState('user', ['name', 'contact', 'email']),
    ...mapState('user/loan/detail', [
      'success',
      'message',
      'status',
      'loan',
      'offerer',
      'company',
      'other',
      'created',
      'updated',
    ]),
    ...mapState('user/loan/schedule', {
      schedules: 'items',
      hasSchedules: 'success',
      messageSchedules: 'message',
    }),
  },
  async beforeMount() {
    if (this.id <= 0) {
      return;
    }
    try {
      await this.get(this.id);
    } catch (error) {
      if (error.response) {
        this.$nuxt.error({
          statusCode: error.response.statusCode,
          message: error.message,
        });
      } else {
        this.$nuxt.error({ statusCode: 500, message: error.message });
      }
    }
  },
  beforeDestroy() {
    this.clear();
    this.clearSchedule();
  },
  methods: {
    ...mapActions('user/loan/detail', ['get', 'clear']),
    ...mapActions('user/loan/schedule', {
      getSchedule: 'getSchedule',
      clearSchedule: 'clear',
    }),
    onScheduleMonted: function onScheduleMonted() {
      this.getSchedule({ id: this.id, type: '01' });
    },
    onChangeScheduleType: function onChangeScheduleType(value) {
      this.isPreview = value === '01';
      this.getSchedule({ id: this.id, type: value });
    },
  },
  head() {
    return {
      title: this.$t('page-title-format', {
        value: this.$t('user.loan.detail.page-title', {
          id: this.id || 0,
        }),
      }),
    };
  },
};
</script>

<style scoped>
div.container {
  padding: 16px;
}

div.card {
  padding: 0;
}

div.card,
div.card:hover {
  box-shadow: unset;
}
</style>
