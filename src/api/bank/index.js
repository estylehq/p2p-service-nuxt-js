import { request, METHOD_GET } from '~/api';

export default {
  getList(type) {
    return request({
      url: 'member/bank/list',
      method: METHOD_GET,
      params: {
        type: type || 'RBANK',
      },
    });
  },
};
