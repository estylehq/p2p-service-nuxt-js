<template>
  <b-form @submit.prevent="$emit('submit', { email, name, contact })">
    <b-form-group :label="$t('reset-password.email')">
      <b-form-input v-model="email" type="email" required></b-form-input>
    </b-form-group>
    <b-form-group :label="$t('reset-password.name')">
      <b-form-input v-model="name" type="text" required></b-form-input>
    </b-form-group>
    <b-form-group :label="$t('reset-password.contact')">
      <b-form-input
        v-model="contact"
        type="tel"
        onkeyup="this.value=this.value.replace(/[^0-9]/g,'');"
        required
      ></b-form-input>
    </b-form-group>
    <div class="buttons">
      <div class="spacer"></div>
      <b-btn variant="primary" type="submit">
        <i class="fa fa-paper-plane"></i>
        {{ $t('reset-password.button-request') }}
      </b-btn>
    </div>
  </b-form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      name: '',
      contact: '',
    };
  },
};
</script>

<style lang="scss" scoped>
form {
  button {
    float: right;
  }
}
</style>
