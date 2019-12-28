<template>
  <div>
    <user-account-withdraw-virtual
      :name="investor.account.name"
      :account="investor.account.id"
      :owner="investor.account.owner"
      :deposit="investor.account.deposit"
      @refresh="deposit()"
    ></user-account-withdraw-virtual>
    <div class="divider"></div>
    <user-account-withdraw-form
      :name="refund.account.name"
      :owner="refund.account.owner"
      :account="refund.account.id"
      :deposit="investor.account.deposit"
    ></user-account-withdraw-form>
    <ul class="account-info">
      <li>
        계좌이체 후 충전 반영 시간은 약 1~10분 사이 입니다.
      </li>
      <li>
        예치금은 예치금 계좌 충전하신 100% 금액이 반영됩니다.
      </li>
      <li>
        23시 30분 ~ 00시 30분 사이에는 은행망 점검 시간으로 이체가 불가할&nbsp;
        수 있습니다.
      </li>
      <li>
        보유 예치금이 투자 예정 금액보다 적은 경우 예치금 계좌로 충전 후&nbsp;
        새로고침 버튼을 눌러주시기 바랍니다.
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import clipboardMixin from '~/mixin/clipboard';
import defaultSetMixin from '~/mixin/user/default-set';
import UserAccountWithdrawForm from '~/components/user/account/withdraw/UserAccountWithdrawForm.vue';
import UserAccountWithdrawVirtual from '~/components/user/account/withdraw/UserAccountWithdrawVirtual.vue';

export default {
  layout: 'user-account',
  components: {
    UserAccountWithdrawForm,
    UserAccountWithdrawVirtual,
  },
  mixins: [clipboardMixin, defaultSetMixin],
  computed: {
    ...mapState('user', ['investor', 'refund']),
    ...mapState('user/account/withdraw', ['success', 'message']),
  },
  async beforeMount() {
    await this.deposit();
  },
  methods: {
    ...mapActions('user/account/virtual', ['deposit']),
    ...mapActions('user/account/withdraw', ['withdraw']),
  },
};
</script>

<style scoped>
div.divider {
  margin: 16px 0;
}

ul.account-info {
  padding-inline-start: 24px;
  font-size: 0.8rem;
}

ul.account-info > li {
  margin-bottom: 8px;
}

@media (max-width: 768px) {
  ul.account-info {
    padding-inline-start: 16px;
    font-size: 0.75rem;
  }
}
</style>
