<template>
  <div class="container">
    <nav class="nav">
      <b-link
        router-tag="a"
        class="nav-link"
        :active="path.includes('about/company')"
        :to="{ name: 'about.company' }"
        >회사소개</b-link
      >
      <b-link
        router-tag="a"
        class="nav-link"
        :active="path.includes('about/ceo')"
        :to="{ name: 'about.ceo' }"
        >인사말</b-link
      >
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    isCertInvest: { type: Boolean, default: false },
  },
  data() {
    return {
      path: '',
    };
  },
  watch: {
    $route(route) {
      this.path = route.path;
    },
  },
  mounted() {
    this.path = this.$route.path;
  },
};
</script>

<style lang="scss" scoped>
div.container {
  padding: 0;
  margin-bottom: 8px;

  nav {
    font-size: 0.8rem;
    overflow: auto;
    flex-wrap: nowrap;
    display: -webkit-inline-box;

    &::-webkit-scrollbar {
      display: none;
    }

    a {
      margin-top: 8px;
      padding: 0px 16px;
      color: #777;
      border-right: 1px solid rgba(0, 0, 0, 0.1);
      transition: color 0.3s;

      &:hover {
        color: #2197ff;
        transition: color 0.3s;
      }

      &:last-child {
        border-right: unset;
      }

      &.active {
        font-weight: bold;
      }
    }
  }
}
</style>
