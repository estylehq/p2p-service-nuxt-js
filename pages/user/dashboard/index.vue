<template>
  <div class="container">
    <template v-if="!(isFetched && success)">
      <div>
        <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
        {{ $t('dashboard.getting-data') }}
      </div>
    </template>
    <template v-if="isFetched && success">
      <b-row>
        <b-col cols="12" sm="6" lg="4">
          <dashboard-user
            :name="isBizUser ? company.name : name"
            :email="email"
            :invest-type="investor.type.text"
            :is-lender="isLender"
          ></dashboard-user>
          <dashboard-invest-accrued
            v-if="isCertificated"
            :is-disable-taxes="isBizUser && isLender"
            :invests="invests.totalMoney"
            :left-invests="invests.leftMoney"
            :interests="interests.tax"
            :without-tax-interests="interests.withoutTax"
            :rates="rates.tax"
            :without-tax-rates="rates.withoutTax"
          ></dashboard-invest-accrued>
        </b-col>
        <b-col v-if="isCertificated" cols="12" sm="6" lg="4">
          <dashboard-balance
            :bank="virtual.name"
            :account="virtual.id"
            :owner="virtual.owner"
            :deposit="virtual.deposit"
            @copy="onCopyClick"
          ></dashboard-balance>
          <dashboard-invest-limited
            :investor="investor.type"
            :is-biz-user="isBizUser"
            :is-lender="isLender"
            :left="limit.left"
            :max="limit.max"
          ></dashboard-invest-limited>
        </b-col>
        <b-col v-if="isCertificated" cols="12" sm="6" lg="4">
          <dashboard-donut-chart
            v-if="success"
            :ready="items.ready"
            :repay="items.repay"
            :delay="items.delay"
            :complete="items.complete"
          ></dashboard-donut-chart>
        </b-col>
        <b-col v-if="!isCertificated" cols="12" md="6">
          <dashboard-certification
            :is-biz-user="isBizUser"
          ></dashboard-certification>
        </b-col>
      </b-row>
    </template>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import clipboardMixin from '~/mixin/clipboard';
import dialogMixin from '~/mixin/dialog';
import DashboardUser from '~/components/user/dashboard/DashboardUser.vue';
import DashboardBalance from '~/components/user/dashboard/DashboardBalance.vue';
import DashboardDonutChart from '~/components/user/dashboard/DashboardDonutChart.vue';
import DashboardInvestAccrued from '~/components/user/dashboard/DashboardInvestAccrued.vue';
import DashboardInvestLimited from '~/components/user/dashboard/DashboardInvestLimited.vue';
import DashboardCertification from '~/components/user/dashboard/DashboardCertification.vue';

export default {
  middleware: ['dashboard/index'],
  layout: 'user',
  components: {
    DashboardUser,
    DashboardBalance,
    DashboardDonutChart,
    DashboardInvestAccrued,
    DashboardInvestLimited,
    DashboardCertification,
  },
  mixins: [clipboardMixin, dialogMixin],
  computed: {
    ...mapState('user', [
      'email',
      'name',
      'contact',
      'gender',
      'created',
      'updated',
      'type',
      'birth',
      'company',
      'lender',
      'subscribes',
      'investor',
      'refund',
      'address',
    ]),
    ...mapState('user/fetch', { isFetched: state => state.success }),
    ...mapState('user/dashboard', [
      'success',
      'message',
      'virtual',
      'interests',
      'rates',
      'limit',
      'items',
      'invests',
    ]),
    isCertificated: function isCertificated() {
      return this.investor.type.value !== '00';
    },
    isBizUser: function isBizUser() {
      return this.type === '02';
    },
    isLender: function isLender() {
      return this.lender.value === '02';
    },
  },
  async beforeMount() {
    this.clearFetch();
    this.clearDashboard();
    await this.fetch();
    await this.dashboard();
  },
  methods: {
    ...mapActions('user/fetch', {
      fetch: 'fetch',
      clearFetch: 'clear',
    }),
    ...mapActions('user/dashboard', {
      dashboard: 'dashboard',
      clearDashboard: 'clear',
    }),
    onCopyClick: function onCopyClick(field) {
      const title = this.$t('dashboard.copied-account');
      const message = this.$t('dashboard.copied-account');
      const { showDialog } = this;
      this.copy(field, success => {
        if (!success) {
          return;
        }
        showDialog(title, message);
      });
    },
  },
  head() {
    return {
      title: this.$t('page-title-format', {
        value: this.$t('user.menu-dashboard'),
      }),
    };
  },
};
</script>

<style lang="scss" scoped>
div.container {
  padding: 16px;
  min-height: 256px;
}

@media (max-width: 768px) {
  div.container {
    padding: 8px;
  }
}
</style>
