<template>
  <sign-up-based-form :number="2" :text="$t('sign-up.fill-the-reg-form')">
    <b-form name="sign-up-form" @submit.prevent="onSubmit">
      <b-form-group :label="$t('sign-up.email')" label-for="email">
        <b-form-input
          id="email"
          :value="email"
          required
          disabled
          type="email"
        ></b-form-input>
      </b-form-group>
      <b-form-group :label="$t('sign-up.password')" label-for="password">
        <password
          id="password"
          v-model="signUp.password"
          :badge="false"
          :secure-length="8"
          required
          default-class="form-control"
          type="password"
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
      <b-form-group
        :label="$t('sign-up.confirm-password')"
        label-for="confirm-password"
      >
        <b-form-input
          id="confirm-password"
          v-model="confirmPassword"
          :state="isMatchPassword"
          required
          trim
          type="password"
          aria-describedby="confirm-password-feedback"
        ></b-form-input>
        <b-form-feedback id="confirm-password-feedback">
          {{ $t('sign-up.not-match-password') }}
        </b-form-feedback>
      </b-form-group>
      <div class="divider"></div>
      <b-form-group :label="$t('sign-up.name')" label-for="name">
        <input
          id="name"
          v-model="signUp.name"
          required
          class="form-control"
          type="text"
          aria-describedby="nameFeedback"
          autocomplete="off"
        />
        <b-form-feedback id="nameFeedback">
          {{ $t('sign-up.field-is-too-short') }}
        </b-form-feedback>
      </b-form-group>
      <b-form-group :label="$t('sign-up.contact-number')">
        <b-input-group>
          <b-form-input
            id="contact"
            v-model="signUp.contact"
            :disabled="contactRequest ? contactVerified : false"
            :placeholder="$t('sign-up.enter-number-only')"
            required
            class="form-control"
            type="tel"
            onkeyup="this.value=this.value.replace(/[^0-9]/g,'');"
            maxlength="12"
            aria-describedby="contactFeedback"
          ></b-form-input>
          <b-input-group-append>
            <b-button
              :disabled="contactRequest ? contactVerified : false"
              @click="$emit('request', signUp.contact)"
            >
              {{ $t('sign-up.contact-request') }}
            </b-button>
          </b-input-group-append>
        </b-input-group>
      </b-form-group>
      <b-form-group>
        <b-input-group :prepend="$t('sign-up.contact-verify-code')">
          <b-form-input
            id="verified"
            v-model="verCode"
            :disabled="contactRequest ? contactVerified : true"
            required
            class="form-control"
            type="number"
            placeholder="0000"
            onkeyup="this.value=this.value.replace(/[^0-9-]/g,'');"
            maxlength="7"
          ></b-form-input>
          <b-input-group-append>
            <b-button
              :disabled="contactRequest ? contactVerified : true"
              @click="$emit('verify', { contact: signUp.contact, verCode })"
            >
              {{ $t('sign-up.contact-verify') }}
            </b-button>
          </b-input-group-append>
        </b-input-group>
        <p class="warn">
          {{ $t('sign-up.contact-verify-message') }}
        </p>
      </b-form-group>
      <slot></slot>
      <div class="divider"></div>
      <b-form-group :label="$t('sign-up.subscribe')">
        <div class="check-horizontal">
          <b-form-checkbox
            id="receiveEmail"
            v-model="signUp.subscribes.email"
            @click="subscribes.email = !subscribes.email"
          >
            {{ $t('sign-up.subscribe-email') }}
          </b-form-checkbox>
          <b-form-checkbox
            id="receiveSms"
            v-model="signUp.subscribes.sms"
            @click="subscribes.sms = !subscribes.sms"
          >
            {{ $t('sign-up.subscribe-sms') }}
          </b-form-checkbox>
        </div>
      </b-form-group>
      <slot name="policies"></slot>
      <div class="buttons">
        <b-btn variant="outline-secondary" @click="$emit('backward')">
          {{ $t('sign-up.button-backward') }}
        </b-btn>
        <b-btn variant="primary" type="submit">
          {{ $t('sign-up.button-sign-up') }}
        </b-btn>
      </div>
    </b-form>
  </sign-up-based-form>
</template>

<script>
import Password from 'vue-password-strength-meter';

import SignUpBasedForm from './SignUpBasedForm.vue';
import fieldValidateMixin from '~/mixin/textfield/validate';

export default {
  components: {
    Password,
    SignUpBasedForm,
  },
  mixins: [fieldValidateMixin],
  props: {
    email: { type: String, default: null },
    contactRequest: { type: Boolean, default: false },
    contactVerified: { type: Boolean, default: false },
  },
  data() {
    return {
      signUp: {
        password: '',
        name: '',
        contact: '',
        subscribes: {
          sms: false,
          email: false,
        },
      },
      confirmPassword: '',
      verCode: '',
    };
  },
  computed: {
    isMatchPassword: function isMatchPassword() {
      if (this.confirmPassword.length <= 0) {
        return null;
      }
      return this.signUp.password === this.confirmPassword;
    },
    nameState: function nameState() {
      const { name } = this.signUp;
      if (name.length <= 0) {
        return null;
      }
      return this.name.length > 2;
    },
  },
  methods: {
    onSubmit: function onSubmit() {
      if (!process.browser) {
        return;
      }
      if (!this.isMatchPassword) {
        document.getElementById('confirm-password').focus();
        document.getElementById('confirm-password').scrollIntoView(true);
        return;
      }
      this.$emit('submit', this.signUp);
    },
  },
};
</script>

<style lang="scss" scoped>
div.divider {
  margin: 16px 0;
}

div.buttons {
  & > .btn {
    flex-grow: 1 !important;
    margin: 0 8px;
  }
}

.Password {
  max-width: unset;

  ::v-deep .Password__badge {
    padding: 2 4px;
    font-size: 0.8rem;
    text-align: center;
    width: fit-content;

    &::before {
      content: 'score: ';
    }
  }
}

small.form-text {
  & > ul {
    padding-left: 24px;
  }
}
</style>
