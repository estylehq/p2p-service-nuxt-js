<template>
  <b-form @submit.prevent="$emit('submit', { name, contact })">
    <b-form-group :label="$t('forgot.name')">
      <b-form-input
        v-model="name"
        type="text"
        autocomplete="off"
        required
      ></b-form-input>
    </b-form-group>
    <b-form-group :label="$t('forgot.contact')">
      <b-form-input
        v-model="contact"
        type="tel"
        onkeyup="this.value=this.value.replace(/[^0-9]/g,'');"
        autocomplete="off"
        required
      ></b-form-input>
    </b-form-group>
    <div class="buttons">
      <div class="spacer"></div>
      <b-button variant="primary" type="submit">
        <i class="fa fa-search"></i>{{ $t('forgot.find') }}
      </b-button>
    </div>
  </b-form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      contact: '',
    };
  },
};
</script>

<style lang="scss" scoped>
h5 {
  font-weight: bold;
  margin-bottom: 16px;
}
</style>
