<template>
  <div class="container">
    <user-invest-total-summary
      :money="invested"
      :principal="principal"
      :interest="interest"
    ></user-invest-total-summary>
    <b-row>
      <template v-for="(item, index) in items">
        <user-invest-item
          :key="`${pagination}${item.id}${index}`"
          :id="item.id"
          :rate="item.rate"
          :months="item.months"
          :stateText="item.state.text"
          :stateValue="item.state.value"
          :name="item.name"
          :target="item.target"
          :term="item.term"
          :start="item.start"
          :end="item.end"
          :invest="item.invest"
          @onClick="onItemClick"
        ></user-invest-item>
      </template>
    </b-row>
    <b-pagination
      v-model="pagination"
      :total-rows="totalItems"
      :per-page="8"
      @change="onPageChange"
      align="center"
    >
    </b-pagination>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import UserInvestItem from '@/components/user/invest/UserInvestItem.vue';
import UserInvestTotalSummary from '~/components/user/invest/UserInvestTotalSummary.vue';

export default {
  layout: 'user',
  components: {
    UserInvestItem,
    UserInvestTotalSummary,
  },
  data() {
    return {
      pagination: 1,
    };
  },
  computed: {
    ...mapState('user/invest/summary', {
      invested: 'money',
      principal: 'principal',
      interest: 'interest',
      hasSummary: 'success',
      summaryError: 'message',
    }),
    ...mapState('user/invest/list', [
      'success',
      'message',
      'items',
      'totalItems',
    ]),
  },
  beforeMount() {
    this.getList();
    this.getSummary();
  },
  beforeDestroy() {
    this.clear();
    this.clearSummary();
  },
  methods: {
    ...mapActions('user/invest/list', ['getList', 'clear']),
    ...mapActions('user/invest/summary', {
      getSummary: 'getSummary',
      clearSummary: 'clear',
    }),
    onItemClick: function onItemClick(value) {
      this.$router.push(
        this.localePath({
          name: 'invest-id',
          params: { id: value },
        })
      );
    },
    onPageChange: function onPageChange(value) {
      this.getList(value);
    },
  },
  head() {
    return {
      title: this.$t('page-title-format', {
        value: this.$t('user.invest.page-title'),
      }),
    };
  },
};
</script>

<style lang="scss" scoped></style>
