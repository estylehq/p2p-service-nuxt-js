<template>
  <div class="container">
    <notice-detail-header
      :title="detail.title"
      :created="detail.created"
    ></notice-detail-header>
    <notice-detail-content :content="detail.content"></notice-detail-content>
    <notice-list
      :small="true"
      :page-number="pageNumber"
      :total-items="totalItems"
      :items="items"
      :active-id="id"
      @pageChange="page => (pageNumber = page)"
    ></notice-list>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import NoticeDetailHeader from '@/components/support/notice/NoticeDetailHeader.vue';
import NoticeDetailContent from '@/components/support/notice/NoticeDetailContent.vue';
import NoticeList from '@/components/support/notice/NoticeList.vue';

export default {
  middleware: ['support/notice/get-detail'],
  layout: 'support',
  components: {
    NoticeDetailHeader,
    NoticeDetailContent,
    NoticeList,
  },
  data() {
    return {
      id: parseInt(this.$route.params.id),
      pageNumber: parseInt(this.$route.query.page || '1'),
    };
  },
  computed: {
    ...mapState('support/notice/detail', ['detail']),
    ...mapState('support/notice/list', ['items', 'totalItems']),
  },
  watch: {
    pageNumber: function onWatch(pageNumber) {
      this.getList(this.pageNumber);
    },
  },
  async beforeMount() {
    await this.getList(this.pageNumber);
  },
  methods: {
    ...mapActions('support/notice/list', ['getList']),
    onPageChange: function onPageChange(page) {
      this.pageNumber = page;
    },
  },
};
</script>

<style scoped>
div.container {
  padding: 24px 16px;
}
</style>
