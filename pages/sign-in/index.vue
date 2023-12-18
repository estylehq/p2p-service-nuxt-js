<template>
  <div>
    <floating-header :title="$t('sign-in.header')"></floating-header>
    <sign-in-form @submit="onSubmit"></sign-in-form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import FloatingHeader from '~/components/layout/FloatingHeader.vue';
import SignInForm from '~/components/sign-in/SignInForm.vue';
import dialogMixin from '~/mixin/dialog';

export default {
  middleware: ['floating/index'],
  layout: 'floating',
  components: {
    FloatingHeader,
    SignInForm,
  },
  mixins: [dialogMixin],
  computed: {
    ...mapState('sign-in', ['success', 'message']),
  },
  watch: {
    success: function onWatch(success) {
      if (!success) {
        return;
      }
      const { query } = this.$route;
      if (!query) {
        this.$router.push(this.localePath('user-dashboard'));
        return;
      }
      const { path, id } = query;
      const newQuery = { ...query };
      if (path && path.length > 0) {
        delete newQuery.path;
        if (id) {
          delete newQuery.id;
        }
      }
      this.$router.push({
        name: path,
        query: newQuery,
        params: { id },
      });
    },
    message: function onWatch(message) {
      if (message === null) {
        return;
      }
      this.showDialog(this.$t('sign-in.failed-sign-in'), message);
    },
  },
  methods: {
    ...mapActions('sign-in', ['signIn']),
    onSubmit: function onSubmit(values) {
      this.signIn(values);
    },
  },
};
</script>

<style scoped>
form {
  padding: 16px;
}
</style>
