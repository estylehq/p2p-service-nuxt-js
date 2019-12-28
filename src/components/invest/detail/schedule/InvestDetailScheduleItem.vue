<template>
  <b-row v-b-toggle="modalId" class="item">
    <b-col cols="2">{{ sequence }}</b-col>
    <b-col v-if="isLoanActivated" cols="5">
      {{ $d(date, 'short') }}
    </b-col>
    <b-col v-if="!isLoanActivated" cols="5">
      {{ $n(principal, 'currency') }}
    </b-col>
    <b-col cols="5">
      {{ $n(refund, 'currency') }}
      <i class="fa fa-caret-up when-opened"></i>
      <i class="fa fa-caret-down when-closed"></i>
    </b-col>
    <b-col cols="12" class="non-padding">
      <b-collapse :id="modalId">
        <div class="detail">
          <b-row v-if="isLoanActivated">
            <b-col>{{ $t('invest.detail.schedule.principal') }}</b-col>
            <b-col>{{ $n(principal, 'currency') }}</b-col>
          </b-row>
          <b-row>
            <b-col>{{ $t('invest.detail.schedule.interest') }}</b-col>
            <b-col>{{ $n(interest, 'currency') }}</b-col>
          </b-row>
          <b-row>
            <b-col>{{ $t('invest.detail.schedule.tax') }}</b-col>
            <b-col>{{ $n(tax, 'currency') }}</b-col>
          </b-row>
          <b-row>
            <b-col>{{ $t('invest.detail.schedule.invest-fee') }}</b-col>
            <b-col>{{ $n(fee, 'currency') }}</b-col>
          </b-row>
        </div>
      </b-collapse>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    id: { type: Number, required: true },
    sequence: { type: Number, required: true },
    principal: { type: Number, required: true },
    interest: { type: Number, required: true },
    refund: { type: Number, required: true },
    tax: { type: Number, default: 0 },
    fee: { type: Number, default: 0 },
    isLoanActivated: { type: Boolean, default: false },
    date: { type: Date, default: () => new Date() },
  },
  computed: {
    modalId: function getModalId() {
      return `${this.id}${this.sequence}`;
    },
  },
};
</script>

<style scoped>
div.row.item {
  margin: 0 4px;
  padding: 8px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  text-align: center;
  font-size: 0.9rem;
}

div.row.item:last-child {
  border-bottom: unset;
}

button {
  padding: 0 8px;
  float: right;
}

button > i.fa {
  margin: 0;
}

div.detail {
  margin: 0;
  padding: 16px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.03);
}

div.detail > div.row {
  margin: 0 auto 8px;
}

div.detail > div.row > div:first-child {
  text-align: left;
}

div.detail > div.row > div:last-child {
  text-align: right;
}

div.detail > div.row:last-child {
  margin-bottom: 0;
}

div.non-padding {
  padding: 0 16px !important;
}

i.fa.when-closed,
i.fa.when-opened {
  right: 0;
  position: absolute;
  padding: 4px 16px 0;
}

div.row.collapsed i.when-closed {
  display: initial;
}

div.row.collapsed i.when-opened {
  display: none;
}

@media (max-width: 512px) {
  div.row.item {
    font-size: 0.8rem;
  }

  div.row > div {
    padding: 4px;
  }

  div.detail {
    padding: 8px 16px;
  }

  div.detail div.row {
    margin: 0 auto;
  }

  div.item,
  div.detail {
    font-size: 0.7rem;
  }
}
</style>
