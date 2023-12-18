<template>
  <div class="container">
    <h3 class="header">
      {{ $t('security.request.header') }}
    </h3>
    <p class="summary">
      {{ $t('security.request.description') }}
    </p>
    <security-request-form @submit="onSubmit"></security-request-form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import dialogMixin from '~/mixin/dialog';
import SecurityRequestForm from '~/components/security/request/SecurityRequestForm.vue';

export default {
  middleware: ['security/request/index'],
  components: {
    SecurityRequestForm,
  },
  mixins: [dialogMixin],
  computed: {
    ...mapState('security', ['success', 'message']),
  },
  watch: {
    success: function onWatch(success) {
      if (!success) {
        return;
      }
      this.$router.push(this.localePath('security-complete'));
    },
    message: function onWatch(message) {
      if (message === null) {
        return;
      }
      this.showDialog(this.$t('security.cannot-request'), message);
    },
  },
  methods: {
    ...mapActions('security', ['request']),
    onSubmit: function onSubmit(values) {
      this.request(values);
    },
  },
};
</script>

<style scoped>
h3.header {
  margin-bottom: 32px;
}

p.summary {
  text-align: center;
  font-size: 0.9rem;
}
</style>
