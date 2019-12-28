function parse(object) {
  return {
    id: object.fundSeq,
    name: object.fundName,
    type: {
      text: object.fundTypeName,
      value: object.fundType,
    },
    rate: object.intRate,
    start: new Date(object.fundSdtm),
    end: new Date(object.fundEdtm),
    state: {
      text: object.fundStatName,
      value: object.fundStat,
    },
    current: object.curFundMny || 0,
    target: object.fundMny,
    refund: {
      text: object.refundTypeName,
      value: object.refundType,
    },
    months: object.refundMonth,
    joined: object.fundMemCnt || 0,
    funded: object.myInvStat === '01' || false,
    invest: object.invMny || 0,
  };
}

export default {
  parse,
};
