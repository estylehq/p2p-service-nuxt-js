import { METHOD_POST, request } from '~/api';

export default {
  request(memId, memName, tel) {
    return request({
      url: 'member/find/password',
      method: METHOD_POST,
      params: { memId, memName, tel },
    });
  },
  reset(token, memPwd) {
    return request({
      url: 'member/password-renew',
      method: METHOD_POST,
      params: { memPwd },
      headers: { token },
    });
  },
};
