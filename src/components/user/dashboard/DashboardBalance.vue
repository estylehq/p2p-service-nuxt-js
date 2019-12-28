<template>
  <b-card no-body>
    <button
      @click="$router.push(localePath('user-bank'))"
      class="simple btn-sm"
    >
      <i class="fa fa-money"></i>{{ $t('dashboard.button-withdraw') }}
    </button>
    <h6>
      {{ $t('dashboard.balance') }}
    </h6>
    <p @click="$emit('copy', FIELD_NAME_ACCOUNT)" class="bank">
      <i class="fa fa-clipboard"></i>[{{ bank }}] {{ account }}
    </p>
    <p class="owner">{{ owner }}</p>
    <h3>
      {{ $n(deposit, 'currency') }}
    </h3>
    <input :id="FIELD_NAME_ACCOUNT" :value="account" type="hidden" />
  </b-card>
</template>

<script>
const FIELD_NAME_ACCOUNT = 'bank-account';

export default {
  props: {
    bank: { type: String, default: '' },
    account: { type: String, default: '' },
    owner: { type: String, default: '' },
    deposit: { type: Number, default: 0 },
  },
  data() {
    return {
      FIELD_NAME_ACCOUNT,
    };
  },
};
</script>

<style scoped>
div.card {
  font-size: 0.9rem;
  margin-bottom: 16px;
}

h6 {
  margin-bottom: 16px;
}

h3 {
  color: #1f93ff;
  font-weight: bold;
}

h3 > span {
  color: #333333;
  font-size: 75%;
  margin-left: 8px;
  font-weight: 200;
}

p.bank:hover {
  text-decoration: underline;
  cursor: pointer;
}

p.bank > i.fa {
  margin-right: 8px;
}

div.card > p:last-child {
  margin-bottom: 0;
}

button {
  font-size: 0.8rem;
  position: absolute;
  top: 16px;
  right: 24px;
}

@media (max-width: 768px) {
  div.card {
    border-radius: 0;
    border: unset;
  }
}
</style>
