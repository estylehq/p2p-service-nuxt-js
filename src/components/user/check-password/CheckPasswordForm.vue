<template>
  <b-form @submit.prevent="$emit('submit', password)">
    <b-form-group :label="$t('user.check-password.password')">
      <input
        id="password"
        v-model="password"
        :state="isValidPassword"
        :class="`form-control ${validCss(isValidPassword)}`"
        type="password"
        aria-describedby="passwordFeedback"
        required
      />
      <b-form-invalid-feedback id="passwordFeedback">
        {{ $t('user.check-password.password-is-too-short') }}
      </b-form-invalid-feedback>
    </b-form-group>
    <div class="buttons">
      <div class="spacer"></div>
      <b-button :disabled="!isValidPassword" variant="primary" type="submit">
        {{ $t('button.confirm') }}
      </b-button>
    </div>
  </b-form>
</template>

<script>
export default {
  data() {
    return { password: '' };
  },
  computed: {
    isValidPassword: function isValidPassword() {
      if (this.password === null || this.password.length <= 0) {
        return null;
      }
      return this.password.length > 7;
    },
  },
  methods: {
    validCss: function validCss(value) {
      if (value === null) {
        return '';
      }
      return value ? 'is-valid' : 'is-invalid';
    },
  },
};
</script>

<style scoped>
form {
  margin: 16px;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

button {
  text-align: center;
  display: flex;
  margin: 0 auto;
}

@media (max-width: 768px) {
  form {
    padding: 8px 16px;
  }
}
</style>
