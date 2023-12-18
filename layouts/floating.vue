<template>
  <div class="app">
    <v-dialog></v-dialog>
    <b-container>
      <div class="logo-container">
        <h3>P2P Service</h3>
      </div>
      <b-card body>
        <nuxt></nuxt>
      </b-card>
    </b-container>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from '~/components/app/AppFooter.vue';
export default {
  components: {
    AppFooter,
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  head() {
    return {
      style: [
        {
          type: 'text/css',
          cssText:
            'body { background-image: linear-gradient(#89ccff, #1f93ff);  background-repeat: no-repeat; background-attachment: fixed; }',
        },
      ],
    };
  },
};
</script>

<style scoped>
div.logo-container {
  display: flex;
  margin: 32px auto 16px;
  width: fit-content;
}

h3 {
  font-weight: bold;
  color: #ffffff;
  line-height: 1.2;
}

div.card,
div.card-body {
  padding: 0;
}

div.card {
  display: block;
  max-width: 560px;
  margin: 32px auto;
  box-sizing: border-box;
}

div.card-body >>> form {
  padding: 16px;
}

div.container {
  margin-bottom: 256px;
}

div.card,
footer {
  z-index: 1;
}

@media (max-width: 990px) {
  div.container {
    margin-bottom: 0;
  }
  div.image.cloud {
    position: initial;
  }
}
</style>
