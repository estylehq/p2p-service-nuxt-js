<template>
  <div class="real">
    <h5>
      {{ $t('user.account.withdraw.header') }}
    </h5>
    <b-row>
      <b-col cols="12">
        <p class="bank">{{ `[${name}] ${account}` }}</p>
        <p class="name">{{ owner }}</p>
        <b-form @submit.prevent="$emit('submit', amount)">
          <div class="amounts">
            <b-button
              v-for="(value, index) in valArray"
              :key="`${index}_add_amount_${value}`"
              @click="amount += value * 10000"
              class="btn-amount"
              size="sm"
              variant="outline-primary"
            >
              {{
                $t('user.account.withdraw.button-amount-format', {
                  value: $n(value),
                })
              }}
            </b-button>
            <b-button
              @click="amount = deposit"
              class="btn-amount"
              size="sm"
              variant="outline-primary"
            >
              {{ $t('user.account.withdraw.button-amount-all') }}
            </b-button>
          </div>
          <b-input-group>
            <b-input-group-prepend>
              <div class="input-group-text">
                {{ $t('user.account.withdraw.amount') }}
              </div>
            </b-input-group-prepend>
            <b-form-input
              id="amount"
              v-model="amount"
              :min="1"
              :max="maxAmount"
              type="number"
            ></b-form-input>
            <b-input-group-append>
              <div class="input-group-text">
                {{ $t('user.account.withdraw.currency-text') }}
              </div>
              <b-button
                :disabled="amount === 0"
                variant="primary"
                type="submit"
              >
                {{ $t('user.account.withdraw.button-withdraw') }}
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form>
      </b-col>
    </b-row>
    <div class="message">
      <p class="warn">
        {{ $t('user.account.withdraw.please-follow-steps') }}
      </p>
      <ul>
        <li>
          {{ $t('user.account.withdraw.check-text-message-withdraw') }}
        </li>
        <li>
          {{ $t('user.account.withdraw.enter-received-code-and-replay') }}
        </li>
        <li>
          {{ $t('user.account.withdraw.completed-requesting-withdraw') }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
const A_BILLION = 1000000000;

export default {
  props: {
    name: { type: String, default: '' },
    owner: { type: String, default: '' },
    account: { type: String, default: '' },
    deposit: { type: Number, default: 0 },
  },
  data() {
    return {
      valArray: [10, 100, 1000],
      amount: 0,
    };
  },
  computed: {
    maxAmount: function getMaxAmount() {
      const { deposit } = this;
      return deposit > A_BILLION ? A_BILLION - 1 : deposit;
    },
  },
  watch: {
    amount: function onResponse(amount) {
      if (amount > A_BILLION) {
        this.amount = A_BILLION - 1;
      }
      if (amount > this.deposit) {
        this.amount = this.deposit;
      }
    },
  },
};
</script>

<style scoped>
div.real {
  padding: 24px;
}

h5 {
  font-weight: bold;
  margin-bottom: 16px;
}

form {
  margin-top: 16px;
}

.input-group * {
  font-size: 0.9rem !important;
}

input {
  text-align: right;
}

div.amounts {
  margin-top: 4px;
  margin-bottom: 8px;
  text-align: right;
}

button.btn-amount {
  margin: 4px 0 4px 8px;
  font-size: 0.8rem;
}

div.message {
  margin-top: 16px;
  font-size: 0.9rem;
}

div.message p.warn {
  font-size: 1rem;
  margin-bottom: 16px;
}

div.message ul {
  margin-top: 16px;
  padding-left: 24px;
}

div.message ul > li {
  margin-bottom: 8px;
}

@media (max-width: 768px) {
  div.real {
    padding: 16px;
  }

  p.amount {
    position: initial;
    font-size: 1.6rem;
  }

  .input-group * {
    font-size: 0.8rem !important;
  }

  button.btn-amount {
    margin: 4px 0 4px 4px;
    font-size: 0.7rem;
  }

  div.message {
    font-size: 0.8rem;
  }

  div.message p.warn {
    font-size: 0.9rem;
  }

  div.message ul {
    margin-top: 8px;
  }
}
</style>
