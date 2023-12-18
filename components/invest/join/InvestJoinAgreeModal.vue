<template>
  <modal
    @before-open="onBeforeOpen"
    :clickToClose="false"
    name="invest-join-agree"
    transition="pop-out"
    height="auto"
    adaptive
  >
    <div class="modal-content">
      <button @click="$modal.hide('invest-join-agree')" class="close">
        <i class="fa fa-close"></i>
      </button>
      <h3 class="title">
        투자 확인사항
        {{ $t('invest.join.warn-invest') }}
      </h3>
      <div v-html="html" class="policy"></div>
      <div class="info">
        <p class="warn">
          {{ name }}은(는) 위의 안내사항과 아래의 약관을 확인하였습니다.
          {{ $t('invest.join.user-checked-terms', { value: name }) }}
        </p>
        <ul>
          <li>
            <b-link
              :to="localePath({ name: 'policy', params: { id: 'proc' } })"
              router-tag="a"
              active-class=""
              target="_blank"
            >
              개인정보 취급방침 동의
              {{ $t('policy.names') }}
            </b-link>
          </li>
          <li>
            <b-link
              :to="localePath({ name: 'policy', params: { id: 'service' } })"
              router-tag="a"
              active-class=""
              target="_blank"
            >
              온라인 서비스 이용약관
              {{ $t('policy.names') }}
            </b-link>
          </li>
          <li>
            <b-link
              :to="localePath({ name: 'policy', params: { id: 'invest' } })"
              router-tag="a"
              active-class=""
              target="_blank"
            >
              투자자 이용약관 동의
              {{ $t('policy.names') }}
            </b-link>
          </li>
        </ul>
      </div>
      <b-form @submit.prevent="$emit('submit', isAgree)">
        <b-form-group>
          <b-input-group>
            <input
              v-model="text"
              :placeholder="$t('invest.join.input-agree')"
              class="form-control"
              type="text"
            />
            <b-input-group-append>
              <b-button :disabled="!isAgree" variant="primary" type="submit">
                {{ $t('button.confirm') }}
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-form>
    </div>
  </modal>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    name: { type: String, default: '' },
  },
  data() {
    return { text: '', html: '' };
  },
  computed: {
    isAgree: function isAgree() {
      return this.text === this.$t('invest.join.agree');
    },
  },
  mounted() {
    this.html = '<p>약관이 표기되는 부분</p>';
  },
  methods: {
    onBeforeOpen: function onBeforeOpen() {
      this.text = '';
    },
  },
};
</script>

<style scoped>
button.close {
  float: right;
}

button.close > i.fa {
  margin-right: 0;
}

h3.title {
  text-align: center;
}

h6 {
  text-align: center;
}

form fieldset {
  margin-top: 8px;
}

div.modal-content {
  padding: 16px;
  display: block;
}

p.warn {
  margin: 8px auto;
  font-size: 0.9rem;
}

div.info {
  padding: 8px 16px;
}

ul {
  padding-left: 24px;
  font-size: 0.8rem;
}

ul > li {
  margin-bottom: 8px;
}

ul > li > a {
  color: inherit;
  text-decoration: none;
}

ul > li > a:hover {
  text-decoration: underline;
}

div.policy {
  font-size: 0.9rem;
  line-height: 1.8;
  overflow-y: auto;
  max-height: 320px;
  padding: 16px;
  background-color: #efefef;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

div.policy::-webkit-scrollbar {
  width: 8px;
  background-color: transparent;
}

div.policy::-webkit-scrollbar-track {
  background-color: transparent;
}

div.policy::-webkit-scrollbar-thumb {
  background-color: #dddddd;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.02);
}
</style>
