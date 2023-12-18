export default {
  methods: {
    showDialog: function showDialog(title, text, ...buttons) {
      this.$modal.show('dialog', {
        title,
        text,
        buttons:
          buttons.length > 0
            ? [...buttons]
            : [{ title: this.$t('dialog.button-close') }],
      });
    },
    closeDialog: function closeDialog() {
      this.$modal.hide('dialog');
    },
  },
};
