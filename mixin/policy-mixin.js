import axios from 'axios';

export default {
  methods: {
    load: async function load(url) {
      const policy = await axios({
        url,
        baseURL: '',
      });
      return policy.data;
    },
  },
};
