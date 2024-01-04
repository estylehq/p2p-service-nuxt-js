<template>
  <b-table :fields="fields" :items="[item]" stacked></b-table>
</template>

<script>
export default {
  props: {
    result: { type: Object, required: true },
  },
  data() {
    return {
      fields: {
        companyName: {
          label: this.$t('security.complete.table-company-name'),
        },
        companyCode: {
          label: this.$t('security.complete.table-company-code'),
        },
        loan: { label: this.$t('security.complete.table-loan') },
        term: { label: this.$t('security.complete.table-term') },
        other: { label: this.$t('security.complete.table-other') },
      },
      item: {
        companyName: this.result.company.name,
        companyCode: this.result.company.code,
        loan: this.$n(this.result.loan, 'currency'),
        term: this.$t('security.complete.term-format', {
          value: this.result.term,
        }),
        other: this.result.other,
        created: this.$d(this.result.create, 'short'),
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
