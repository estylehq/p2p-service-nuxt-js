<template>
  <user-privacy-password-form
    :is-updated="success"
    @submit="onSubmit"
  ></user-privacy-password-form>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import defaultSetMixin from '~/mixin/user/default-set';
import dialogMixin from '~/mixin/dialog';
import UserPrivacyPasswordForm from '~/components/user/privacy/UserPrivacyPasswordForm.vue';

export default {
  layout: 'user-privacy',
  components: {
    UserPrivacyPasswordForm,
  },
  mixins: [defaultSetMixin, dialogMixin],
  computed: {
    ...mapState('user/update-password', ['success', 'message']),
  },
  watch: {
    success: function onWatch(success) {
      if (!success) {
        return;
      }
      this.showDialog(
        'user.privacy.password.password-updated',
        'user.privacy.password.updated-your-password'
      );
    },
    message: function onWatch(message) {
      if (message === null) {
        return;
      }
      this.showDialog('user.privacy.password.failed-password-updated', message);
    },
  },
  beforeMount() {
    this.clear();
  },
  methods: {
    ...mapActions('user/update-password', ['update', 'clear']),
    onSubmit: function onSubmit({ password, newPassword }) {},
  },
  head() {
    return {
      title: this.$t('page-title-format', {
        value: this.$t('user.privacy.menu-password'),
      }),
    };
  },
};
</script>

<style scoped></style>
