<template>
  <div class="container">
    <invest-list
      v-if="success"
      :page-number="pageNumber"
      :items="items"
      :total-items="totalItems"
      @click="onClick"
      @pageChange="onPageChange"
    ></invest-list>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import InvestList from '~/components/invest/InvestList.vue';

export default {
  middleware: ['invest/list'],
  components: {
    InvestList,
  },
  data() {
    return {
      pageNumber: parseInt(this.$route.query.page || '1'),
    };
  },
  computed: {
    ...mapState('invest/list', ['success', 'message', 'items', 'totalItems']),
    ...mapState('user', { userType: 'type', userInvestor: 'investor' }),
    ...mapState('sign-in', { isSignedIn: 'success' }),
    isBizUser: function isBizUser() {
      return this.userType === '02';
    },
  },
  async beforeMount() {
    if (!this.isSignedIn) {
      return;
    }
    await this.getList(this.pageNumber);
  },
  methods: {
    ...mapActions('invest/list', ['getList']),
    onClick: function onClick({ id, accessible, isBizOnly }) {
      if (!accessible) {
        return;
      }
      if (isBizOnly !== this.isBizUser) {
        return;
      }
      this.$router.push(this.localePath({ name: 'invest-id', params: { id } }));
    },
    onPageChange: function onPageChange(page) {
      this.pageNumber = page;
      this.$router.push(this.localePath({ name: 'invest', query: { page } }));
    },
  },
};
</script>

<style lang="scss" scoped>
div.container {
  padding: 16px;
}
</style>
