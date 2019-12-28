<template>
  <div id="app">
    <v-dialog></v-dialog>
    <app-header-navi-bar
      :is-logged-in="isLoggedIn"
      @signOut="onSignOut"
    ></app-header-navi-bar>
    <nuxt></nuxt>
    <div class="footer-spacer"></div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import AppHeaderNaviBar from '~/components/app/header/AppHeaderNaviBar.vue';
import AppFooter from '~/components/app/AppFooter.vue';

export default {
  components: {
    AppHeaderNaviBar,
    AppFooter,
  },
  computed: {
    ...mapState('sign-in', { isLoggedIn: state => state.success }),
    ...mapState('sign-out', {
      isLoggedOut: state => state.success,
      message: state => state.message,
    }),
  },
  methods: {
    ...mapActions('sign-out', ['signOut']),
    onSignOut: function onSignOut() {
      const { $router, localePath } = this;
      this.signOut(() => {
        $router.push(localePath('index'));
      });
    },
  },
};
</script>

<style scoped></style>
