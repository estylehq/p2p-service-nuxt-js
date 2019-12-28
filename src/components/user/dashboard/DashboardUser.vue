<template>
  <b-card no-body>
    <p>
      <b>{{ name }}</b>
      <span>
        [{{ investType }}{{ isLender ? `, ${$t('dashboard.lender')}` : '' }}]
      </span>
    </p>
    <p>{{ email }}</p>
    <button
      @click="$router.push(localePath('user-privacy'))"
      class="simple btn-sm"
    >
      <i class="fa fa-pencil"></i>{{ $t('dashboard.button-user-info') }}
    </button>
  </b-card>
</template>

<script>
export default {
  props: {
    name: { type: String, default: null },
    email: { type: String, default: null },
    investType: { type: String, default: null },
    isLender: { type: Boolean, default: false },
  },
};
</script>

<style scoped>
div.card {
  font-size: 0.9rem;
  margin-bottom: 16px;
}

p:last-child {
  margin-bottom: 0;
  font-size: 90%;
}

p > b {
  margin-right: 4px;
}

p > span {
  font-size: 90%;
  margin: 0 8px;
}

button {
  font-size: 0.8rem;
  position: absolute;
  top: 16px;
  right: 24px;
}

@media (max-width: 768px) {
  div.card {
    border-radius: 0;
    border: unset;
    font-size: 0.8rem;
  }
}
</style>
