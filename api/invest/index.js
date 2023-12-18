import { METHOD_POST, request } from '~/api';

export default {
  getList(page) {
    return request({
      url: 'fund/list',
      method: METHOD_POST,
      params: {
        'page.pageNo': page,
        'page.pageSize': 10,
      },
    });
  },
  get(fundSeq) {
    return request({
      url: 'fund/detail',
      method: METHOD_POST,
      params: { fundSeq },
    });
  },
  preview(fundSeq, invMny) {
    return request({
      url: 'fund/refund/preview',
      method: METHOD_POST,
      params: { fundSeq, invMny },
    });
  },
  join(fundSeq, invMny) {
    return request({
      url: 'fund/join',
      method: METHOD_POST,
      params: { fundSeq, invMny },
    });
  },
  cancel(fundSeq) {
    return request({
      url: 'fund/cancel',
      method: METHOD_POST,
      params: { fundSeq },
    });
  },
  getPdf(fundSeq) {
    return request({
      url: 'member/fund/pdf',
      method: METHOD_POST,
      params: { fundSeq },
      responseType: 'blob',
    });
  },
};
