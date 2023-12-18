<template>
  <div id="app">
    <v-dialog></v-dialog>
    <app-header-navi-bar
      :is-logged-in="isLoggedIn"
      @signOut="onSignOut"
    ></app-header-navi-bar>
    <div class="container">
      <b-nav class="privacy-menu">
        <b-link
          :to="localePath('user-dashboard')"
          router-tag="li"
          active-class="active"
          exact
        >
          <a class="nav-link">{{ $t('user.menu-dashboard') }}</a>
        </b-link>
        <b-link
          :to="localePath('user-loan')"
          router-tag="li"
          active-class="active"
        >
          <a class="nav-link">{{ $t('user.menu-loan') }}</a>
        </b-link>
        <b-link
          :to="localePath('user-invest')"
          router-tag="li"
          active-class="active"
        >
          <a class="nav-link">{{ $t('user.menu-invest') }}</a>
        </b-link>
        <b-link
          :to="localePath('user-privacy')"
          router-tag="li"
          active-class="active"
        >
          <a class="nav-link">{{ $t('user.menu-privacy') }}</a>
        </b-link>
        <b-link
          :to="localePath('user-account')"
          router-tag="li"
          active-class="active"
        >
          <a class="nav-link">{{ $t('user.menu-account') }}</a>
        </b-link>
      </b-nav>
      <div class="card">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <b-link
              :to="localePath('user-privacy-general')"
              class="nav-item nav-link"
              router-tag="li"
              active-class="active"
              exact
            >
              {{ $t('user.privacy.menu-general') }}
            </b-link>
            <b-link
              :to="localePath('user-privacy-investor')"
              class="nav-item nav-link"
              router-tag="li"
              active-class="active"
              exact
            >
              {{ $t('user.privacy.menu-investor') }}
            </b-link>
            <b-link
              :to="localePath('user-privacy-password')"
              class="nav-item nav-link"
              router-tag="li"
              active-class="active"
              exact
            >
              {{ $t('user.privacy.menu-password') }}
            </b-link>
          </ul>
        </div>
        <div class="card-body">
          <nuxt></nuxt>
        </div>
      </div>
    </div>
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
    ...mapState('user', ['investor']),
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
div.card {
  margin: 16px auto;
}

ul.nav.privacy-menu > li {
  padding: 0 8px;
  font-size: 0.9rem;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}

ul.nav.privacy-menu > li:last-child {
  border-right: unset;
}

ul.nav.privacy-menu > li.active {
  font-weight: bold;
}

ul.nav > li {
  font-size: 0.9rem;
}

div.card {
  padding: 0;
}

.nav-link {
  color: #1f93ff;
}
</style>
