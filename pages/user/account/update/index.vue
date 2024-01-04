<template>
  <user-account-update-form
    v-if="isFetched"
    :p-account="userBank.id"
    :p-bank="userBank.code"
    :p-owner="userBank.owner"
    :banks="real"
    @submit="onSubmit"
  ></user-account-update-form>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import dialogMixin from '~/mixin/dialog';
import defaultSetMixin from '~/mixin/user/default-set';
import UserAccountUpdateForm from '~/components/user/account/update/UserAccountUpdateForm.vue';

export default {
  layout: 'user-account',
  components: {
    UserAccountUpdateForm,
  },
  mixins: [defaultSetMixin, dialogMixin],
  computed: {
    ...mapState('bank-list', ['real']),
    ...mapState('user', { userBank: state => state.refund.account }),
    ...mapState('user/account/update', ['success', 'message']),
  },
  watch: {
    message: function onWatch(message) {
      if (message === null) {
        return;
      }
      this.showDialog(this.$t('user.account.cannot-update-account', message));
    },
    success: function onWatch(success) {
      if (!success) {
        return;
      }
      this.showDialog(
        this.$t('user.account.saved'),
        this.$t('user.account.updated-your-bank-account')
      );
    },
  },
  methods: {
    ...mapActions('user/account/update', ['update']),
    onSubmit: function onSubmit(values) {
      this.update({ ...values, owner: this.userBank.owner });
    },
  },
};
</script>

<style lang="scss" scoped></style>
