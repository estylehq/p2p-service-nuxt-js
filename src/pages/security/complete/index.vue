<template>
  <div class="container">
    <h3>
      {{ $t('security.complete.complete') }}
    </h3>
    <p class="text">
      {{ $t('security.complete.contact-later-check-your-application') }}
    </p>
    <security-complete-table :result="result"></security-complete-table>
    <div class="buttons">
      <div class="spacer"></div>
      <b-button variant="primary">
        <i class="fa fa-home"></i>
        {{ $t('security.complete.button-go-to-home') }}
      </b-button>
      <div class="spacer"></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import SecurityCompleteTable from '~/components/security/complete/SecurityCompleteTable.vue';

export default {
  middleware: ['security/complete/index'],
  components: {
    SecurityCompleteTable,
  },
  computed: {
    ...mapState('security', ['success', 'result']),
  },
  beforeDestroy() {
    this.clear();
  },
  methods: {
    ...mapActions('security', ['clear']),
  },
};
</script>

<style scoped>
div.container {
  padding: 24px auto;
}

h3,
p.text {
  text-align: center;
}

h3 {
  margin-bottom: 32px;
}

p.text {
  padding: 16px;
  margin-bottom: 16px;
  font-size: 0.9rem;
}
</style>
