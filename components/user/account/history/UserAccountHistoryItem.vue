<template>
  <b-row>
    <b-col cols="6" md="6">
      <p>{{ `${type}(${state})` }}</p>
    </b-col>
    <b-col cols="6" md="3">
      <p :class="typeVal">
        {{ $n(amount) }}
      </p>
    </b-col>
    <b-col cols="12" md="3">
      {{ $d(datetime, 'short') }}
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    datetime: { type: Date, default: () => new Date() },
    type: { type: String, default: null },
    typeVal: { type: String, default: 'in' },
    state: { type: String, default: null },
    contents: { type: String, default: null },
    amount: { type: Number, default: null },
  },
};
</script>

<style scoped>
div.row {
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  font-size: 0.9rem;
  text-align: center;
  border-radius: 8px;
  transition: background-color 0.2s;
}

div.row:hover {
  background-color: rgba(0, 0, 0, 0.02);
  transition: background-color 0.2s;
}

div.row > div:first-child {
  text-align: left;
}

h6,
p {
  margin: 0;
}

p {
  color: #777777;
}

p.in {
  color: #1f93ff;
}

p.out {
  color: crimson;
}

@media (max-width: 768px) {
  div.row {
    font-size: 0.8rem;
  }

  div.row > div:nth-child(2),
  div.row > div:last-child {
    text-align: right;
  }
}
</style>
