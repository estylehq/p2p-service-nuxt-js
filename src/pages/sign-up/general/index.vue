<template>
  <div class="sign-up">
    <floating-header :title="$t('sign-up.general')"></floating-header>
    <div class="stepper">
      <span :class="index >= INDEX_EMAIL ? 'activated' : ''">1</span>
      <div class="spacer">
        <div class="line"></div>
      </div>
      <span :class="index >= INDEX_SIGN_UP ? 'activated' : ''">2</span>
      <div class="spacer">
        <div class="line"></div>
      </div>
      <span :class="index >= INDEX_COMPLETED ? 'activated' : ''">3</span>
    </div>
    <div class="divider"></div>
    <b-collapse id="check-email-col" v-model="isExpandedEmail">
      <sign-up-check-email-form
        :message="msgEmailResult"
        @email="onCheckEmail"
        @input="onInputEmail"
      ></sign-up-check-email-form>
    </b-collapse>
    <b-collapse id="sign-up-col" v-model="isExpandedSignUp">
      <sign-up-general-form
        :email="email"
        :contact-request="isSuccessContactRequest"
        :contact-verified="isSuccessContactVerify"
        @backward="index -= 1"
        @submit="onSubmit"
        @request="onContactRequest"
        @verify="onContactVerify"
      >
        <template slot="policies">
          <sign-up-policies-form
            @listener="onChecksListener"
            @checkedAll="onCheckedAll"
          >
            <policy-field
              :id="POLICY_KEY_MARKETING"
              :label="$t('policy.marketing-agree')"
              :checked="policies[POLICY_KEY_MARKETING]"
              :required="false"
              @change="onPolicyChange"
            ></policy-field>
          </sign-up-policies-form>
        </template>
      </sign-up-general-form>
    </b-collapse>
    <b-collapse
      id="completed-col"
      v-model="isExpandedCompleted"
      class="completed-col"
    >
      <div>
        <h5>{{ $t('sign-up.welcome') }}</h5>
        <p>{{ $t('sign-up.sign-up-completed') }}</p>
        <div class="buttons">
          <b-button :to="localePath('loan')" exact variant="warning">
            {{ $t('sign-up.button-go-to-loan') }}
          </b-button>
          <div class="spacer"></div>
          <b-button :to="localePath('invest')" exact variant="success">
            {{ $t('sign-up.button-go-to-invest') }}
          </b-button>
          <div class="spacer"></div>
          <b-button :to="localePath('index')" exact variant="primary">
            {{ $t('sign-up.button-go-to-home') }}
          </b-button>
        </div>
      </div>
    </b-collapse>
  </div>
</template>

<script>
import _ from 'lodash';
import { mapState, mapActions } from 'vuex';
import PolicyField from '~/components/common/PolicyField.vue';
import FloatingHeader from '~/components/layout/FloatingHeader.vue';
import SignUpCheckEmailForm from '~/components/sign-up/form/SignUpCheckEmailForm.vue';
import SignUpGeneralForm from '~/components/sign-up/form/SignUpGeneralForm.vue';
import SignUpPoliciesForm from '~/components/sign-up/form/SignUpPoliciesForm.vue';
import contactVerifyMixin from '~/mixin/contact/verify';

const INDEX_EMAIL = 1;
const INDEX_SIGN_UP = 2;
const INDEX_COMPLETED = 3;

const POLICY_KEY_MARKETING = '01';

