<template>
  <div>
    <floating-header :title="$t('sign-up.header')"></floating-header>
    <b-row>
      <b-col cols="12">
        <b-link
          :to="localePath('sign-up-general')"
          router-tag="a"
          class="btn btn-outline-primary"
          active-class=""
        >
          <i class="fa fa-user-o"></i>
          {{ $t('sign-up.general') }}
        </b-link>
      </b-col>
      <b-col cols="12">
        <b-link
          :to="localePath('sign-up-business')"
          router-tag="a"
          class="btn btn-outline-primary"
          active-class=""
        >
          <i class="fa fa-building-o"></i>
          {{ $t('sign-up.business') }}
        </b-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import FloatingHeader from '~/components/layout/FloatingHeader.vue';

export default {
  middleware: ['floating/index'],
  layout: 'floating',
  components: {
    FloatingHeader,
  },
};
</script>

<style lang="scss" scoped>
div.row {
  & > div {
    text-align: center;

    &:first-child {
      padding: 16px 32px 8px;
    }

    &:last-child {
      padding: 8px 32px 16px;
    }

    a.btn {
      width: 100%;
      padding: 16px;
      font-size: 1.4rem;

      i {
        margin-right: 16px;
      }
    }
  }
}

@media (max-width: 768px) {
  div.row {
    & > div {
      a.btn {
        margin: 16px 0;
        min-width: 300px;
      }
    }
  }
}
</style>
