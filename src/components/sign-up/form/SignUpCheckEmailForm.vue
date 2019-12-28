<template>
  <div>
    <p class="header"><span>1</span>{{ $t('sign-up.check-email') }}</p>
    <b-form @submit.prevent="$emit('submit', email)" name="email-form">
      <b-form-group :label="$t('sign-up.email')" label-for="email">
        <b-form-input
          id="email"
          v-model="email"
          :state="message === null ? isValid : false"
          @input="$emit('input')"
          required
          type="email"
          autocomplete="off"
          aria-describedby="invalid-email"
        ></b-form-input>
        <b-form-feedback id="invalid-email">
          {{
            !isValid
              ? $t('sign-up.invalid-email')
              : message !== null
              ? $t('sign-up.already-registered-email')
              : ''
          }}
        </b-form-feedback>
      </b-form-group>
      <b-button
        :disabled="!isValid"
        @click="$emit('email', email)"
        variant="primary"
      >
        {{ $t('sign-up.check-email') }}
      </b-button>
    </b-form>
  </div>
</template>

<script>
import fieldValidateMixin from '~/mixin/textfield/validate';

export default {
  mixins: [fieldValidateMixin],
  props: {
    message: { type: String, default: null },
  },
  data() {
    return {
      email: '',
    };
  },
  computed: {
    isValid: function isValid() {
      if (this.email.length <= 0) {
        return null;
      }
      return this.checkRegExEmail(this.email);
    },
  },
  methods: {
    clazz: function clazz() {
      const { isValid, message } = this;
      if (isValid === null) {
        return '';
      }
      return isValid && message === null ? 'is-valid' : 'is-invalid';
    },
  },
};
</script>

<style scoped></style>
