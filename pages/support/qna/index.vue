<template>
  <div class="container">
    <qna-list
      :page-number="pageNumber"
      :items="items"
      :total-items="totalItems"
      @pageChange="onPageChange"
    ></qna-list>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import QnaList from '~/components/support/qna/QnaList.vue';

export default {
  middleware: ['support/qna/index'],
  layout: 'support',
  components: {
    QnaList,
  },
  data() {
    return {
      pageNumber: parseInt(this.$route.query.page) || 1,
    };
  },
  computed: {
    ...mapState('support/qna/list', [
      'success',
      'message',
      'items',
      'totalItems',
    ]),
  },
  watch: {
    pageNumber: function onResponse(pageNumber) {
      this.$router.replace(
        this.localePath({
          name: 'support-qna',
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
    ...mapActions('support/qna/list', ['getList']),
    onPageChange: function onPageChange(pageNumber) {
      this.pageNumber = pageNumber;
    },
  },
};
</script>

<style lang="scss" scoped>
div.container {
  padding: 24px 16px;
}
</style>
