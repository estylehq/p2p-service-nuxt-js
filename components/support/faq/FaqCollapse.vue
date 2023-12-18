<template>
  <div class="faq-item">
    <div v-b-toggle="id" class="header">
      <i class="close fa fa-caret-up when-opened"></i>
      <i class="close fa fa-caret-down when-closed"></i>
      <p>{{ title }}</p>
    </div>
    <b-collapse :id="id">
      <div v-html="content" class="content"></div>
    </b-collapse>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    id: { type: String, default: '' },
    content: { type: String, default: '' },
  },
};
</script>

<style scoped>
.close {
  font-size: 1rem;
}

div.faq-item {
  font-size: 0.9rem;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 8px;
}

div.header p {
  width: fit-content;
  padding: 16px 24px;
  cursor: pointer;
  margin: 0;
}

div.header p::before {
  content: '●';
  margin-right: 8px;
  color: #1f93ff;
  opacity: 0.5;
}

div.header i.fa {
  padding: 20px;
  max-height: 52px;
}

div.content {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 0.85rem;
  padding: 16px 24px;
  line-height: 1.8;
}
</style>
