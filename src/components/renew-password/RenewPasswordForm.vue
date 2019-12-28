<template>
  <b-form @submit.prevent="$emit('submit', newPassword)">
    <b-form-group :label="$t('renewPassword.password')" label-for="newPassword">
      <input
        id="newPassword"
        v-model="newPassword"
        :class="
          `form-control
        ${
          newPassword.length <= 0
            ? ''
            : validNewPassword
            ? 'is-valid'
            : 'is-invalid'
        }`
        "
        :state="validNewPassword"
        @input="onChange"
        required
        aria-describedby="newPasswordFeedback"
        type="password"
      />
      <b-form-invalid-feedback id="newPasswordFeedback">
        {{ $t('renewPassword.password-is-too-short') }}
      </b-form-invalid-feedback>
    </b-form-group>
    <b-form-group
      :label="$t('renewPassword.confirm-password')"
      label-for="confirm-password"
    >
      <input
        id="confirm-password"
        v-model="confirm"
        :class="
          `form-control
        ${confirm.length <= 0 ? '' : matchPassword ? 'is-valid' : 'is-invalid'}`
        "
        :state="matchPassword"
        @input="onChange"
        required
        aria-describedby="currentPasswordFeedback"
        type="password"
      />
      <b-form-invalid-feedback id="currentPasswordFeedback">
        {{ $t('renewPassword.passwords-are-not-matched') }}
      </b-form-invalid-feedback>
    </b-form-group>
    <div class="buttons">
      <div class="spacer"></div>
      <b-button
        :disabled="!validNewPassword || !matchPassword"
        variant="primary"
        type="submit"
      >
        {{ $t('renewPassword.button-update') }}
      </b-button>
    </div>
  </b-form>
</template>

<script>
export default {
  data() {
    return {
      newPassword: '',
      confirm: '',
      validNewPassword: null,
      matchPassword: null,
    };
  },
  methods: {
    onChange: function onChange() {
      this.validNewPassword =
        this.newPassword.length <= 0 ? null : this.newPassword.length >= 8;
      this.matchPassword =
        this.confirm.length <= 0 ? null : this.newPassword === this.confirm;
    },
  },
};
</script>

<style scoped></style>
