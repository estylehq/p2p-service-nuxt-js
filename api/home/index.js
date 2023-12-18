import { METHOD_GET, request } from '~/api';

export default {
  disclosure() {
    return request({
      url: 'loan/disclosure',
      method: METHOD_GET,
    });
  },
};
