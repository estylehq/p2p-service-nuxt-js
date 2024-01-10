<template>
  <b-navbar toggleable="md" light sticky>
    <div class="container">
      <div @click="$router.push(localePath('index'))" class="navbar-brand">
        <p class="logo">P2P Service</p>
      </div>
      <b-navbar-toggle target="nav_collapse">
        <i class="fa fa-bars"></i>
      </b-navbar-toggle>
      <b-collapse id="nav_collapse" is-nav>
        <b-navbar-nav class="mr-auto">
          <b-link
            :to="localePath('security')"
            active-class="active"
            router-tag="li"
          >
            <a class="nav-link">{{ $t('appbar.loan') }}</a>
          </b-link>
          <b-link
            :to="localePath('invest')"
            active-class="active"
            router-tag="li"
          >
            <a class="nav-link">{{ $t('appbar.invest') }}</a>
          </b-link>
          <b-link
            :to="localePath('support')"
            :active="$route.path.includes('support')"
            active-class="active"
            router-tag="li"
          >
            <a class="nav-link">{{ $t('appbar.support') }}</a>
          </b-link>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-link
            v-if="!isLoggedIn"
            :to="getPath"
            exact
            active-class="active"
            router-tag="li"
          >
            <a class="nav-link">
              <i class="fa fa-unlock-alt"></i>{{ $t('appbar.sign-in') }}
            </a>
          </b-link>
          <b-link
            v-if="!isLoggedIn"
            :to="localePath('sign-up')"
            exact
            active-class="active"
            router-tag="li"
          >
            <a class="nav-link">
              <i class="fa fa-sign-in"></i>{{ $t('appbar.sign-up') }}
            </a>
          </b-link>
          <li v-if="isLoggedIn" @click="$emit('signOut')" class="sign-out">
            <a class="nav-link">
              <i class="fa fa-sign-out"></i>{{ $t('appbar.sign-out') }}
            </a>
          </li>
          <b-link
            v-if="isLoggedIn"
            :to="localePath('user-dashboard')"
            exact
            active-class="active"
            router-tag="li"
          >
            <a class="nav-link">
              <i class="fa fa-user-circle"></i>{{ $t('appbar.dashboard') }}
            </a>
          </b-link>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
export default {
  props: {
    isLoggedIn: { type: Boolean, default: false },
  },
  computed: {
    getPath: function getPath() {
      const { name, params, query } = this.$route;
      let newQuery = { ...query, path: name };
      if (params && params.id) {
        newQuery = {
          ...newQuery,
          id: params.id,
        };
      }
      return this.localePath({ name: 'sign-in', query: newQuery });
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  background-color: #ffffff;
  z-index: 90;
  transition: background-color 0.1s;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.navbar-brand {
  transition: color 0.1s;
  display: flex;
}

.navbar-brand:hover {
  cursor: pointer;
}

p.logo {
  margin: 0;
  font-weight: bold;
  color: #1f93ff;
}

.navbar-light .navbar-nav .nav-link {
  font-size: 0.9rem;
  color: #494949;
  transition: color 0.1s;
}

.navbar-light .navbar-nav .active > .nav-link {
  font-weight: bold;
}

i.fa {
  margin: 0;
}

li.sign-out {
  cursor: pointer;
}

a.nav-link i.fa {
  margin-right: 8px;
}

@media (max-width: 767px) {
  div#nav_collapse.navbar-collapse {
    margin: 0 auto;
    text-align: center;
    background-color: transparent;
    border-radius: 8px;
  }
}
</style>
