<template>
  <div>
    <div :class="`list ${small ? 'small' : ''}`">
      <p v-if="small" class="small-head">
        {{ $t('support.notice.list') }}
      </p>
      <b-row :class="`header ${small ? 'small' : ''}`">
        <b-col cols="8" md="9">
          {{ $t('support.notice.title') }}
        </b-col>
        <b-col cols="4" md="3">
          {{ $t('support.notice.date') }}
        </b-col>
      </b-row>
      <template v-for="(item, index) in items">
        <notice-item
          :id="item.id"
          :key="`${index}`"
          :title="item.title"
          :created="item.created"
          :small="small"
          :active="item.id === activeId"
          @click="
            $router.push(
              localePath({
                name: 'support-notice-id',
                params: { id: item.id },
                query: { page: current },
              })
            )
          "
        >
        </notice-item>
      </template>
    </div>
    <b-pagination
      v-model="current"
      :size="small ? 'sm' : 'md'"
      :total-rows="totalItems"
      :per-page="12"
      @change="$emit('pageChange', $event)"
      align="center"
    ></b-pagination>
  </div>
</template>

<script>
import NoticeItem from '@/components/support/notice/NoticeItem.vue';

export default {
  components: {
    NoticeItem,
  },
  props: {
    small: { type: Boolean, default: false },
    activeId: { type: Number, default: 1 },
    pageNumber: { type: Number, default: 1 },
    totalItems: { type: Number, default: 0 },
    items: { type: Array, default: null },
  },
  data() {
    return {
      current: this.pageNumber || 1,
    };
  },
  watch: {
    pageNumber: function onWatch(pageNumber) {
      this.current = pageNumber;
    },
  },
};
</script>

<style scoped>
p.small-head {
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
}
</style>
