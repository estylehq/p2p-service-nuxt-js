<template>
  <div class="error-container">
    <h1 class="status-code">
      {{ error.statusCode || 500 }}
    </h1>
    <h4 class="message">
      {{ getMessage }}
    </h4>
    <h6>
      {{ error.message || $t('error.unknown-error') }}
    </h6>
    <div class="buttons">
      <b-button variant="primary" @click="$router.go(-1)">
        <i class="fa fa-arrow-left"></i>
        {{ $t('error.button-foward') }}
      </b-button>
      <b-button :to="localePath('index')" exact variant="outline-primary">
        <i class="fa fa-home"></i>
        {{ $t('error.button-home') }}
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'floating',
  props: {
    error: { type: Object, required: true },
  },
  computed: {
    getMessage: function getMessage() {
      const { statusCode } = this.error;
      if (statusCode === 404) {
        return this.$t('error.page-not-found');
      } else {
        return this.$t('error.internal-error');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  &.error-container {
    padding: 24px;
    text-align: center;

    h1 {
      &.status-code {
        opacity: 0.15;
        width: 100%;
        font-size: 5rem;
        line-height: 0.2;
        font-weight: bold;
        margin: 32px auto 0;
      }
    }

    h2 {
      &.message {
        margin-bottom: 32px;
      }
    }

    h6 {
      margin-bottom: 32px;
    }

    div.buttons {
      .btn {
        flex-grow: 1;
        margin-right: 8px;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
