import moment from 'moment';

function parse(object) {
  return {
    sequence: object.planNum,
    principal: parseInt(object.principal, 10),
    interest: parseInt(object.interest, 10),
    fee: parseInt(object.fee, 10),
    tax: parseInt(object.tax, 10),
    refund: parseInt(object.refundMny, 10),
    date: object.issueDate
      ? moment(object.issueDate, 'YYYYMMDD').toDate()
      : null,
    days: object.useDay,
  };
}

export default {
  parse,
};
