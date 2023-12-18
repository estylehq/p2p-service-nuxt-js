<template>
  <div>
    <h6>
      {{ $t('user.loan.detail.offerer-info') }}
    </h6>
    <b-table :items="[item]" :fields="fields" stacked></b-table>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, default: '' },
    contact: { type: String, default: '' },
    email: { type: String, default: '' },
    postcode: { type: String, default: null },
    cityState: { type: String, default: null },
    detail: { type: String, default: null },
  },
  data() {
    return {
      fields: [
        {
          key: 'name',
          label: this.$t('user.loan.detail.offerer-name'),
        },
        {
          key: 'contact',
          label: this.$t('user.loan.detail.offerer-contact'),
        },
        {
          key: 'email',
          label: this.$t('user.loan.detail.offerer-email'),
        },
      ],
      item: {
        name: this.name,
        contact: this.contact,
        email: this.email,
      },
    };
  },
  beforeMount() {
    if (this.postcode === null) {
      return;
    }
    this.fields = [
      ...this.fields,
      {
        key: 'address',
        label: this.$t('user.loan.detail.offerer-address'),
      },
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
