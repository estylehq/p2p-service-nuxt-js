<template>
  <div>
    <b-form-group label="이름" label-for="name" horizontal>
      <input
        :class="`form-control ${hasName ? 'is-valid' : ''}`"
        autocomplete="off"
        id="name"
        type="text"
        placeholder=""
        required
        :value="name"
        @input="$emit('input', { id: 'name', value: $event.target.value })"
      >
    </b-form-group>
    <b-form-group label="주민등록번호" horizontal>
      <div class="userids">
        <input
          :class="`form-control ${isValidUserId ? 'is-valid' : ''}`"
          autocomplete="off"
          id="birth"
          type="tel"
          placeholder="생년월일 6자리"
          onkeyup="this.value=this.value.replace(/[^0-9-]/g,'');"
          maxlength="6"
          required
          @input="$emit('input', { id: 'userId', value: { birth: $event.target.value } })"
        >
        <input
          :class="`form-control ${isValidUserId ? 'is-valid' : ''}`"
          autocomplete="off"
          id="code"
          type="password"
          placeholder="뒤의 7자리"
          onkeyup="this.value=this.value.replace(/[^0-9-]/g,'');"
          maxlength="7"
          required
          @input="$emit('input', { id: 'userId', value: { code: $event.target.value }})"
        >
      </div>
      <p class="warn">성함과 주민등록번호, 주소는 투자수익에 대한 원천징수 신고를 위해 수집합니다.</p>
    </b-form-group>
    <b-form-group label="연락처" horizontal>
      <b-input-group>
        <input
          :class="`form-control ${isValidContact ? 'is-valid' : ''}`"
          autocomplete="off"
          id="contact"
          type="tel"
          placeholder="'-' 없이 숫자만 입력해 주세요."
          onkeyup="this.value=this.value.replace(/[^0-9]/g,'');"
          maxlength="12"
          required
          aria-describedby="contactFeedback"
          :disabled="phoneVerify"
          :value="contact"
          @input="$emit('input', { id: 'contact', value: $event.target.value})"
        >
        <b-input-group-append>
          <b-button
            :disabled="isValidContact && phoneVerify"
            @click="$emit('reqVerify')"
          >인증번호 요청</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-form-group>
    <b-form-group horizontal>
      <b-input-group prepend="인증번호">
        <input
          class="form-control"
          autocomplete="off"
          id="verified"
          type="number"
          placeholder="0000"
          onkeyup="this.value=this.value.replace(/[^0-9-]/g,'');"
          maxlength="7"
          required
          v-model="verify"
          :disabled="reqPhoneVerify ? phoneVerify : true"
        >
        <b-input-group-append>
          <b-button
            :disabled="reqPhoneVerify ? phoneVerify : true"
            @click="$emit('verify', verify)"
          >인증</b-button>
        </b-input-group-append>
      </b-input-group>
      <p class="warn">인증번호 입력 후, '인증'버튼을 눌러 주세요.</p>
    </b-form-group>
  </div>
</template>

<script>
import convertMixin from '~/mixin/valid-mixin';

export default {
  props: {
    name: {
      type: String,
    },
    contact: {
      type: String,
    },
    hasName: {
      type: Boolean,
      required: true,
    },
    reqPhoneVerify: {
      type: Boolean,
      default: false,
    },
    phoneVerify: {
      type: Boolean,
      default: false,
    },
    isValidContact: {
      type: Boolean,
      required: true,
    },
    isValidUserId: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      verify: '',
    };
  },
  mixins: [convertMixin],
};
</script>

<style scoped>
div.userids {
  width: 100%;
  display: inline-flex;
}

div.userids > input:first-child {
  margin-right: 8px;
}

div.userids > input:last-child {
  margin-left: 8px;
}

p.warn {
  font-size: 0.8rem;
  padding: 8px;
  margin-bottom: 0;
}
</style>
