<template>
  <b-form @submit.prevent="onSubmit">
    <b-form-group :label="$t('user.privacy.investor.name')">
      <b-form-input
        id="name"
        v-model="name"
        type="text"
        class="form-control"
        disabled
        autocomplete="off"
        required
      ></b-form-input>
    </b-form-group>
    <slot></slot>
    <b-form-group :label="$t('user.privacy.investor.contact')">
      <b-input-group>
        <b-form-input
          id="contact"
          v-model="contact"
          :disabled="contactRequest ? contactVerified : false"
          :placeholder="pContact"
          class="form-control"
          type="tel"
          onkeyup="this.value=this.value.replace(/[^0-9]/g,'');"
          maxlength="12"
          required
          aria-describedby="contactFeedback"
        ></b-form-input>
        <b-input-group-append>
          <b-button
            :disabled="contactRequest ? contactVerified : false"
            @click="$emit('request', contact)"
          >
            {{ $t('user.privacy.investor.contact-request') }}
          </b-button>
        </b-input-group-append>
      </b-input-group>
    </b-form-group>
    <b-form-group v-if="contactRequest">
      <b-input-group :prepend="$t('user.privacy.investor.contact-verify-code')">
        <b-form-input
          id="verified"
          v-model="verCode"
          :disabled="contactRequest ? contactVerified : true"
          required
          class="form-control"
          type="number"
          placeholder="0000"
          onkeyup="this.value=this.value.replace(/[^0-9-]/g,'');"
          maxlength="7"
        ></b-form-input>
        <b-input-group-append>
          <b-button
            :disabled="contactRequest ? contactVerified : true"
            @click="$emit('verify', { contact: contact, verCode })"
          >
            {{ $t('user.privacy.investor.contact-verify') }}
          </b-button>
        </b-input-group-append>
      </b-input-group>
      <p class="warn">
        {{ $t('user.privacy.investor.contact-verify-message') }}
      </p>
      <b-form-text>
        {{ $t('user.privacy.investor.you-must-save-after-verified-contact') }}
      </b-form-text>
    </b-form-group>
    <div class="divider"></div>
    <b-form-group :label="$t('user.privacy.investor.type')" horizontal>
      <p class="margin-0 padding-8">
        {{ investorType }}
      </p>
    </b-form-group>
    <div class="divider"></div>
    <div class="buttons">
      <div class="spacer"></div>
      <b-button :disabled="!submitEnabled" variant="primary" type="submit">
        <i class="fa fa-save"></i>{{ $t('button.save') }}
      </b-button>
    </div>
  </b-form>
</template>

<script>
export default {
  props: {
    name: { type: String, required: true },
    investorType: { type: String, default: '' },
    lender: { type: Boolean, default: false },
    contactRequest: { type: Boolean, default: false },
    contactVerified: { type: Boolean, default: false },
    pContact: { type: String, required: true },
    submitEnabled: { type: Boolean, default: false },
  },
  data() {
    return {
      contact: this.pContact,
      verCode: '',
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      const contactVal =
        this.contact.length <= 0 ? this.pContact : this.contact;
      this.$emit('submit', { contact: contactVal });
    },
  },
};
</script>

<style scoped>
.form-group,
div.divider {
  margin-bottom: 8px;
}
</style>
