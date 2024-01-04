<template>
  <div>
    <floating-header :title="$t('reset-password.header')">
      <b-btn
        v-b-tooltip.hover
        :title="$t('reset-password.sign-in')"
        :to="localePath('sign-in')"
        variant="outline-secondary"
      >
        <i class="fa fa-sign-in"></i>
      </b-btn>
      <b-btn
        v-b-tooltip.hover
        :title="$t('reset-password.find-email')"
        :to="localePath('forgot-email')"
        variant="outline-secondary"
      >
        <i class="fa fa-search"></i>
      </b-btn>
    </floating-header>
    <reset-password-form @submit="onSubmit"></reset-password-form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import FloatingHeader from '~/components/layout/FloatingHeader.vue';
import ResetPasswordForm from '~/components/reset-password/ResetPasswordForm.vue';
import dialogMixin from '~/mixin/dialog';

export default {
  middleware: ['floating/index'],
  components: {
    FloatingHeader,
    ResetPasswordForm,
  },
  mixins: [dialogMixin],
  layout: 'floating',
  computed: {
    ...mapState('reset-password', ['success', 'message']),
  },
  watch: {
    success: function onWatch(success) {
      if (!success) {
        return;
      }
      const { $router, localePath } = this;
      this.showDialog(
        this.$t('reset-password.request-success'),
        this.$t('reset-password.check-mail-and-reset'),
        {
          title: this.$t('reset-password.button-confirm'),
          handler: () => {
            $router.push(localePath('index'));
          },
        }
      );
    },
    message: function onWatch(message) {
      if (message === null) {
        return;
      }
      this.showDialog(this.$t('reset-password.request-failed'), message);
    },
  },
  methods: {
    ...mapActions('reset-password', ['request']),
    onSubmit: function onSubmit(value) {
      this.request(value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
