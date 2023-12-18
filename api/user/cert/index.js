import { METHOD_POST, request } from '~/api';

export default {
  certificate({
    memName,
    tel,
    juminNum,
    zipcode,
    addr1,
    addr2,
    refundBankCd,
    refundAccntNo,
    investBankCd,
  }) {
    return request({
      url: 'member/invest/cert',
      method: METHOD_POST,
      params: {
        memName,
        tel,
        juminNum,
        zipcode,
        addr1,
        addr2,
        refundBankCd,
        refundAccntNo,
        investBankCd,
      },
    });
  },
};
