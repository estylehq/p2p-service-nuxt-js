function parse(object) {
  let data = {
    email: object.memId,
    name: object.memName,
    contact: object.tel,
    gender: object.sex === '01' ? 'male' : 'female',
    created: new Date(object.joinDtm),
    updated: new Date(object.udtDtm),
    type: object.memType || '00',
    birth: object.birthday,
    subscribes: {
      email: object.emailAgree === '01' || false,
      sms: object.smsAgree === '01' || false,
    },
    lender: {
      text: object.lenderCondName || null,
      value: object.lenderCond || null,
    },
    investor: {
      type: {
        text: object.investTypeName || null,
        value: object.investType || null,
      },
    },
  };

  if (object.compName) {
    data = {
      ...data,
      company: {
        name: object.compName || null,
        code: object.compBizNo || null,
      },
    };
  }

  if (object.investAccntNo) {
    data = {
      ...data,
      investor: {
        ...data.investor,
        account: {
          name: object.investBankName || null,
          code: object.investBankCd || null,
          id: object.investAccntNo || null,
          owner: object.investAccntName || null,
        },
      },
    };
  }

  if (object.refundAccntNo) {
    data = {
      ...data,
      refund: {
        account: {
          name: object.refundBankName || null,
          code: object.refundBankCd || null,
          id: object.refundAccntNo || null,
          owner: object.refundAccntName || null,
        },
      },
    };
  }

  if (object.zipcode) {
    data = {
      ...data,
      address: {
        postcode: object.zipcode || null,
        cityState: object.addr1 || null,
        detail: object.addr2 || null,
      },
    };
  }
  return data;
}

export default {
  parse,
};
