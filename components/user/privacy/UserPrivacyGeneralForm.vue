<template>
  <b-form @submit.prevent="$emit('submit', subscribes)">
    <b-form-group :label="$t('user.privacy.general.email')">
      <b-form-input
        id="email"
        v-model="email"
        type="email"
        disabled
      ></b-form-input>
    </b-form-group>
    <b-form-group :label="$t('user.privacy.general.subscribes')">
      <div class="check-horizontal">
        <b-form-checkbox
          id="subscribe-email"
          :checked="subscribes.email"
          @change="subscribes.email = !subscribes.email"
        >
          {{ $t('user.privacy.general.subscribe-email') }}
        </b-form-checkbox>
        <b-form-checkbox
          id="subscribe-sms"
          :checked="subscribes.sms"
          @change="subscribes.sms = !subscribes.sms"
        >
          {{ $t('user.privacy.general.subscribe-sms') }}
        </b-form-checkbox>
      </div>
    </b-form-group>
    <slot></slot>
    <div class="divider"></div>
    <div class="text-right">
      <b-button variant="primary" type="submit">
        {{ $t('button.save') }}
      </b-button>
    </div>
  </b-form>
</template>

<script>
export default {
  props: {
    email: { type: String, default: null },
    subscribeEmail: { type: Boolean, default: false },
    subscribeSms: { type: Boolean, default: false },
  },
  data() {
    return {
      subscribes: {
        email: this.subscribeEmail,
        sms: this.subscribeSms,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
form {
  div.check-horizontal {
    margin-top: 8px;
  }

  div.divider {
    margin: 8px 0;
  }
}
</style>
