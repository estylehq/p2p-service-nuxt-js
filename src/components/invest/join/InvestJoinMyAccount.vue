<template>
  <b-card no-body>
    <h4>{{ $n(deposit, 'currency') }}</h4>
    <h5>내 예치금</h5>
    <b-row>
      <b-col cols="12" md="8" lg="9">
        <p @click="copy('hidden-acnt')" class="bank">
          <i class="fa fa-clipboard"></i>
          {{ `[${bank}] ${account} / ${owner}` }}
        </p>
      </b-col>
      <b-col cols="12" md="4" lg="3">
        <b-button @click="$emit('refresh')" variant="outline-info" size="sm">
          <i class="fa fa-repeat"></i>새로고침
        </b-button>
      </b-col>
    </b-row>
    <div class="divider"></div>
    <bank-notify></bank-notify>
    <input id="hidden-acnt" :value="account" type="hidden" />
  </b-card>
</template>

<script>
import copyToClipboardMixin from '~/mixin/copy-to-clipboard-mixin';
import BankNotify from '~/components/user/bank/BankNotify.vue';

export default {
  components: {
    BankNotify,
  },
  mixins: [copyToClipboardMixin],
  props: {
    bank: { type: String, default: '' },
    account: { type: String, default: '' },
    deposit: { type: Number, default: 0 },
    owner: { type: String, default: '' },
  },
};
</script>

<style scoped>
div.card {
  display: block;
  margin: 8px auto;
}

h5 {
  margin-bottom: 16px;
}

h4 {
  width: fit-content;
  float: right;
  margin-bottom: 0;
}

button {
  float: right;
}

div.row {
  margin: 0;
  font-size: 0.9rem;
}

div.row > div {
  padding: 0;
}

p.bank > i.fa {
  margin-right: 8px;
}

p.bank:hover {
  cursor: pointer;
  text-decoration: underline;
}

@media (max-width: 768px) {
  div.card {
    padding: 16px;
  }

  h4 {
    font-size: 1.2rem;
  }

  h5 {
    font-size: 1rem;
  }

  div.row {
    margin: 0;
    font-size: 0.8rem;
  }
}
</style>
