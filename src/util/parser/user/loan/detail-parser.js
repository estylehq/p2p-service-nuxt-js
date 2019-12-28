import moment from 'moment';
import listParser from './list-parser';

function parse(object) {
  let result = listParser.parse(object);
  result = {
    ...result,
    loan: {
      ...result.loan,
      refund: {
        text: object.refundTypeName,
        value: object.refundType,
      },
      reason: {
        text: object.loanRsnName,
        value: object.loanRsn,
        detail:
          object.loanRsnDtl && object.loanRsnDtl.length > 0
            ? object.loanRsnDtl
            : null,
      },
      approved: {
        money: object.loanApprMny,
        month: object.loanApprMonth,
        rate: object.loanApprRate,
        activated:
          object.loanApprDtm && object.loanApprDtm.length > 0
            ? moment(object.loanApprDtm, 'YYYYMMDDHHmmss').toDate()
            : null,
      },
    },
    offerer: {
      ...result.offerer,
      address: {
        postcode: object.homeZipcode,
        cityState: object.homeAddr1,
        detail: object.homeAddr2,
      },
    },
    company: {
      ...result.company,
      address: {
        postcode: object.compZipcode,
        cityState: object.compAddr1,
        detail: object.compAddr2,
      },
    },
    other: object.etcInfo,
    created: new Date(object.regDtm),
    updated: new Date(object.udtDtm),
  };
  return result;
}

export default {
  parse,
};
