import { METHOD_GET, METHOD_POST, request } from '~/api';

export default {
  deposit() {
    return request({
      url: 'member/deposit/deposit',
      method: METHOD_GET,
    });
  },
  withdraw(amount) {
    return request({
      url: 'member/deposit/withdraw',
      method: METHOD_POST,
      params: {
        amount,
      },
    });
  },
  histories(page) {
    return request({
      url: 'member/deposit/list',
      method: METHOD_POST,
      params: {
        dpType: 'D',
        'page.pageNo': page,
        'page.pageSize': 15,
      },
    });
  },
};
