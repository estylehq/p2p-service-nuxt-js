<template>
  <div class="floating-header">
    <div class="header">
      <b-btn
        v-if="backButton"
        variant="outline-secondary"
        class="back"
        @click="$router.go(-1)"
      >
        <i class="fa fa-arrow-left"></i>
      </b-btn>
      <h5 class="title">
        {{ title }}
      </h5>
      <div class="spacer"></div>
      <div class="buttons">
        <slot></slot>
        <b-btn
          v-b-tooltip.hover
          :title="$t('floating.go-to-home')"
          :to="localePath('index')"
          variant="outline-secondary"
          class="home"
        >
          <i class="fa fa-home"></i>
        </b-btn>
      </div>
    </div>
    <div class="divider"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    backButton: { type: Boolean, default: true },
  },
};
</script>

<style lang="scss" scoped>
div.floating-header {
  div.header {
    display: flex;

    .title {
      padding: 16px;
      margin-bottom: 0;
      font-weight: bold;
    }

    .btn {
      border: unset;
      border-radius: 0;

      &:hover,
      &:focus,
      &:active {
        border-radius: 0;
      }

      i.fa {
        margin-right: 0;
        font-size: 1.5rem;
        padding: 8px;
      }

      &.back {
        border-right: 1px solid rgba(0, 0, 0, 0.1);
        border-top-left-radius: 8px;

        &:hover,
        &:active,
        &:focus,
        &:focus-visible,
        &:focus-within {
          border-top-left-radius: 8px;
        }
      }
    }

    .buttons {
      & > .btn {
        &:last-child,
        &:last-child:hover,
        &:last-child:active,
        &:last-child:focus,
        &:last-child:focus-visible,
        &:last-child:focus-within {
          border-top-right-radius: 8px;
        }
      }
    }
  }
}

@media (max-width: 568px) {
  div.floating-header {
    div.header {
      .btn {
        & > i.fa {
          font-size: 1rem;
          padding: 8px 4px;
        }
      }

      .title {
        font-size: 1rem;
        padding: 12px 8px 0;
      }
    }
  }
}
</style>
