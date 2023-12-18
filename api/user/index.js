import { METHOD_GET, METHOD_POST, request } from '~/api';

export default {
  signIn(memId, memPwd) {
    return request({
      url: 'member/login',
      method: METHOD_POST,
      params: { memId, memPwd },
    });
  },
  checkPassword(memPwd) {
    return request({
      url: 'member/login2',
      method: METHOD_POST,
      params: { memPwd },
    });
  },
  updatePassword(memPwd, newPwd) {
    return request({
      url: 'member/password-update',
      method: METHOD_POST,
      params: { memPwd, newPwd },
    });
  },
  signOut(ssn) {
    return request({ url: 'member/logout', method: METHOD_GET }, ssn);
  },
  session(ssn) {
    return request({ url: 'member/session', method: METHOD_GET }, ssn);
  },
  emailValidate(memId) {
    return request({
      url: 'member/check-email',
      method: METHOD_POST,
      params: { memId },
    });
  },
  signUp({
    memType,
    memId,
    memPwd,
    memName,
    tel,
    emailAgree,
    smsAgree,
    compName,
    compBizNo,
  }) {
    return request({
      url: 'member/join',
      method: METHOD_POST,
      params: {
        memType,
        memId,
        memPwd,
        memName,
        tel,
        emailAgree,
        smsAgree,
        compName,
        compBizNo,
      },
    });
  },
  agree(termsType, agreeCond) {
    return request({
      url: 'member/terms/agree',
      method: METHOD_POST,
      params: {
        termsType,
        agreeCond,
      },
    });
  },
  update(params) {
    return request({
      url: 'member/update',
      method: METHOD_POST,
      params,
    });
  },
  fetch() {
    return request({
      url: 'member/detail',
      method: METHOD_GET,
    });
  },
  updateBank(refundBankCd, refundAccntNo, refundAccntName) {
    return request({
      url: 'member/bank/update',
      method: METHOD_POST,
      params: {
        refundBankCd,
        refundAccntNo,
        refundAccntName,
      },
    });
  },
  dashboard() {
    return request({
      url: 'member/dashboard',
      method: METHOD_GET,
    });
  },
};
