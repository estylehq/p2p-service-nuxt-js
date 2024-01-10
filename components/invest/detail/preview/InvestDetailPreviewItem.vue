<template>
  <b-row v-b-toggle="modalId" class="item">
    <b-col cols="2">{{ sequence }}</b-col>
    <b-col cols="5">
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
          <b-row>
            <b-col>{{ $t('invest.detail.preview.interest') }}</b-col>
            <b-col>{{ $n(interest, 'currency') }}</b-col>
          </b-row>
          <b-row>
            <b-col>{{ $t('invest.detail.preview.tax') }}</b-col>
            <b-col>{{ $n(tax, 'currency') }}</b-col>
          </b-row>
          <b-row>
            <b-col>{{ $t('invest.detail.preview.invest-fee') }}</b-col>
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
  },
  computed: {
    modalId: function getModalId() {
      return `${this.id}${this.sequence}`;
    },
  },
};
</script>

<style lang="scss" scoped>
div.row.item {
  margin: 0 4px;
  padding: 8px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  text-align: center;
  font-size: 0.9rem;

  &:last-child {
    border-bottom: unset;
  }

  i.fa.fa-caret-up {
    right: 0;
    position: absolute;
    padding: 4px 16px 0;
    transition: all 0.3s;
  }

  &.collapsed {
    i.fa.fa-caret-up {
      rotate: 180deg;
    }
  }

  div.non-padding {
    padding: 0 16px !important;
  }

  div.detail {
    padding: 16px;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.03);

    & > div.row {
      margin: 0 auto 16px;

      div {
        &:first-child {
          text-align: left;
        }

        &:last-child {
          text-align: right;
        }
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

@media (max-width: 512px) {
  div {
    &.row {
      & > div {
        padding: 4px;
      }

      &.item {
        font-size: 0.8rem;
      }
    }

    &.item,
    &.detail {
      font-size: 0.7rem;
    }

    &.detail {
      padding: 8px 16px;

      div.row {
        margin: 0 auto;
      }
    }
  }
}
</style>
