export default {
  methods: {
    copy: function copy(fieldId, callback) {
      const field = document.querySelector(`#${fieldId}`);
      field.setAttribute('type', 'text');
      field.select();
      if (callback) {
        callback(document.execCommand('copy'));
      } else {
        document.execCommand('copy');
      }
      field.setAttribute('type', 'hidden');
      window.getSelection().removeAllRanges();
    },
  },
};
