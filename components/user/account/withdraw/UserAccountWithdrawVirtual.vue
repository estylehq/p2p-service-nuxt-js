<template>
  <div class="virtual">
    <h5>
      {{ $t('user.account.withdraw.virtual-bank-info') }}
    </h5>
    <b-row>
      <b-col cols="12" md="4">
        <p @click="$emit('copy', 'hidden-acnt')" class="bank">
          <i class="fa fa-clipboard"></i>{{ `[${name}] ${account}` }}
        </p>
        <p class="name">{{ owner }}</p>
      </b-col>
      <b-col cols="12" md="8">
        <p class="amount">
          {{ `${$n(deposit, 'currency')}` }}
        </p>
      </b-col>
    </b-row>
    <div class="buttons">
      <div class="spacer"></div>
      <b-button @click="$emit('refresh')" size="sm" variant="outline-primary">
        <i class="fa fa-repeat"></i>
        {{ $t('user.account.withdraw.button-refresh') }}
      </b-button>
    </div>
    <input id="hidden-acnt" :value="account" type="hidden" />
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, default: '' },
    account: { type: String, default: '' },
    owner: { type: String, default: '' },
    deposit: { type: Number, default: 0 },
  },
};
</script>

<style scoped>
div.virtual {
  padding: 24px;
  min-height: 192px;
}

h5 {
  font-weight: bold;
  margin-bottom: 16px;
  width: fit-content;
}

div.row {
  font-size: 0.9rem;
}

p {
  margin-bottom: 8px;
}

i.fa {
  margin-right: 8px;
}

p.bank:hover {
  cursor: pointer;
  text-decoration: underline;
}

p.amount {
  text-align: right;
  color: #2197ff;
  font-size: 2.4rem;
}

@media (max-width: 768px) {
  div.virtual {
    padding: 16px;
    min-height: 224px;
  }

  p.amount {
    position: initial;
    font-size: 1.6rem;
  }
}
</style>
