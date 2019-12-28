<template>
  <b-card no-body>
    <h6>
      {{ $t('dashboard.you-did-not-certificated') }}
    </h6>
    <p>
      {{ $t('dashboard.you-can-invest-after-certificate') }}
    </p>
    <b-button
      @click="
        $router.push(
          localePath({
            name: isBizUser ? 'support-qna' : 'user-certificate',
          })
        )
      "
      size="sm"
      variant="primary"
    >
      {{
        isBizUser
          ? $t('dashboard.button-asking')
          : $t('dashboard.button-certificate')
      }}
    </b-button>
  </b-card>
</template>

<script>
export default {
  props: {
    isBizUser: { type: Boolean, default: false },
  },
};
</script>

<style scoped>
div.card {
  font-size: 0.9rem;
  margin-bottom: 16px;
}

h6 {
  margin-bottom: 8px;
}

p {
  font-size: 90%;
  margin-bottom: 16px;
}

@media (max-width: 768px) {
  div.card {
    border-radius: 0;
    border: unset;
  }
}
</style>
