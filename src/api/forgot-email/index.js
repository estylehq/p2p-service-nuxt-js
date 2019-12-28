import { METHOD_POST, request } from '~/api';

export default {
  findEmail(memName, tel) {
    return request({
      url: 'member/find/id',
      method: METHOD_POST,
      params: { memName, tel },
    });
  },
};
