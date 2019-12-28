<template>
  <b-card no-body>
    <h5>
      {{ $t('invest.join.invest-amount') }}
    </h5>
    <b-form @submit.prevent="$emit('submit', money * 10000)">
      <b-form-group>
        <b-input-group :append="$t('invest.detail.currency-text')">
          <input
            id="money"
            v-model="money"
            :class="`form-control ${convertCssValid(isValidMoney)}`"
            :max="maxVal"
            :min="1"
            type="number"
          />
        </b-input-group>
        <p v-if="isValidMoney !== null && !isValidMoney" class="warn">
          최대 {{ $n(maxVal) }}만원까지 투자가 가능합니다.
        </p>
      </b-form-group>
      <b-row class="buttons">
        <b-col cols="12" md="6">
          <b-button size="lg" variant="outline-success" type="submit">
            <i class="fa fa-list-alt"></i>투자 시뮬레이션
          </b-button>
        </b-col>
        <b-col cols="12" md="6">
          <b-button
            :disabled="!isValidMoney"
            @click="$emit('join', money * 10000)"
            size="lg"
            variant="primary"
          >
            <i class="fa fa-money"></i>
            {{ $t('invest.join.btn-invest') }}
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-card>
</template>

<script>
import validMixin from '~/mixin/valid-mixin';

export default {
  props: {
    target: { type: Number, required: true },
    current: { type: Number, required: true },
    deposit: { type: Number, required: true },
    isIndi: { type: Boolean, required: true },
  },
  data() {
    return { money: null };
  },
  computed: {
    isValidMoney: function isValidMoney() {
      const { money } = this;
      if (money <= 0) {
        return null;
      }
      return this.maxVal >= money;
    },
    maxVal: function getMaxVal() {
      const { target, current, deposit, isIndi } = this;
      const available = (target - current) / 10000;
      const depositD = deposit / 10000;

      if (available > depositD) {
        if (isIndi) {
          return depositD >= 2000 ? 2000 : depositD;
        }
        return depositD;
      }
      return available;
    },
  },
};
</script>

<style scoped>
div.card {
  margin: 8px auto;
}

div.buttons button {
  width: 100%;
}

h5 {
  margin-bottom: 16px;
}

p.warn {
  padding: 8px;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  div.card {
    padding: 16px;
  }

  div.buttons button {
    font-size: 0.9rem;
  }

  div.row > div:first-child {
    margin-bottom: 8px;
  }
}
</style>
