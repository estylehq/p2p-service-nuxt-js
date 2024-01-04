<template>
  <div class="container">
    <b-row v-if="success">
      <user-loan-list-item
        v-for="(item, index) in items"
        :id="item.id"
        :key="`${pageNumber}_loan_${index}_${item.id}`"
        :status-text="item.status.text"
        :status-value="item.status.value"
        :loan-type="item.loan.type.text"
        :loan-money="item.loan.required.money"
        :loan-month="item.loan.required.month"
        :company="item.company.name"
        :created="item.created"
        @click="onClick"
      ></user-loan-list-item>
    </b-row>
    <b-pagination
      v-model="pageNumber"
      :total-rows="totalItems"
      :per-page="8"
      align="center"
    >
    </b-pagination>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import UserLoanListItem from '@/components/user/loan/list/UserLoanListItem.vue';

export default {
  layout: 'user-loan',
  components: {
    UserLoanListItem,
  },
  data() {
    return {
      pageNumber: 1,
    };
  },
  computed: {
    ...mapState('user/loan/list', [
      'success',
      'message',
      'error',
      'items',
      'totalItems',
    ]),
  },
  watch: {
    message: function onWatch(message) {
      if (!message) {
        return;
      }
      this.$nuxt.error({
        statusCode: 500,
        message,
      });
    },
    pageNumber: function onWatch(pageNumber) {
      this.getList(pageNumber);
    },
  },
  async beforeMount() {
    await this.getList(this.pageNumber);
  },
  beforeDestroy() {
    this.clear();
  },
  methods: {
    ...mapActions('user/loan/list', ['getList', 'clear']),
    onClick: function onClick(id) {
      this.$router.push(
        this.localePath({
          name: 'user-loan-id',
          params: { id },
        })
      );
    },
  },
};
</script>

<style lang="scss" scoped>
div.container {
  padding: 16px;
}
</style>
