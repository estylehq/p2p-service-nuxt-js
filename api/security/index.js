import { METHOD_POST, request as requestApi } from '~/api';

export default {
  request(compName, compBizNo, loanReqMny, loanReqMonth, etcInfo) {
    return requestApi({
      url: 'loan/req',
      method: METHOD_POST,
      params: {
        loanType: '01',
        compName,
        compBizNo,
        loanReqMny,
        loanReqMonth,
        etcInfo,
      },
    });
  },
};
