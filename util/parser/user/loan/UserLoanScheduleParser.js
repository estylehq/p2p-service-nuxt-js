import moment from 'moment';

function parse(object) {
  return {
    sequence: parseInt(object.planNum, 10),
    date: moment(object.issueDate, 'YYYYMMDD').toDate(),
    principal: parseInt(object.principal, 10),
    interest: parseInt(object.interest, 10),
    lateFee: parseInt(object.lateFee, 10),
    refund: parseInt(object.refundMny, 10),
  };
}

export default {
  parse,
};
