import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('progress', {
      isProgress: 'visible',
    }),
  },
  methods: {
    ...mapActions('progress', {
      showProgress: 'show',
      hideProgress: 'hide',
    }),
  },
};
