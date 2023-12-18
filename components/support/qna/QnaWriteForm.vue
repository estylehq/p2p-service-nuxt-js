<template>
  <b-form @submit.prevent="$emit('submit', { title, content })">
    <b-form-group :label="$t('support.qna.write-title')" label-for="title">
      <input
        id="title"
        v-model="title"
        :class="`form-control ${validCss(isValidTitle)}`"
        aria-describedby="titleValidate"
      />
      <b-form-invalid-feedback id="titleValidate">
        {{ $t('support.qna.message-enter-5-or-more') }}
      </b-form-invalid-feedback>
    </b-form-group>
    <b-form-group :label="$t('support.qna.write-detail')" label-for="contents">
      <textarea
        id="contents"
        v-model="content"
        :class="`form-control ${validCss(isValidContent)}`"
        :rows="6"
        :max-rows="8"
        aria-describedby="contentsValidate"
      >
      </textarea>
      <b-form-invalid-feedback id="contentsValidate">
        {{ $t('support.qna.message-enter-10-or-more') }}
      </b-form-invalid-feedback>
    </b-form-group>
    <div class="text-center">
      <b-button @click="$emit('cancel')" variant="secondary">
        <i class="fa fa-close"></i>{{ $t('button.cancel') }}
      </b-button>
      <b-button :disabled="!isValid" variant="primary" type="submit">
        <i class="fa fa-pencil"></i>{{ $t('support.qna.button-write') }}
      </b-button>
    </div>
  </b-form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      content: '',
    };
  },
  computed: {
    isValidTitle: function isValidTitle() {
      if (this.title.length <= 0) {
        return null;
      }
      return this.title.length > 4;
    },
    isValidContent: function isValidContent() {
      if (this.content.length <= 0) {
        return null;
      }
      return this.content.length > 9;
    },
    isValid: function isValid() {
      if (this.isValidTitle === null || this.isValidContent === null) {
        return false;
      }
      return this.isValidContent && this.isValidContent;
    },
  },
  methods: {
    validCss: function validCss(valid) {
      if (valid === null) {
        return '';
      }
      return valid ? 'is-valid' : 'is-invalid';
    },
  },
};
</script>

<style scoped>
button {
  margin: 8px 16px;
  padding: 8px 16px;
}

button > i {
  margin-right: 8px;
}
</style>
