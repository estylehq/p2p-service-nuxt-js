<template>
  <b-form @submit.prevent="$emit('submit', { password, newPassword })">
    <b-form-group :label="$t('user.privacy.password.current-password')">
      <b-form-input
        id="current-password"
        v-model="password"
        :state="isValidPassword"
        type="password"
        aria-describedby="passwordFeedback"
        required
      ></b-form-input>
      <b-form-invalid-feedback id="passwordFeedback">
        {{ $t('user.privacy.password.msg-too-shorts') }}
      </b-form-invalid-feedback>
    </b-form-group>
    <b-form-group :label="$t('user.privacy.password.new-password')">
      <password
        id="new-password"
        :badge="false"
        :secure-length="8"
        v-model="newPassword"
        default-class="form-control"
        type="password"
        placeholder=""
        required
      ></password>
      <b-form-text>
        <ul>
          <li>{{ $t('sign-up.enter-eight-letters') }}</li>
          <li>
            {{ $t('sign-up.more-safety-upper-case-specific-charactors') }}
          </li>
        </ul>
      </b-form-text>
    </b-form-group>
    <b-form-group :label="$t('user.privacy.password.confirm-password')">
      <b-form-input
        id="confirm-password"
        v-model="confirmPassword"
        :state="isMatchPassword"
        type="password"
        aria-describedby="confirmPasswordFeedback"
        required
      ></b-form-input>
      <b-form-invalid-feedback id="confirmPasswordFeedback">
        {{ $t('user.privacy.password.msg-not-matched') }}
      </b-form-invalid-feedback>
    </b-form-group>
    <div class="text-right">
      <b-button
        :disabled="!(isValidPassword && isValidNewPassword && isMatchPassword)"
        variant="primary"
        type="submit"
      >
        {{ $t('button.save') }}
      </b-button>
    </div>
  </b-form>
</template>

<script>
import Password from 'vue-password-strength-meter';

export default {
  components: {
    Password,
  },
  props: {
    isUpdated: { type: Boolean, default: false },
  },
  data() {
    return {
      password: '',
      newPassword: '',
      confirmPassword: '',
    };
  },
  computed: {
    isValidPassword: function isValidPassword() {
      return this.isValidField(this.password);
    },
    isValidNewPassword: function isValidPassword() {
      return this.isValidField(this.newPassword);
    },
    isMatchPassword: function isMatchPassword() {
      if (this.confirmPassword.length <= 0) {
        return null;
      }
      return this.newPassword === this.confirmPassword;
    },
  },
  watch: {
    isUpdated: function onWatch(isUpdated) {
      if (!isUpdated) {
        return;
      }
      this.password = '';
      this.newPassword = '';
      this.confirmPassword = '';
    },
  },
  methods: {
    isValidField: function isValidField(value) {
      if (value.length <= 0) {
        return null;
      }
      return value.length >= 8;
    },
  },
};
</script>

<style scoped>
.Password {
  max-width: unset;
}

.Password >>> .Password__badge::before {
  content: 'score: ';
}

.Password >>> .Password__badge {
  padding: 2 4px;
  font-size: 0.8rem;
  text-align: center;
  width: fit-content;
}

small.form-text > ul {
  padding-left: 24px;
}
</style>
