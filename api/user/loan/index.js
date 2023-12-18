import { request, METHOD_POST } from '~/api';

export default {
  getList(pageNo) {
    return request({
      url: 'member/loan/list',
      method: METHOD_POST,
      params: {
        'page.pageNo': pageNo || 1,
        'page.pageSize': 8,
      },
    });
  },
  get(loanSeq) {
    return request({
      url: 'member/loan/detail',
      method: METHOD_POST,
      params: { loanSeq },
    });
  },
  plan(loanSeq, planType) {
    return request({
      url: 'member/loan/refund/plan',
      method: METHOD_POST,
      params: { loanSeq, planType },
    });
  },
};
