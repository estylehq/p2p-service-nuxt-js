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
          :to="localePath('about-cloudcash')"
          exact
          router-tag="li"
          active-class="active"
        >
          <a class="nav-link">{{ $t('about.menu-cloudcash') }}</a>
        </b-link>
        <b-link
          :to="localePath('about-ceo')"
          exact
          router-tag="li"
          active-class="active"
        >
          <a class="nav-link">{{ $t('about.menu-ceo') }}</a>
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

<style lang="scss" scoped>
ul {
  nav {
    padding: 0;
    max-width: 1000px;
    margin: 0 auto;

    li {
      padding: 0 8px;
      font-size: 0.9rem;
      border-right: 1px solid rgba(0, 0, 0, 0.1);

      &:last-child {
        border-right: unset;
      }

      .active {
        font-weight: bold;
      }
    }
  }
}
</style>
