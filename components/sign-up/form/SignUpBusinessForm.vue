<template>
  <sign-up-general-form
    :email="email"
    :contact-request="contactRequest"
    :contact-verified="contactVerified"
    @backward="$emit('backward')"
    @submit="onSubmit"
    @request="$emit('request', $event)"
    @verify="$emit('verify', $event)"
  >
    <div class="divider"></div>
    <b-form-group label="상호명" label-for="company-name">
      <input
        id="companyName"
        v-model="company.name"
        class="form-control"
        type="text"
        placeholder="회사명"
        required
      />
    </b-form-group>
    <b-form-group label="사업자 등록번호" label-for="company-code">
      <b-form-input
        id="companyCode"
        v-model="company.code"
        type="text"
        placeholder="123-12-12345"
        onkeyup="this.value=this.value.replace(/[^0-9-]/g,'');"
        aria-describedby="companyCodeFeedback"
        required
        maxlength="12"
      ></b-form-input>
      <b-form-invalid-feedback id="companyCodeFeedback">
        사업자 등록번호가 올바르지 않습니다.
      </b-form-invalid-feedback>
    </b-form-group>
    <template slot="policies">
      <slot name="policies"></slot>
    </template>
  </sign-up-general-form>
</template>

<script>
import SignUpGeneralForm from './SignUpGeneralForm.vue';

export default {
  components: {
    SignUpGeneralForm,
  },
  props: {
    email: { type: String, required: true },
    contactRequest: { type: Boolean, default: false },
    contactVerified: { type: Boolean, default: false },
  },
  data() {
    return {
      company: {
        name: '',
        code: '',
      },
    };
  },
  methods: {
    onSubmit: function onSubmit(values) {
      this.$emit('submit', {
        ...values,
        company: {
          ...this.company,
        },
      });
    },
  },
};
</script>

<style scoped></style>
