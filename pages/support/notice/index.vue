<template>
  <div class="container">
    <notice-list
      :total-items="totalItems"
      :items="items"
      @pageChange="page => (pageNumber = page)"
    ></notice-list>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import NoticeList from '@/components/support/notice/NoticeList.vue';

export default {
  middleware: ['support/notice/get-list'],
  layout: 'support',
  components: {
    NoticeList,
  },
  data() {
    return {
      pageNumber: 1,
    };
  },
  computed: {
    ...mapState('support/notice/list', ['items', 'totalItems']),
  },
  watch: {
    pageNumber: function onWatch(pageNumber) {
      this.$router.push(
        this.localePath({ name: 'support-notice', query: { page: pageNumber } })
      );
    },
  },
};
</script>

<style scoped>
div.container {
  padding: 24px 16px;
}
</style>
