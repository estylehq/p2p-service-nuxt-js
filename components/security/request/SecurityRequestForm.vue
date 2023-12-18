<template>
  <b-form @submit.prevent="$emit('submit', { company, loan, term, other })">
    <b-form-group
      :label="$t('security.request.company-name')"
      label-for="company-name"
    >
      <input
        id="company-name"
        v-model="company.name"
        :class="`form-control ${isFieldValid(isValidCompanyName)}`"
        type="text"
        placeholder="회사명"
        aria-describedby="companyNameFeedback"
        required
      />
      <b-form-invalid-feedback id="companyNameFeedback">
        입력한 내용이 너무 짧습니다.
      </b-form-invalid-feedback>
    </b-form-group>
    <b-form-group
      :label="$t('security.request.company-code')"
      label-for="company-code"
    >
      <b-form-input
        id="company-code"
        v-model="company.code"
        :state="isValidCompanyCode"
        type="text"
        placeholder="123-12-12345"
        onkeyup="this.value=this.value.replace(/[^0-9-]/g,'');"
        aria-describedby="companyCodeFeedback"
        required
        maxlength="12"
      ></b-form-input>
      <b-form-invalid-feedback id="companyCodeFeedback">
        {{ $t('security.request.invalid-company-code') }}
      </b-form-invalid-feedback>
    </b-form-group>
    <b-form-group :label="$t('security.request.loan-amount')" label-for="loan">
      <b-input-group :append="$t('security.request.currency-text')">
        <b-form-input
          id="loan"
          v-model="loan"
          :state="isValidLoan"
          type="number"
          placeholder="금액"
          aria-describedby="loanFeedback"
          required
          max="99999999"
          min="10"
        ></b-form-input>
      </b-input-group>
      <p
        v-if="isValidLoan === null ? false : !isValidLoan"
        class="custom-feedback"
      >
        {{ $t('security.request.enter-amount-correctly') }}
      </p>
    </b-form-group>
    <b-form-group :label="$t('security.request.loan-term')" label-for="term">
      <b-input-group :append="$t('security.request.months-text')">
        <b-form-input
          id="term"
          v-model="term"
          :state="isValidTerm"
          type="number"
          placeholder="ex) 12"
          aria-describedby="termFeedback"
          required
          max="12"
          min="1"
        ></b-form-input>
      </b-input-group>
      <p
        v-if="isValidTerm === null ? false : !isValidTerm"
        class="custom-feedback"
      >
        {{ $t('security.request.enter-months-correctly') }}
      </p>
    </b-form-group>
    <b-form-group :label="$t('security.request.loan-other')" label-for="other">
      <b-form-textarea id="other" v-model="other" :rows="6"></b-form-textarea>
    </b-form-group>
    <div class="text-center">
      <b-button
        :disabled="!enableButton"
        type="submit"
        size="lg"
        variant="primary"
      >
        {{ $t('security.request.button-send-request') }}
      </b-button>
    </div>
  </b-form>
</template>

<script>
import dialogMixin from '~/mixin/dialog';

function validCompanyCode(code) {
  const bizCode = code.match(/\d{1}/g);

  if (bizCode.length !== 10) {
    return false;
  }

  let sum = 0;
  const key = [1, 3, 7, 1, 3, 7, 1, 3, 5];

  for (let i = 0; i < 9; i += 1) {
    sum += key[i] * Number(bizCode[i]);
  }

  let calc = key[8] * Number(bizCode[8]);
  calc /= 10;
  calc = Math.floor(calc);
  calc = sum + calc;
  calc %= 10;
  calc = 10 - calc;

  return calc === Number(bizCode[9]);
}

export default {
  mixins: [dialogMixin],
  data() {
    return {
      company: {
        name: '',
        code: '',
      },
      loan: 0,
      term: 0,
      other: '',
    };
  },
  computed: {
    isValidCompanyName: function isValidCompanyName() {
      const { name } = this.company;

      if (name.length <= 0) {
        return null;
      }
      return name.length >= 2;
    },
    isValidCompanyCode: function isValidCompanyCode() {
      const { code } = this.company;

      if (code.length <= 0) {
        return null;
      }
      const codeRegEx = /[0-9]{3}-[0-9]{2}-[0-9]{5}/;
      return codeRegEx.test(code) && validCompanyCode(code);
    },
    isValidTerm: function isValidTerm() {
      if (this.term === null || this.term <= 0) {
        return null;
      }
      if (this.term > 12) {
        return false;
      }
      return true;
    },
    isValidLoan: function isValidLoan() {
      if (this.loan === null) {
        return null;
      }

      const { length } = this.loan;
      if (length <= 0 || this.loan === 0) {
        return null;
      }
      if (length < 3 || length > 8) {
        return false;
      }
      return true;
    },
    enableButton: function enableButton() {
      return (
        this.isValidLoan &&
        this.isValidTerm &&
        this.isValidCompanyName &&
        this.isValidCompanyCode
      );
    },
  },
  methods: {
    isFieldValid: function isFieldValid(value) {
      if (value === null) {
        return '';
      }
      return value ? 'is-valid' : 'is-invalid';
    },
  },
};
</script>

<style scoped>
p.custom-feedback {
  font-size: 0.8rem;
  color: #dc3545;
  margin-top: 4px;
  margin-bottom: 4px;
}
</style>
