<template>
  <div>
    <div :class="`list ${small ? 'small' : ''}`">
      <p v-if="small" class="small-head">
        {{ $t('support.qna.list') }}
      </p>
      <b-row :class="`header ${small ? 'small' : ''}`">
        <b-col cols="8" md="9">
          {{ $t('support.qna.title') }}
        </b-col>
        <b-col cols="4" md="3">
          {{ $t('support.qna.date') }}
        </b-col>
      </b-row>
      <template v-for="(item, index) in items">
        <qna-item
          :id="item.id"
          :key="`${current}_${index}`"
          :title="item.title"
          :created="item.created"
          :small="small"
          :replies="item.replies"
          :active="item.id === activeId"
          @click="
            $router.push(
              localePath({
                name: 'support-qna-id',
                params: { id: item.id },
                query: { page: current },
              })
            )
          "
        >
        </qna-item>
      </template>
    </div>
    <div :class="`divider ${small ? 'small' : ''}`"></div>
    <div :class="`under ${small ? 'small' : ''}`">
      <b-link
        :class="`btn btn-primary ${small ? 'btn-sm' : ''}`"
        :to="localePath('support-qna-write')"
        router-tag="a"
      >
        <i class="fa fa-pencil-square-o"></i>
        {{ $t('support.qna.button-write') }}
      </b-link>
      <b-pagination
        v-model="current"
        :size="small ? 'sm' : 'md'"
        :total-rows="totalItems"
        :per-page="12"
        @change="$emit('pageChange', $event)"
        align="left"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import QnaItem from '@/components/support/qna/QnaItem.vue';

export default {
  components: {
    QnaItem,
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
      current: this.pageNumber,
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

a.btn {
  float: right;
}

div.under {
  margin: 32px auto 56px;
}

div.under.small {
  margin: 16px auto 32px;
}

.small {
  max-width: 768px;
}
</style>
