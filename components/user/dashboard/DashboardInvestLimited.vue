<template>
  <b-card no-body>
    <h6>투자 한도</h6>
    <div>
      <span>잔여 한도</span>
      <p>{{ $n(left, 'currency') }}</p>
    </div>
    <div>
      <span>최대 한도</span>
      <p>{{ $n(max, 'currency') }}</p>
    </div>
  </b-card>
</template>

<script>
export default {
  props: {
    left: { type: Number, default: 0 },
    max: { type: Number, default: 0 },
  },
};
</script>

<style scoped>
div.card {
  font-size: 0.9rem;
  margin-bottom: 16px;
}

div.card > div {
  margin-bottom: 8px;
}

div.card > div:last-child {
  margin-bottom: 0;
}

span {
  font-size: 90%;
}

p {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  div.card {
    border-radius: 0;
    border: unset;
  }
}
</style>
