<template>
  <b-card no-body border-variant="primary" text-variant="primary">
    <h5><i class="fa fa-check-square-o"></i>{{ header }}</h5>
    <p>
      {{ content }}
    </p>
  </b-card>
</template>

<script>
export default {
  props: {
    header: { type: String, default: '' },
    content: { type: String, default: '' },
  },
};
</script>

<style scoped>
div.card {
  padding: 32px 8px;
  margin-bottom: 24px;
  min-height: 100px;
}

h5,
p {
  text-align: center;
}

h5 {
  font-weight: bold;
}

h5 > i.fa {
  margin-right: 8px;
}

p {
  margin-bottom: 0;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  div.card {
    padding: 24px 8px;
    min-height: unset;
    margin-bottom: 16px;
  }
}
</style>
