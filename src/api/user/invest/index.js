import { METHOD_GET, METHOD_POST, request } from '~/api';

export default {
  getList(pageNumber) {
    return request({
      url: 'member/fund/list',
      method: METHOD_POST,
      params: { 'page.pageNo': pageNumber, 'page.pageSize': 10 },
    });
  },
  plan(fundSeq, planType) {
    return request({
      url: 'member/fund/refund/plan',
      method: METHOD_POST,
      params: { fundSeq, planType },
    });
  },
  summary() {
    return request({
      url: 'member/fund/summary',
      method: METHOD_GET,
    });
  },
};
