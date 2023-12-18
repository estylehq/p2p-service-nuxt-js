<template>
  <div id="app">
    <nuxt></nuxt>
    <div class="footer-spacer"></div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from '~/components/app/AppFooter.vue';

export default {
  components: {
    AppFooter,
  },
};
</script>

<style scoped></style>
