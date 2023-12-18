<template>
  <div>
    <floating-header
      :title="$t('user.check-password.header')"
    ></floating-header>
    <p>
      {{ $t('user.check-password.check-your-password-for-safety') }}
    </p>
    <check-password-form @submit="check"></check-password-form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import dialogMixin from '@/mixin/dialog';
import FloatingHeader from '~/components/layout/FloatingHeader.vue';
import CheckPasswordForm from '@/components/user/check-password/CheckPasswordForm.vue';

export default {
  layout: 'floating',
  components: {
    FloatingHeader,
    CheckPasswordForm,
  },
  mixins: [dialogMixin],
  computed: {
    ...mapState('user/check-password', ['success', 'message']),
  },
  watch: {
    success: function onResponse(success) {
      if (!success) {
        return;
      }
      const { path } = this.$route.query;
      if (path) {
        this.$router.push({ name: path });
      } else {
        this.$router.push(this.localePath('user-privacy'));
      }
    },
    message: function onResponse(message) {
      if (message === null) {
        return;
      }
      this.showDialog('비밀번호가 확인되지 않았습니다.', message);
    },
  },
  methods: {
    ...mapActions('user/check-password', ['check']),
  },
  head() {
    return {
      title: this.$t('page-title-format', {
        value: this.$t('user.check-password.header'),
      }),
    };
  },
};
</script>

<style scoped>
p {
  text-align: center;
  font-size: 0.9rem;
  padding: 16px;
  margin-top: 8px;
}
</style>
