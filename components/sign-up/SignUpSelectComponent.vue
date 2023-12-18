<template>
  <div class="buttons">
    <div class="spacer"></div>
    <b-link
      router-tag="a"
      :to="localePath('sign-up-general')"
      class="btn btn-outline-primary"
      active-class=""
    >
      <i class="fa fa-user-o"></i>
      {{ $t('sign-up.general') }}
    </b-link>
    <div class="spacer"></div>
    <b-link
      router-tag="a"
      :to="localePath('sign-up-business')"
      class="btn btn-outline-primary"
      active-class=""
    >
      <i class="fa fa-building-o"></i>
      {{ $t('sign-up.business') }}
    </b-link>
    <div class="spacer"></div>
  </div>
</template>

<style scoped>
a.btn {
  margin: 16px;
  padding: 64px 48px;
  font-size: 1.8rem;
  min-width: 200px;
}

a.btn > i {
  margin-right: 16px;
}
</style>
