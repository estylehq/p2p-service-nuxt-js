<template>
  <footer>
    <div>
      <b-row class="container">
        <b-col cols="12" lg="4">
          <app-footer-logo></app-footer-logo>
        </b-col>
        <b-col cols="12" lg="4">
          <app-footer-policy></app-footer-policy>
        </b-col>
        <b-col cols="12" lg="4">
          <app-footer-service-info></app-footer-service-info>
        </b-col>
      </b-row>
      <div class="divider"></div>
      <p class="copyright">
        Ⓒ 2018-2019 P2P Service Co., Ltd. All Rights Reserved.
      </p>
    </div>
  </footer>
</template>

<script>
import AppFooterLogo from '~/components/app/footer/AppFooterLogo.vue';
import AppFooterServiceInfo from '~/components/app/footer/AppFooterServiceInfo.vue';
import AppFooterPolicy from '~/components/app/footer/AppFooterPolicy.vue';

export default {
  name: 'AppFooter',
  components: {
    AppFooterLogo,
    AppFooterServiceInfo,
    AppFooterPolicy,
  },
};
</script>

<style scoped>
footer > div:last-child {
  background-color: #f2f2f2;
}

div.container {
  margin: 0 auto;
  max-width: 960px;
}

div.row {
  padding: 8px 0;
}

div.row > div {
  padding: 0;
}

p.copyright {
  font-size: 0.9rem;
  padding: 16px;
  margin: 0;
  line-height: 1.6;
  font-weight: bold;
  text-align: center;
}

div.divider {
  margin: 0;
}

@media (max-width: 768px) {
  div.row {
    padding: 16px;
  }

  div.image.cloud {
    height: 128px;
  }
}
</style>
