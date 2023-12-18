<template>
  <div class="container">
    <h3 class="title">FAQ</h3>
    <faq-nav :items="categories" @nav="onClickNav"></faq-nav>
    <div class="list">
      <template v-for="(item, index) in items">
        <faq-collapse
          :id="`${item.id}${index}`"
          :key="`${item.id}${index}`"
          :title="item.title"
          :content="item.content"
        ></faq-collapse>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import FaqNav from '@/components/support/faq/FaqNav.vue';
import FaqCollapse from '@/components/support/faq/FaqCollapse.vue';

export default {
  middleware: ['support/faq/index'],
  layout: 'support',
  components: {
    FaqNav,
    FaqCollapse,
  },
  computed: {
    ...mapState('support/faq/categories', { categories: state => state.items }),
    ...mapState('support/faq/items', ['items']),
  },
  methods: {
    ...mapActions('support/faq/items', ['getList']),
    onClickNav: function onClickNav(value) {
      this.getList(value);
    },
  },
};
</script>

<style scoped></style>
