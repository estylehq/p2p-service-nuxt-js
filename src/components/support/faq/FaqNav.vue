<template>
  <div class="nav-menu">
    <b-nav pills>
      <template v-for="(item, index) in items">
        <b-nav-item
          :key="`faq_category_${index}`"
          :active="current === item.value"
          @click="onClickItem(item.value)"
        >
          {{ item.text }}
        </b-nav-item>
      </template>
    </b-nav>
  </div>
</template>

<script>
export default {
  props: {
    items: { type: Array, default: null },
  },
  data() {
    return { current: '' };
  },
  mounted() {
    this.current = this.items[0].value;
  },
  methods: {
    onClickItem: function onClickItem(value) {
      this.current = value;
      this.$emit('nav', value);
    },
  },
};
</script>

<style scoped>
div.nav-menu {
  margin: 8px auto;
}

ul.nav {
  display: table;
  width: 100%;
}

li.nav-item {
  display: table-cell;
  text-align: center;
}
</style>
