<template>
  <div>
    <b-row>
      <template v-for="(invest, index) in items">
        <invest-list-item
          :id="invest.id"
          :key="`${index}_${pageNumber}`"
          :rate="invest.rate"
          :months="invest.months"
          :state-text="invest.state.text"
          :state-value="invest.state.value"
          :name="invest.name"
          :current="invest.current"
          :target="invest.target"
          :term-start="invest.start"
          :term-end="invest.end"
          :funded="invest.funded"
          :type-text="invest.type.text"
          :type-value="invest.type.value"
          @click="$emit('click', $event)"
        ></invest-list-item>
      </template>
    </b-row>
    <b-pagination
      v-model="current"
      :total-rows="totalItems"
      :per-page="12"
      size="md"
      align="center"
    ></b-pagination>
  </div>
</template>

<script>
import InvestListItem from '~/components/invest/list/InvestListItem.vue';

export default {
  components: {
    InvestListItem,
  },
  props: {
    items: { type: Array, default: null },
    totalItems: { type: Number, default: 0 },
    pageNumber: { type: Number, default: 1 },
  },
  data() {
    return {
      current: this.pageNumber || 1,
    };
  },
  watch: {
    current: function onWatch(current) {
      this.$emit('pageChange', current);
    },
  },
};
</script>

<style lang="scss" scoped>
div.row {
  margin-bottom: 16px;
}
</style>
