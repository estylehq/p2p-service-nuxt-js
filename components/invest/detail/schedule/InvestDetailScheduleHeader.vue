<template>
  <b-row class="header">
    <b-col cols="2"></b-col>
    <b-col cols="5">
      {{
        $t(`invest.detail.schedule.${isLoanActivated ? 'date' : 'principal'}`)
      }}
    </b-col>
    <b-col cols="5">
      {{ $t('invest.detail.schedule.total') }}
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    isLoanActivated: { type: Boolean, default: false },
  },
};
</script>

<style lang="scss" scoped>
div.header {
  text-align: center;
  padding: 8px 0;
  margin: 0 4px 8px;
  font-weight: bold;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.06);

  & > div {
    padding: 0;
  }
}

@media (max-width: 768px) {
  div.header {
    font-size: 0.8rem;
  }
}
</style>
