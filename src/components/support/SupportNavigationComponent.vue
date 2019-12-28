<template>
  <div class="container">
    <nav class="nav">
      <b-link
        router-tag="a"
        class="nav-link"
        :to="{ name: 'support.notice' }"
        :active="path.includes('notice')"
      >공지사항</b-link>
      <b-link
        router-tag="a"
        class="nav-link"
        :to="{ name: 'support.faq' }"
        :active="path.includes('faq')"
      >FAQ</b-link>
      <b-link
        router-tag="a"
        class="nav-link"
        :active="path.includes('qna')"
        :to="{ name: 'support.qna' }"
      >1:1 Q&A</b-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      path: '',
    };
  },
  mounted() {
    this.path = this.$route.name;
  },
  watch: {
    $route: function onResponse(route) {
      this.path = route.name;
    },
  },
};
</script>


<style scoped>
div.container {
  padding: 0;
  margin-bottom: 8px;
}

nav {
  font-size: 0.8rem;
  overflow: auto;
  flex-wrap: nowrap;
  display: -webkit-inline-box;
}

nav::-webkit-scrollbar {
  display: none;
}

a {
  margin-top: 8px;
  padding: 0px 16px;
  color: #777;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  transition: color .3s;
}

a:hover {
  color: #2197ff;
  transition: color .3s;
}

a.active {
  font-weight: bold;
}

a:last-child {
  border-right: unset;
}
</style>
