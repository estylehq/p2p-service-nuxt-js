<template>
  <b-form @submit.prevent="$emit('submit', eMoney * 10000)">
    <b-input-group>
      <input
        id="invMoney"
        v-model="eMoney"
        :max="maxValue"
        :min="1"
        :disabled="disabled"
        class="form-control"
        type="number"
        autocomplete="off"
        maxlength="6"
      />
      <b-input-group-append is-text>
        {{ $t('invest.detail.currency-text') }}
      </b-input-group-append>
      <b-input-group-append>
        <b-button :disabled="disabled" variant="primary" type="submit">
          {{ $t('invest.detail.preview.preview') }}
        </b-button>
      </b-input-group-append>
    </b-input-group>
  </b-form>
</template>

<script>
export default {
  props: {
    disabled: { type: Boolean, default: false },
    available: { type: Number, default: 0 },
    money: { type: Number, default: 0 },
    isBizUser: { type: Boolean, default: true },
  },
  data() {
    return {
      eMoney: this.money <= 0 ? 0 : this.money / 10000,
    };
  },
  computed: {
    maxValue: function maxValue() {
      const { isBizUser, available } = this;
      if (isBizUser) {
        return available;
      }
      return available >= 2000 ? 2000 : available;
    },
  },
  watch: {
    money: function onResponse(money) {
      if (money > 999999) {
        this.eMoney = 999999;
      }
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
