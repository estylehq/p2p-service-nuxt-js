<template>
  <user-privacy-general-form
    :email="email"
    :subscribe-email="subscribes.email"
    :subscribe-sms="subscribes.sms"
    @submit="onSubmit"
  >
    <div class="policies-list">
      <h6>
        {{ $t('policy.optional-list') }}
      </h6>
      <policy-field
        :id="POLICY_KEY_MARKETING"
        :label="$t('policy.marketing-agree')"
        :checked="policies[POLICY_KEY_MARKETING]"
        :required="false"
        @change="onPolicyChange"
      ></policy-field>
    </div>
  </user-privacy-general-form>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import defaultSetMixin from '~/mixin/user/default-set';
import PolicyField from '~/components/common/PolicyField.vue';
import UserPrivacyGeneralForm from '~/components/user/privacy/UserPrivacyGeneralForm.vue';

const POLICY_KEY_MARKETING = '01';

export default {
  layout: 'user-privacy',
  components: {
    PolicyField,
    UserPrivacyGeneralForm,
  },
  mixins: [defaultSetMixin],
  data() {
    return {
      policies: {
        [POLICY_KEY_MARKETING]: false,
      },
      POLICY_KEY_MARKETING,
    };
  },
  computed: {
    ...mapState('user', ['email', 'subscribes']),
  },
  beforeMount() {
    this.clear();
  },
  methods: {
    ...mapActions('user/update', ['update', 'updatePolicies', 'clear']),
    onSubmit: async function onSubmit(subscribes) {},
    onPolicyChange: function onPolicyChange({ id, value }) {
      this.policies[id] = value;
    },
  },
  head() {
    return {
      title: this.$t('page-title-format', {
        value: this.$t('user.privacy.menu-general'),
      }),
    };
  },
};
</script>

<style lang="scss" scoped>
div.policies-list {
  h6 {
    font-weight: inherit;
  }
}
</style>
