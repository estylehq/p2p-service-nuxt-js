<template>
  <div>
    <floating-header :title="$t('forgot.header')">
      <b-btn
        v-b-tooltip.hover
        :title="$t('forgot.sign-in')"
        :to="localePath('sign-in')"
        variant="outline-secondary"
      >
        <i class="fa fa-sign-in"></i>
      </b-btn>
      <b-btn
        v-b-tooltip.hover
        :title="$t('forgot.reset-password')"
        :to="localePath('reset-password')"
        variant="outline-secondary"
      >
        <i class="fa fa-lock"></i>
      </b-btn>
    </floating-header>
    <forgot-email-form @submit="onSubmit"></forgot-email-form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import FloatingHeader from '~/components/layout/FloatingHeader.vue';
import ForgotEmailForm from '~/components/forgot-email/ForgotEmailForm.vue';
import dialogMixin from '~/mixin/dialog';

export default {
  middleware: ['floating/index'],
  components: {
    FloatingHeader,
    ForgotEmailForm,
  },
  mixins: [dialogMixin],
  layout: 'floating',
  computed: {
    ...mapState('forgot-email', ['success', 'message', 'email']),
  },
  watch: {
    message: function onWatch(message) {
      if (this.success || message === null) {
        return;
      }
      this.showDialog(this.$t('forgot.cannot-found'), message);
    },
    success: function onWatch(success) {
      if (!this.success) {
        return;
      }
      const { email } = this;
      this.showDialog(
        this.$t('forgot.email-founded'),
        email !== null
          ? `${this.$t('forgot.founded-email')} : ${email}`
          : this.$t('forgot.no-found')
      );
    },
  },
  methods: {
    ...mapActions('forgot-email', ['find']),
    onSubmit: function onSubmit(value) {
      this.find(value);
    },
  },
};
</script>

<style scoped></style>
