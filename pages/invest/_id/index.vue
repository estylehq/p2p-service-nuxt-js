<template>
  <div class="container">
    <template v-if="success">
      <invest-detail-header
        :id="id"
        :name="name"
        :rate="rate"
        :start="start"
        :end="end"
        :state-text="state.text"
        :state-value="state.value"
        :current="current"
        :target="target"
        :months="months"
        :joined="joined"
        :funded="funded"
        :invest="invest"
        :activated="isLoanActivated(stateInt)"
        :completed="isLoanCompleted(stateInt)"
      ></invest-detail-header>
      <invest-detail-buttons
        :is-funded="funded"
        :is-loan-funding="isLoanFunding(stateInt)"
        :is-loan-collected="isLoanCollected"
        :is-loan-funding-completed="isLoanFundingCompleted(stateInt)"
        :is-loan-closed="isLoanClosed(stateInt)"
      ></invest-detail-buttons>
      <b-card no-body>
        <b-tabs card>
          <b-tab :title="$t('invest.detail.nav-detail-info')" active>
            <template v-for="(content, index) in contents">
              <invest-detail-content
                :key="`${id}_content_${index}`"
                :title="content.title"
                :content="content.content"
              ></invest-detail-content>
            </template>
          </b-tab>
          <b-tab
            :title="
              isLoanActivated(stateInt)
                ? $t('invest.detail.nav-actual')
                : $t('invest.detail.nav-expected')
            "
          >
            <template v-if="isLoanActivated(stateInt)">
              <invest-detail-schedule
                :id="id"
                :money="invest"
                :isLoanActivated="isLoanActivated(stateInt)"
                :on-mounted="onMountedSchedule"
              ></invest-detail-schedule>
            </template>
            <template v-if="!isLoanActivated(stateInt)">
              <invest-detail-preview
                :id="id"
                :items="previews"
                :money="invest"
                :funded="funded"
                :avaliable="target - current"
                :is-biz-user="type === '02'"
                :on-mounted="onMountedPreview"
                @submit="onSubmitPreview"
              ></invest-detail-preview>
            </template>
            <invest-detail-schedule-info></invest-detail-schedule-info>
          </b-tab>
        </b-tabs>
      </b-card>
    </template>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import loanStateMixin from '~/mixin/invest/loan-state-mixin';
import InvestDetailButtons from '~/components/invest/detail/InvestDetailButtons.vue';
import InvestDetailHeader from '~/components/invest/detail/InvestDetailHeader.vue';
import InvestDetailContent from '~/components/invest/detail/InvestDetailContent.vue';
import InvestDetailSchedule from '~/components/invest/detail/schedule/InvestDetailSchedule.vue';
import InvestDetailPreview from '~/components/invest/detail/preview/InvestDetailPreview.vue';
import InvestDetailScheduleInfo from '~/components/invest/detail/InvestDetailScheduleInfo.vue';

export default {
  middleware: ['invest/detail'],
  components: {
    InvestDetailHeader,
    InvestDetailButtons,
    InvestDetailContent,
    InvestDetailSchedule,
    InvestDetailPreview,
    InvestDetailScheduleInfo,
  },
  mixins: [loanStateMixin],
  data() {
    return {
      id: parseInt(this.$route.params.id || '1'),
      isGettingSchedule: false,
    };
  },
  computed: {
    ...mapState('user', ['type', 'investor']),
    ...mapState('invest/detail/preview', {
      previews: 'items',
      hasPreview: 'success',
      messagePreview: 'message',
    }),
    ...mapState('invest/detail/schedule', {
      schedules: 'items',
      hasSchedules: 'success',
      messageSchedule: 'message',
    }),
    ...mapState('invest/detail', [
      'success',
      'message',
      'error',
      'name',
      'type',
      'rate',
      'start',
      'end',
      'state',
      'current',
      'target',
      'refund',
      'months',
      'joined',
      'funded',
      'invest',
      'contents',
    ]),
    isLoanCollected: function isLoanCollected() {
      const { target, current } = this;
      return target === current;
    },
    stateInt: function stateInt() {
      return parseInt(this.state.value);
    },
  },
  watch: {
    message: function onWatch(message) {
      this.$nuxt.error({
        statusCode: 500,
        message: message,
      });
    },
  },
  async beforeMount() {
    if (!this.success) {
      await this.get(this.id);
    }
  },
  beforeDestroy() {
    this.clear();
    this.clearSchedule();
    this.clearPreview();
  },
  methods: {
    ...mapActions('invest/detail', ['get', 'clear']),
    ...mapActions('invest/detail/schedule', {
      getSchedule: 'getSchedule',
      clearSchedule: 'clear',
    }),
    ...mapActions('invest/detail/preview', {
      getPreview: 'getPreview',
      clearPreview: 'clear',
    }),
    onSubmitPreview: function onSubmitPreview(value) {
      this.getPreview({ id: this.id, money: value });
    },
    onMountedPreview: function onMountedPreview() {
      if (!this.funded) {
        return;
      }
      this.getPreview({ id: this.id, money: this.invest });
    },
    onMountedSchedule: function onMountedSchedule() {
      this.getSchedule({ id: this.id });
    },
  },
};
</script>

<style scoped>
div.card {
  padding: 0;
}

div.card,
div.card:hover {
  box-shadow: unset;
}

div.container {
  padding: 16px;
}

div.contents-container {
  margin: 8px auto;
}
</style>
