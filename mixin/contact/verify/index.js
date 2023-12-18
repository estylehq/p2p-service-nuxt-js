import { mapState, mapActions } from 'vuex';
import dialogMixin from '~/mixin/dialog';

export default {
  computed: {
    ...mapState('contact/request', {
      isSuccessContactRequest: 'success',
      messageContactRequest: 'message',
    }),
    ...mapState('contact/verify', {
      isSuccessContactVerify: 'success',
      messageContactVerify: 'message',
    }),
  },
  methods: {
    ...mapActions('contact/request', {
      contactRequest: 'request',
      clearContactRequest: 'clear',
    }),
    ...mapActions('contact/verify', {
      contactVerify: 'verify',
      clearContactVerify: 'clear',
    }),
  },
  watch: {
    isSuccessContactRequest: function onResponse(success) {
      if (!success) {
        return;
      }
      this.showDialog(
        this.$t('contact.sent-verify-code'),
        this.$t('contact.enter-verify-code')
      );
    },
    messageContactRequest: function onResponse(message) {
      if (message === null) {
        return;
      }
      this.showDialog(this.$t('contact.cannot-requested-code'), message);
    },
    isSuccessContactVerify: function onResponse(success) {
      if (!success) {
        return;
      }
      this.showDialog(
        this.$t('contact.phone-verified'),
        this.$t('contact.confirmed-your-phone-number')
      );
    },
    messageContactVerify: function onResponse(message) {
      if (message === null) {
        return;
      }
      this.showDialog(this.$t('contact.verified-failed'), message);
    },
  },
  beforeDestroy() {
    this.clearContactRequest();
    this.clearContactVerify();
  },
  mixins: [dialogMixin],
};
