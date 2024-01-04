<template>
  <div id="app">
    <v-dialog></v-dialog>
    <app-header-loan-modal></app-header-loan-modal>
    <span>
      <app-header-loan
        @modal="$modal.show('loan-info-modal')"
      ></app-header-loan>
      <app-header-navi-bar
        :is-logged-in="isLoggedIn"
        @signOut="onSignOut"
      ></app-header-navi-bar>
    </span>
    <nuxt></nuxt>
    <div class="footer-spacer"></div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import dialogMixin from '~/mixin/dialog';
import AppHeaderLoanModal from '~/components/app/header/loan/AppHeaderLoanModal.vue';
import AppHeaderLoan from '~/components/app/header/loan/AppHeaderLoan.vue';
import AppHeaderNaviBar from '~/components/app/header/AppHeaderNaviBar.vue';
import AppFooter from '~/components/app/AppFooter.vue';

export default {
  components: {
    AppHeaderLoanModal,
    AppHeaderLoan,
    AppHeaderNaviBar,
    AppFooter,
  },
  mixins: [dialogMixin],
  computed: {
    ...mapState('sign-in', { isLoggedIn: state => state.success }),
    ...mapState('sign-out', {
      isLoggedOut: state => state.success,
      message: state => state.message,
    }),
  },
  methods: {
    ...mapActions('sign-out', ['signOut']),
    onSignOut() {
      this.signOut();
    },
  },
};
</script>

<style lang="scss" scoped></style>
