import { METHOD_POST, request } from '~/api';

export default {
  request(tel) {
    return request({
      url: 'member/tel/req-verify',
      method: METHOD_POST,
      params: { tel },
    });
  },
  verify(tel, code) {
    return request({
      url: 'member/tel/verify',
      method: METHOD_POST,
      params: { tel, code },
    });
  },
};
