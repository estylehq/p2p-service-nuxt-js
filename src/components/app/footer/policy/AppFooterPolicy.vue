<template>
  <ul>
    <router-link
      class="nav-link"
      tag="li"
      :to="{ name: 'policy', params: { id: 'service' } }"
      >온라인서비스 이용약관</router-link
    >
    <router-link
      class="nav-link"
      tag="li"
      :to="{ name: 'policy', params: { id: 'proc' } }"
      >개인정보 처리방침</router-link
    >
    <router-link
      class="nav-link"
      tag="li"
      :to="{ name: 'policy', params: { id: 'invest' } }"
      >투자자 이용약관</router-link
    >
    <router-link
      class="nav-link"
      tag="li"
      :to="{ name: 'policy', params: { id: 'ethics' } }"
      >윤리강령</router-link
    >
  </ul>
</template>

<style scoped>
ul {
  font-size: 0.8rem;
  padding: 16px;
  margin: 0;
  color: #1393ff;
}

.nav-link {
  padding: 0;
}

.nav-link:hover {
  cursor: pointer;
}

ul > li {
  margin-bottom: 16px;
}

ul > li:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  ul {
    padding: 8px 16px;
  }

  ul > li {
    width: fit-content;
    display: inline-block;
    margin: 0;
  }

  .nav-link {
    padding: 8px;
  }
}
</style>
