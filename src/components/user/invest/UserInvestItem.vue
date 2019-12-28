<template>
  <b-col class="frame" cols="12" md="6">
    <b-card @click="$emit('onClick', id)" no-body>
      <div class="bdg">
        <b-badge :variant="convertState(stateValue)">
          {{ stateText }}
        </b-badge>
      </div>
      <p class="name">
        {{ name }}
      </p>
      <div>
        <h3>
          {{ $t('invest.rate-format', { value: rate }) }}
        </h3>
        <h5>
          {{ $t('invest.month-format', { value: months }) }}
        </h5>
      </div>
      <div class="loan">
        <div>
          {{
            $t('invest.money-format', {
              value: $n(invest / 10000),
            })
          }}
        </div>
        <div>
          {{
            $t('invest.money-format', {
              value: $n(target / 10000),
            })
          }}
        </div>
      </div>
      <div class="under">
        <p class="term">
          {{ `${this.$d(start, 'short')} ~ ${this.$d(end, 'short')}` }}
        </p>
      </div>
    </b-card>
  </b-col>
</template>

<script>
import stateMixin from '~/mixin/invest/loan-state-variant-mixin';

export default {
  mixins: [stateMixin],
  props: {
    id: { type: Number, required: true },
    rate: { type: String, required: true },
    months: { type: Number, required: true },
    stateText: { type: String, required: true },
    stateValue: { type: String, required: true },
    name: { type: String, required: true },
    target: { type: Number, required: true },
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    invest: { type: Number, required: true },
  },
};
</script>

<style scoped>
div.frame {
  margin-bottom: 12px;
}

a {
  color: inherit;
}

a:hover {
  text-decoration: none;
}

.card:hover,
.card:active {
  cursor: pointer;
}

.badge.funded {
  background-color: rgba(31, 147, 255);
  margin-right: 8px;
}

div.bdg {
  position: relative;
  float: right;
}

h3,
h5,
p.name {
  padding: 4px 0;
}

h3,
h5 {
  width: fit-content;
  display: inline-block;
}

p.name {
  font-size: 0.9rem;
}

div.loan,
div.under {
  display: flex;
  align-items: flex-end;
}

div.loan {
  font-size: 0.8rem;
  margin-bottom: 4px;
}

div.loan > div {
  width: 50%;
}

div.loan > div:first-child {
  text-align: left;
}

div.loan > div:last-child {
  text-align: right;
  font-size: 1.2rem;
  font-weight: bold;
}

p.term {
  font-size: 0.8rem;
  margin-top: 8px;
}

div.under > p {
  margin-bottom: 4px;
}
</style>
