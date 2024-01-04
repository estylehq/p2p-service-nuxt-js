<template>
  <div class="sign-up">
    <floating-header :title="title"></floating-header>
    <slot name="stepper"></slot>
    <div class="divider"></div>
    <slot name="content"></slot>
  </div>
</template>

<script>
import FloatingHeader from '~/components/layout/FloatingHeader.vue';

export default {
  components: {
    FloatingHeader,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
div.sign-up {
  ::v-deep p.header {
    margin-top: 16px;
    padding: 0 16px;
    font-size: 1rem;
    font-weight: bold;
  }

  div.stepper {
    padding: 16px;
    display: flex;

    span {
      width: 24px;
      height: 24px;
      background-color: #bbbbbb;
      border-radius: 50%;
      text-align: center;
      display: inline-block;
      margin-right: 8px;
      color: white;

      &.activated {
        background-color: #1193ff;
      }
    }

    div.line {
      width: 80%;
      border-bottom: 1px solid #bbbbbb;
      height: 1px;
      margin: 12px auto;
    }
  }
}

div.completed-col {
  & > div {
    padding: 16px;
  }

  p {
    margin-bottom: 16px;
  }

  .btn {
    min-width: 100px;
  }
}

@media (max-width: 369px) {
  div.completed-col {
    div.buttons {
      display: grid;

      .btn {
        margin-bottom: 8px;

        &:last-child {
          margin-bottom: 0;
        }
      }

      div.spacer {
        display: none;
      }
    }
  }
}
</style>
