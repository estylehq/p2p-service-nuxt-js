<template>
  <div>
    <div class="header">
      <b-btn
        v-if="backButton"
        @click="$router.go(-1)"
        variant="outline-secondary"
        class="back"
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

<style scoped>
div.header {
  display: flex;
}

.btn,
.btn:hover,
.btn:focus,
.btn:active,
div.buttons >>> .btn,
div.buttons >>> .btn:hover,
div.buttons >>> .btn:focus,
div.buttons >>> .btn:active {
  border-radius: 0;
}

.btn {
  border: unset;
}

.btn > i.fa,
div.buttons >>> .btn > i.fa {
  margin-right: 0;
  font-size: 1.5rem;
  padding: 8px;
}

.btn.back {
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}

.btn.back,
.btn.back:hover,
.btn.back:active,
.btn.back:focus,
.btn.back:focus-visible,
.btn.back:focus-within {
  border-top-left-radius: 8px;
}

.buttons > .btn:last-child,
.buttons > .btn:last-child:hover,
.buttons > .btn:last-child:active,
.buttons > .btn:last-child:focus,
.buttons > .btn:last-child:focus-visible,
.buttons > .btn:last-child:focus-within {
  border-top-right-radius: 8px;
}

div.header > .title {
  padding: 16px;
  margin-bottom: 0;
  font-weight: bold;
}

@media (max-width: 568px) {
  .btn > i.fa,
  div.buttons >>> .btn > i.fa {
    font-size: 1rem;
    padding: 8px 4px;
  }

  div.header > .title {
    font-size: 1rem;
    padding: 12px 8px 0;
  }
}
</style>
