<template>
  <b-form>
    <b-input-group>
      <b-input-group-prepend>
        <b-input-group-text>
          {{ $t('invest.detail.schedule.mounted') }}
        </b-input-group-text>
      </b-input-group-prepend>
      <input
        id="invMoney"
        v-model="formattedMoney"
        disabled
        class="form-control"
        type="text"
        autocomplete="off"
        maxlength="6"
      />
    </b-input-group>
  </b-form>
</template>

<script>
export default {
  props: {
    money: { type: Number, default: 0 },
  },
  computed: {
    formattedMoney: function formattedMoney() {
      return this.$n(this.money, 'currency');
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  margin: 0 8px;

  input {
    text-align: right;
  }
}
</style>
