<template>
  <user-privacy-investor-form
    :name="userName"
    :business-user="isBusinessUser"
    :p-contact="userContact"
    :investor-type="userInvestor.type.text"
    :lender="isLender"
    :submit-enabled="isSubmitEnabled"
    :contact-request="isSuccessContactRequest"
    :contact-verified="isSuccessContactVerify"
    @request="onContactRequest"
    @verify="onContactVerify"
    @submit="onSubmit"
  >
    <b-form-group
      v-if="isBusinessUser"
      :label="$t('user.privacy.investor.company-name')"
      horizontal
    >
      <p class="margin-0 padding-8">
        {{ userCompany.name }}
      </p>
    </b-form-group>
    <b-form-group
      v-if="isBusinessUser"
      :label="$t('user.privacy.investor.company-code')"
      horizontal
    >
      <p class="margin-0 padding-8">
        {{ userCompany.code }}
      </p>
    </b-form-group>
    <user-address-form
      :p-postcode="userAddress.postcode"
      :p-city-state="userAddress.cityState"
      :p-detail="userAddress.detail"
      @input="onInputAddress"
    ></user-address-form>
  </user-privacy-investor-form>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import defaultSetMixin from '~/mixin/user/default-set';
import contactVerifyMixin from '~/mixin/contact/verify';
import UserAddressForm from '~/components/user/UserAddressForm.vue';
import UserPrivacyInvestorForm from '~/components/user/privacy/UserPrivacyInvestorForm.vue';

export default {
  layout: 'user-privacy',
  components: {
    UserAddressForm,
    UserPrivacyInvestorForm,
  },
  mixins: [contactVerifyMixin, defaultSetMixin],
  data() {
    return {
      address: {
        postcode: '',
        cityState: '',
        detail: '',
      },
    };
  },
  computed: {
    ...mapState('user', {
      userName: state => state.name,
      userType: state => state.type,
      userInvestor: state => state.investor,
      userLender: state => state.lender,
      userContact: state => state.contact,
      userAddress: state => state.address,
      userCompany: state => state.company,
    }),
    ...mapState('user/update', ['success', 'message']),
    isSubmitEnabled: function isSubmitEnabled() {
      if (this.isSuccessContactRequest) {
        return this.isSuccessContactVerify;
      }
      return true;
    },
    isBusinessUser: function isBusinessUser() {
      return this.userType === '02';
    },
    isLender: function isLender() {
      return this.userLender.value === '02';
    },
  },
  mounted() {
    this.address = {
      ...this.address,
      ...this.userAddress,
    };
  },
  methods: {
    ...mapActions('user/update', ['update']),
    onInputAddress: function onInputAddress(values) {
      this.address = {
        ...this.address,
        ...values,
      };
    },
    onContactRequest: function onContactRequest(value) {
      this.contactRequest(value);
    },
    onContactVerify: function onContactVerify(values) {
      this.contactVerify(values);
    },
    onSubmit: function onSubmit(values) {},
  },
  head() {
    return {
      title: this.$t('page-title-format', {
        value: this.$t('user.privacy.menu-investor'),
      }),
    };
  },
};
</script>

<style lang="scss" scoped></style>
