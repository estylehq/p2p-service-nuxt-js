<template>
  <div class="user-address">
    <div v-if="show" class="search-address">
      <vue-daum-postcode
        @complete="onCompleteSearch"
        style="height: 512px; overflow: auto;"
      ></vue-daum-postcode>
      <b-button @click="show = false" variant="danger">
        <i class="fa fa-close"></i>
        {{ $t('user.address.btn-close') }}
      </b-button>
    </div>
    <b-form-group :label="$t('user.address.address')" horizontal>
      <b-input-group>
        <b-form-input
          id="postcode"
          :value="postcode"
          required
          disabled
          type="number"
        ></b-form-input>
        <b-input-group-append>
          <b-button @click="show = true" class="search-postcode">
            {{ $t('user.address.search-postcode') }}
          </b-button>
        </b-input-group-append>
      </b-input-group>
    </b-form-group>
    <b-form-group horizontal class="addr-text">
      <b-form-input
        id="city-state"
        :value="cityState"
        type="text"
        required
        disabled
      ></b-form-input>
      <input
        id="detail"
        v-model="detail"
        :class="`form-control ${hasAddress ? 'is-valid' : ''}`"
        type="text"
        required
      />
    </b-form-group>
  </div>
</template>

<script>
export default {
  props: {
    pPostcode: { type: String, default: '' },
    pCityState: { type: String, default: '' },
    pDetail: { type: String, default: '' },
    hasAddress: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show: false,
      postcode: this.pPostcode,
      cityState: this.pCityState,
      detail: this.pDetail,
    };
  },
  watch: {
    detail: function onWatch(detail) {
      this.$emit('input', {
        postcode: this.postcode,
        cityState: this.cityState,
        detail,
      });
    },
  },
  methods: {
    onCompleteSearch: function onCompleteSearch({ zonecode, roadAddress }) {
      this.show = false;
      this.postcode = zonecode;
      this.cityState = roadAddress;
      this.$emit('input', {
        postcode: this.postcode,
        cityState: this.cityState,
        detail: this.detail,
      });
    },
  },
};
</script>

<style scoped>
div.search-address {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
}

div.search-address > button {
  margin-top: 8px;
}

.addr-text input:first-child {
  margin-bottom: 8px;
}

div.user-address > fieldset:first-child {
  margin-bottom: 0.5rem;
}

input#city-state {
  margin-bottom: 8px;
}
</style>
