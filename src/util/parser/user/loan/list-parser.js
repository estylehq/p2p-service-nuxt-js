function parse(object) {
  return {
    id: object.loanSeq,
    status: {
      text: object.loanStatName,
      value: object.loanStat,
    },
    loan: {
      type: {
        text: object.loanTypeName,
        value: object.loanType,
      },
      required: {
        money: object.loanReqMny,
        month: object.loanReqMonth,
      },
    },
    company: {
      name: object.compName,
      code: object.compBizNo,
    },
    created: new Date(object.regDtm),
    updated: new Date(object.udtDtm),
  };
}

export default {
  parse,
};
