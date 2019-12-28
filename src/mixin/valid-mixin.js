export default {
  methods: {
    convertCssValid: function convertCssValid(valid) {
      if (valid === null) {
        return '';
      }
      return valid ? 'is-valid' : 'is-invalid';
    },
  },
};
