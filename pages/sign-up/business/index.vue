<template>
  <sign-up-base-page :title="$t('sign-up.business')">
    <template #stepper>
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
    </template>
    <template #content>
      <b-collapse id="check-email-col" v-model="isExpandedEmail">
        <sign-up-check-email-form
          :message="msgEmailResult"
          @email="onCheckEmail"
          @input="onInputEmail"
        ></sign-up-check-email-form>
      </b-collapse>
      <b-collapse id="sign-up-col" v-model="isExpandedSignUp">
        <sign-up-business-form
          :email="email"
          :contact-request="isSuccessContactRequest"
          :contact-verified="isSuccessContactVerify"
          @backward="index -= 1"
          @submit="onSubmit"
          @request="onContactRequest"
          @verify="onContactVerify"
        >
          <template slot="policies">
            <sign-up-policies-form @checkedAll="onCheckedAll">
              <policy-field
                id="online-service"
                label="Required Field 1"
                :checked="policies.rField1"
                required
                @change="policies.rField2 = !policies.rField1"
              ></policy-field>
              <policy-field
                id="processing-personal"
                label="Required Field 2"
                :checked="policies.rField2"
                required
                @change="policies.rField2 = !policies.rField2"
              ></policy-field>
              <policy-field
                id="collecting-personal"
                label="Required Field 3"
                :checked="policies.rField3"
                required
                @change="policies.rField3 = !policies.rField3"
              ></policy-field>
              <policy-field
                :id="POLICY_KEY_MARKETING"
                label="Optional Field 1"
                :checked="policies[POLICY_KEY_MARKETING]"
                :required="false"
                @change="onPolicyChange"
              ></policy-field>
            </sign-up-policies-form>
          </template>
        </sign-up-business-form>
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
    </template>
  </sign-up-base-page>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import PolicyField from '~/components/common/PolicyField.vue';

import SignUpBasePage from '~/components/sign-up/SignUpBasePage.vue';

import SignUpCheckEmailForm from '~/components/sign-up/form/SignUpCheckEmailForm.vue';
import SignUpBusinessForm from '~/components/sign-up/form/SignUpBusinessForm.vue';
import SignUpPoliciesForm from '~/components/sign-up/form/SignUpPoliciesForm.vue';
import contactVerifyMixin from '~/mixin/contact/verify';

const INDEX_EMAIL = 1;
const INDEX_SIGN_UP = 2;
const INDEX_COMPLETED = 3;

const POLICY_KEY_MARKETING = '01';

export default {
  components: {
    SignUpBasePage,
    SignUpCheckEmailForm,
    SignUpBusinessForm,
    SignUpPoliciesForm,
    PolicyField,
  },
  mixins: [contactVerifyMixin],
  layout: 'floating',
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
        rField1: false,
        rField2: false,
        rField3: false,
      },
      isCheckedAll: false,
      POLICY_KEY_MARKETING,
    };
  },
  computed: {
    ...mapState('sign-up/check-email', {
      isEmailAvaliable: (state) => state.success,
      msgEmailResult: (state) => state.message,
    }),
    ...mapState('sign-up', ['success', 'message']),
  },
  watch: {
    isEmailAvaliable(isEmailAvaliable) {
      if (!isEmailAvaliable) {
        return;
      }
      this.index = INDEX_SIGN_UP;
    },
    index(index) {
      this.isExpandedEmail = index === INDEX_EMAIL;
      this.isExpandedSignUp = index === INDEX_SIGN_UP;
      this.isExpandedCompleted = index === INDEX_COMPLETED;
    },
    success(success) {
      this.index = INDEX_COMPLETED;
    },
    message(message) {
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
    onCheckEmail(email) {
      this.checkEmail(email);
      this.email = email;
    },
    onInputEmail() {
      this.email = '';
      this.clearEmail();
    },
    onCheckedAll(value) {
      this.isCheckedAll = value;
      let newPolicies = {};
      Object.keys(this.policies).forEach((policy) => {
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
      if (!this.isCheckedAll) {
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
        signUp: { ...signUp, email: this.email, type: '02' },
        policies: this.policies,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
