<template>
  <div class="container">
    <qna-detail-header
      :title="detail.title"
      :created="detail.created"
      :replies="replies.length"
    ></qna-detail-header>
    <qna-detail-content :content="detail.content"></qna-detail-content>
    <div class="reply-list">
      <p v-if="replies.length <= 0" class="none">
        답변이 등록되지 않았습니다.
      </p>
      <qna-detail-reply-item
        v-for="(reply, index) in replies"
        :key="`${id}_${index}`"
        :content="reply.content"
        :created="reply.created"
      ></qna-detail-reply-item>
    </div>
    <div class="divider"></div>
    <qna-list
      :small="true"
      :page-number="pageNumber"
      :total-items="totalItems"
      :items="items"
      :active-id="id"
      @pageChange="page => (pageNumber = page)"
    ></qna-list>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import QnaDetailHeader from '~/components/support/qna/QnaDetailHeader.vue';
import QnaDetailContent from '~/components/support/qna/QnaDetailContent.vue';
import QnaDetailReplyItem from '~/components/support/qna/QnaDetailReplyItem.vue';
import QnaList from '~/components/support/qna/QnaList.vue';

export default {
  middleware: ['support/qna/index'],
  layout: 'support',
  components: {
    QnaList,
    QnaDetailHeader,
    QnaDetailContent,
    QnaDetailReplyItem,
  },
  data() {
    return {
      id: parseInt(this.$route.params.id),
      pageNumber: parseInt(this.$route.query.page || '1'),
    };
  },
  computed: {
    ...mapState('support/qna/detail', [
      'success',
      'message',
      'detail',
      'replies',
    ]),
    ...mapState('support/qna/list', ['items', 'totalItems']),
  },
  watch: {
    pageNumber: function onWatch(pageNumber) {
      this.getList(this.pageNumber);
    },
  },
  async beforeMount() {
    await this.get(this.id);
    await this.getList(this.pageNumber);
  },
  methods: {
    ...mapActions('support/qna/list', ['getList']),
    ...mapActions('support/qna/detail', ['get']),
  },
};
</script>

<style scoped>
div.reply-list {
  margin-bottom: 32px;
}

div.reply-list > p.none {
  font-weight: bold;
  text-align: center;
  color: #1f93ff;
}

div.divider {
  margin: 16px auto;
}
</style>
