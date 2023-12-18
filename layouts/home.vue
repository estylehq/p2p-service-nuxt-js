<template>
  <div id="app">
    <v-dialog></v-dialog>
    <app-header-loan-modal></app-header-loan-modal>
    <span>
      <app-header-loan
        @modal="$modal.show('loan-info-modal')"
      ></app-header-loan>
      <app-header-navi-bar
        :class="setClass"
        :is-logged-in="success"
        @signOut="signOut"
      ></app-header-navi-bar>
    </span>
    <nuxt></nuxt>
    <div class="footer-spacer"></div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
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
  mixins: ['dialogMixin'],
  data() {
    return {
      currentScrollY: 0,
    };
  },
  computed: {
    ...mapState('sign-in', ['success']),
    setClass: function setClass() {
      return this.currentScrollY <= 150 ? 'transparent' : '';
    },
  },
  mounted() {
    if (!process.client) {
      return;
    }
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    if (!process.client) {
      return;
    }
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    ...mapActions('sign-out', ['signOut']),
    handleScroll: function handleScroll() {
      this.currentScrollY = window.scrollY;
    },
  },
};
</script>

<style scoped>
nav.navbar {
  transition: background-color 0.5s, color 0.5s;
}

nav.navbar.transparent {
  background-color: transparent;
  border-bottom: unset;
  transition: background-color 0.5s, color 0.5s;
}

nav.navbar.transparent >>> *,
nav.navbar.transparent >>> .nav-link {
  color: white;
}
</style>
