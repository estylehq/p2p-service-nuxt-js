<template>
  <div id="app">
    <v-dialog></v-dialog>
    <app-header-navi-bar
      :is-logged-in="isLoggedIn"
      @signOut="onSignOut"
    ></app-header-navi-bar>
    <div class="conatiner">
      <b-nav>
        <b-link
          :to="localePath('user-dashboard')"
          exact
          router-tag="li"
          active-class="active"
        >
          <a class="nav-link">{{ $t('user.menu-dashboard') }}</a>
        </b-link>
        <b-link
          :to="localePath('user-loan')"
          exact
          router-tag="li"
          active-class="active"
        >
          <a class="nav-link">{{ $t('user.menu-loan') }}</a>
        </b-link>
        <b-link
          :to="localePath('user-invest')"
          exact
          router-tag="li"
          active-class="active"
        >
          <a class="nav-link">{{ $t('user.menu-invest') }}</a>
        </b-link>
        <b-link
          :to="localePath('user-privacy')"
          exact
          router-tag="li"
          active-class="active"
        >
          <a class="nav-link">{{ $t('user.menu-privacy') }}</a>
        </b-link>
        <b-link
          :to="localePath('user-account')"
          exact
          router-tag="li"
          active-class="active"
        >
          <a class="nav-link">{{ $t('user.menu-account') }}</a>
        </b-link>
      </b-nav>
    </div>
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

<style scoped>
ul.nav {
  padding: 0;
  max-width: 1000px;
  margin: 0 auto;
}

ul.nav > li {
  padding: 0 8px;
  font-size: 0.9rem;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}

ul.nav > li:last-child {
  border-right: unset;
}

li.active {
  font-weight: bold;
}
</style>