export default {
  layout: 'floating',
  components: {
    FloatingHeader,
    SignUpCheckEmailForm,
    SignUpGeneralForm,
    SignUpPoliciesForm,
    PolicyField,
  },
  mixins: [contactVerifyMixin],
  data() {
    return {
      index: INDEX_EMAIL,
      isExpandedEmail: true,
      isExpandedSignUp: false,
      isExpandedCompleted: false,
      email: '',
      INDEX_EMAIL,
      INDEX_SIGN_UP,
      INDEX_COMPLETED,
      policies: {
        [POLICY_KEY_MARKETING]: false,
      },
      isCheckedRequired: false,
      POLICY_KEY_MARKETING,
    };
  },
  computed: {
    ...mapState('sign-up/check-email', {
      isEmailAvaliable: state => state.success,
      msgEmailResult: state => state.message,
    }),
    ...mapState('sign-up', ['success', 'message']),
  },
  watch: {
    isEmailAvaliable: function onWatch(isEmailAvaliable) {
      if (!isEmailAvaliable) {
        return;
      }
      this.index = INDEX_SIGN_UP;
    },
    index: function onWatch(index) {
      this.isExpandedEmail = index === INDEX_EMAIL;
      this.isExpandedSignUp = index === INDEX_SIGN_UP;
      this.isExpandedCompleted = index === INDEX_COMPLETED;
    },
    success: function onWatch(success) {
      this.index = INDEX_COMPLETED;
    },
    message: function onWatch(message) {
      this.showDialog(this.$t('sign-up.sign-up-failed'), message);
    },
  },
  beforeDestroy() {
    this.clear();
    this.clearEmail();
  },
  methods: {
    ...mapActions('sign-up/check-email', {
      checkEmail: 'check',
      clearEmail: 'clear',
    }),
    ...mapActions('sign-up', ['signUp', 'clear']),
    onCheckEmail: function onCheckEmail(email) {
      this.checkEmail(email);
      this.email = email;
    },
    onInputEmail: function onInputEmail() {
      this.email = '';
      this.clearEmail();
    },
    onChecksListener: function onChecksListener(value) {
      this.isCheckedRequired = true;
    },
    onCheckedAll: function onCheckedAll(value) {
      this.isCheckedRequired = value;
      let newPolicies = {};
      _.map(Object.keys(this.policies), policy => {
        newPolicies = {
          ...newPolicies,
          [policy]: value,
        };
      });
      this.policies = newPolicies;
    },
    onContactRequest: function onContactRequest(value) {
      this.contactRequest(value);
    },
    onContactVerify: function onContactVerify(values) {
      this.contactVerify(values);
    },
    onPolicyChange: function onPolicyChange({ id, value }) {
      this.policies[id] = value;
    },
    onSubmit: function onSubmit(signUp) {
      if (!process.browser) {
        return;
      }
      if (!this.isCheckedRequired) {
        const FIELD_ID = 'check-all';
        document.getElementById(FIELD_ID).focus();
        document.getElementById(FIELD_ID).scrollIntoView(true);

        this.showDialog(
          this.$t('policy.not-allowed-policies'),
          this.$t('policy.please-allow-policies')
        );
        return;
      }
      this.signUp({
        signUp: { ...signUp, email: this.email, type: '01' },
        policies: this.policies,
      });
    },
  },
};
</script>

<style scoped>
div.sign-up >>> p.header {
  margin-top: 16px;
  padding: 0 16px;
  font-size: 1rem;
  font-weight: bold;
}
div.sign-up >>> span {
  background-color: #1193ff;
  border-radius: 50%;
  color: white;
  width: 24px;
  height: 24px;
  text-align: center;
  display: inline-block;
  margin-right: 8px;
}

div.stepper {
  padding: 16px;
  display: flex;
}

div.stepper > span {
  background-color: #bbbbbb;
  margin-right: unset;
}

div.stepper > span.activated {
  background-color: #1193ff;
}

div.stepper div.line {
  width: 80%;
  border-bottom: 1px solid #bbbbbb;
  height: 1px;
  margin: 12px auto;
}

div.completed-col > div {
  padding: 16px;
}

div.completed-col p {
  margin-bottom: 16px;
}

div.completed-col .btn {
  min-width: 100px;
}

@media (max-width: 369px) {
  div.completed-col div.buttons {
    display: grid;
  }
  div.completed-col div.buttons .btn {
    margin-bottom: 8px;
  }
  div.completed-col div.buttons .btn:last-child {
    margin-bottom: 0;
  }
  div.completed-col div.buttons div.spacer {
    display: none;
  }
}
</style>
