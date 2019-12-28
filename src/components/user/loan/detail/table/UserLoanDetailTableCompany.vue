<template>
  <div>
    <h6>
      {{ $t('user.loan.detail.company-info') }}
    </h6>
    <b-table :items="[item]" :fields="fields" stacked>
      <template slot="address">
        {{ `(${postcode}) ${cityState} ${detail}` }}
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, default: '' },
    code: { type: String, default: '' },
    postcode: { type: String, default: null },
    cityState: { type: String, default: null },
    detail: { type: String, default: null },
  },
  data() {
    return {
      fields: [
        { key: 'name', label: this.$t('user.loan.detail.company-name') },
        { key: 'code', label: this.$t('user.loan.detail.company-code') },
      ],
      item: {
        name: this.name,
        code: this.code,
      },
    };
  },
  beforeMount() {
    if (this.postcode === null) {
      return;
    }
    this.fields = [
      ...this.fields,
      { key: 'address', label: this.$t('user.loan.detail.company-address') },
    ];
    this.item = {
      ...this.item,
      address: `(${this.postcode}) ${this.cityState} ${this.detail}`,
    };
  },
};
</script>

<style scoped>
h6 {
  font-weight: bold;
  padding: 8px;
  margin-bottom: 8px;
}
</style>
