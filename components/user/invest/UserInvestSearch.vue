<template>
  <b-form @submit.prevent="$emit('submit', search)" class="md-5">
    <b-input-group>
      <b-input-group-text slot="prepend">
        <i class="fa fa-search"></i>
      </b-input-group-text>
      <b-form-input
        type="text"
        v-model="search"
      ></b-form-input>
      <b-input-group-append>
        <b-button
          variant="success"
        >검색</b-button>
      </b-input-group-append>
    </b-input-group>
  </b-form>
</template>

<script>
export default {
  data() {
    return { search: '' };
  },
};
</script>
