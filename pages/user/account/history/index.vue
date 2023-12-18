<template>
  <div>
    <div v-if="success" class="list">
      <user-account-history-item
        v-for="(item, index) in list"
        :key="`${index}_${pageNumber}_history`"
        :datetime="item.datetime"
        :type="item.type.text"
        :type-val="item.type.value"
        :state="item.state.text"
        :amount="item.amount"
      ></user-account-history-item>
    </div>
    <b-pagination
      v-model="pageNumber"
      :total-rows="totalItems"
      @pageChange="onPageChange"
      align="center"
      size="sm"
    ></b-pagination>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import defaultSetMixin from '~/mixin/user/default-set';
import UserAccountHistoryItem from '~/components/user/account/history/UserAccountHistoryItem.vue';

export default {
  layout: 'user-account',
  components: {
    UserAccountHistoryItem,
  },
  mixins: [defaultSetMixin],
  data() {
    return {
      pageNumber: parseInt(this.$route.query.page) || 1,
    };
  },
  computed: {
    ...mapState('user/account/history', [
      'success',
      'message',
      'list',
      'totalItems',
    ]),
  },
  watch: {
    pageNumber: function onWatch(pageNumber) {
      this.$router.replace(
        this.localePath({
          name: 'user-account-history',
          query: { page: pageNumber },
        })
      );
      this.getList(pageNumber);
    },
  },
  async beforeMount() {
    await this.getList(this.pageNumber);
  },
  methods: {
    ...mapActions('user/account/history', ['getList']),
    onPageChange: function onPageChange(pageNumber) {
      this.pageNumber = pageNumber;
    },
  },
};
</script>

<style scoped>
ul.pagination {
  margin-top: 8px;
}
</style>
