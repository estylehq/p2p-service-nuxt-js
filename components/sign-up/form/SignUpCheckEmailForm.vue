<template>
  <sign-up-based-form :number="1" :text="$t('sign-up.check-email')">
    <b-form name="email-form" @submit.prevent="$emit('submit', email)">
      <b-form-group :label="$t('sign-up.email')" label-for="email">
        <b-form-input
          id="email"
          v-model="email"
          :state="message === null ? isValid : false"
          required
          type="email"
          autocomplete="off"
          aria-describedby="invalid-email"
          @input="$emit('input')"
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
        variant="primary"
        @click="$emit('email', email)"
      >
        {{ $t('sign-up.check-email') }}
      </b-button>
    </b-form>
  </sign-up-based-form>
</template>

<script>
import SignUpBasedForm from './SignUpBasedForm.vue';
import fieldValidateMixin from '~/mixin/textfield/validate';

export default {
  components: { SignUpBasedForm },
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

<style lang="scss" scoped></style>
