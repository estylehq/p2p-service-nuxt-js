<template>
  <b-form
    @submit.prevent="$emit('submit', { code, id: account, name: banks[code] })"
  >
    <b-form-group :label="$t('user.account.update.bank-name')">
      <select v-model="code" class="form-control custom-select">
        <option disabled value="">
          {{ $t('user.account.update.select-bank') }}
        </option>
        <template v-for="(bank, index) in Object.keys(banks)">
          <option
            :key="`${bank}_${index}`"
            :name="banks"
            :value="bank"
            :selected="bank === code"
          >
            {{ banks[bank] }}
          </option>
        </template>
      </select>
    </b-form-group>
    <b-form-group
      :label="$t('user.account.update.bank-account-number')"
      label-for="baccount"
    >
      <b-form-input
        id="baccount"
        v-model="account"
        :placeholder="
          $t('user.account.update.enter-bank-account-with-only-number')
        "
        required
        class="form-control"
        type="number"
        onkeyup="this.value=this.value.replace(/[^0-9-]/g,'');"
      ></b-form-input>
    </b-form-group>
    <div class="divider"></div>
    <ul class="info">
      <li>
        {{ $t('user.account.update.message-apply-own-account-only') }}
      </li>
      <li>
        {{
          $t('user.account.update.message-apply-only-general-account-number')
        }}
      </li>
      <li>
        {{
          $t('user.account.update.message-disabled-temporary-when-maintenance')
        }}
      </li>
    </ul>
    <div class="text-right">
      <b-button variant="primary" type="submit">
        {{ $t('button.save') }}
      </b-button>
    </div>
  </b-form>
</template>

<script>
export default {
  props: {
    banks: { type: Object, required: true },
    pBank: { type: String, default: '' },
    pAccount: { type: String, default: '' },
  },
  data() {
    return {
      code: this.pBank,
      account: this.pAccount,
    };
  },
};
</script>

<style scoped>
ul {
  padding-left: 24px;
  font-size: 0.9rem;
  margin-top: 8px;
}

ul > li {
  margin-bottom: 8px;
}

@media (max-width: 768px) {
  ul {
    font-size: 0.8rem;
  }
}
</style>
