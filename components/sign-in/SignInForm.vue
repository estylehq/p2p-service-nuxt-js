<template>
  <b-form @submit.prevent="$emit('submit', { email, password })">
    <b-form-group :label="$t('sign-in.email')" label-for="email">
      <input
        id="email"
        v-model="email"
        required
        class="form-control"
        type="email"
      />
    </b-form-group>
    <b-form-group :label="$t('sign-in.password')" label-for="password">
      <input
        id="password"
        v-model="password"
        required
        class="form-control"
        type="password"
      />
    </b-form-group>
    <p class="forgot">
      <b-link :to="localePath('forgot-email')">
        {{ $t('sign-in.forgot-email-password') }}
      </b-link>
    </p>
    <div class="buttons">
      <b-button
        :to="localePath('sign-up')"
        exact
        variant="outline-primary"
        router-tag="a"
      >
        {{ $t('sign-in.sign-up') }}
      </b-button>
      <b-button variant="primary" type="submit">
        {{ $t('sign-in.sign-in') }}
      </b-button>
    </div>
  </b-form>
</template>

<script>
export default {
  data() {
    return { email: '', password: '' };
  },
};
</script>

<style scoped>
div.buttons {
  display: flex;
  margin: 8px -8px 0;
}

.btn {
  margin-top: 16px;
  width: 100%;
  padding: 10px 24px;
  font-weight: bold;
  font-size: 0.9rem;
  border-radius: 8px;
  flex-grow: 1 !important;
  margin: 0 8px;
}

.forgot {
  text-align: center;
  font-size: 0.8rem;
  margin-bottom: 24px;
}

.btn {
  border: unset;
}

.btn > i.fa {
  margin-right: 0;
  font-size: 1.5rem;
  padding: 8px;
}

.btn.back {
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}

div.header > .title {
  padding: 16px;
  margin-bottom: 0;
  font-weight: bold;
}
</style>
