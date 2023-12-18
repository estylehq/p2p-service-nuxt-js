import { mapState, mapActions } from 'vuex';

export default {
  middleware: ['user/check-password'],
  layout: 'user',
  computed: {
    ...mapState('user/fetch', { isFetched: state => state.success }),
  },
  methods: {
    ...mapActions('user/fetch', ['fetch']),
  },
  async beforeMount() {
    if (this.isFetched) {
      return;
    }
    await this.fetch();
  },
};
