<template>
  <div class="container">
    <h6>
      {{ $t('support.qna.add-question') }}
    </h6>
    <qna-write-form @cancel="onCancel" @submit="onSubmit"></qna-write-form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import dialogMixin from '@/mixin/dialog';
import QnaWriteForm from '~/components/support/qna/QnaWriteForm.vue';

export default {
  middleware: ['support/qna/index'],
  layout: 'support',
  components: {
    QnaWriteForm,
  },
  mixins: [dialogMixin],
  computed: {
    ...mapState('support/qna/write', ['success', 'message', 'id']),
  },
  watch: {
    message: function onResponse(message) {
      if (message === null) {
        return;
      }
      this.showDialog(this.$t('qna.write-cannot-added-question'), message);
    },
    success: function onResponse(success) {
      if (!success) {
        return;
      }
      this.$router.push(
        this.localePath({ name: 'support-qna-id', params: { id: this.id } })
      );
    },
  },
  beforeDestroy() {
    this.clear();
  },
  methods: {
    ...mapActions('support/qna/write', ['write', 'clear']),
    onCancel: function onCancel() {
      this.$router.go(-1);
    },
    onSubmit: function onSubmit({ title, content }) {
      this.write({ title, content });
    },
  },
};
</script>

<style scoped>
div.container {
  padding: 24px 16px;
}

h6 {
  text-align: center;
  background-color: #0001;
  border-radius: 8px;
  font-weight: bold;
  padding: 16px;
  margin-bottom: 16px;
}
</style>
