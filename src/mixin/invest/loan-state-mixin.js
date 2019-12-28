const INT_LOAN_STATE_SCREENING = 10; // 심사 중
const INT_LOAN_STATE_READY = 20; // 펀딩 준비 중
const INT_LOAN_STATE_FUNDING = 21; // 펀딩 중
const INT_LOAN_STATE_CLOSED = 22; // 펀딩 마감
const INT_LOAN_STATE_FAILED = 23; // 펀딩 실패
const INT_LOAN_STATE_FUNDING_COMPLETE = 29; // 펀딩 완료
const INT_LOAN_STATE_CONTRACTED = 30; // 대출 계약 완료
const INT_LOAN_STATE_ACTIVATED = 39; // 대출 실행
const INT_LOAN_STATE_COMPLETED = 50; // 상환 완료

export default {
  data() {
    return {
      INT_LOAN_STATE_SCREENING,
      INT_LOAN_STATE_READY,
      INT_LOAN_STATE_FUNDING,
      INT_LOAN_STATE_CLOSED,
      INT_LOAN_STATE_FAILED,
      INT_LOAN_STATE_FUNDING_COMPLETE,
      INT_LOAN_STATE_CONTRACTED,
      INT_LOAN_STATE_ACTIVATED,
      INT_LOAN_STATE_COMPLETED,
    };
  },
  methods: {
    isLoanScreening: function isLoanScreening(value) {
      return value === INT_LOAN_STATE_SCREENING;
    },
    isLoanReady: function isLoanReady(value) {
      return value === INT_LOAN_STATE_READY;
    },
    isLoanFunding: function isLoanFunding(value) {
      return value === INT_LOAN_STATE_FUNDING;
    },
    isLoanClosed: function isLoanClosed(value) {
      return value === INT_LOAN_STATE_CLOSED;
    },
    isLoanFailed: function isLoanFailed(value) {
      return value === INT_LOAN_STATE_FAILED;
    },
    isLoanFundingCompleted: function isLoanFundingCompleted(value) {
      return value >= INT_LOAN_STATE_FUNDING_COMPLETE;
    },
    isLoanContracted: function isLoanContracted(value) {
      return value === INT_LOAN_STATE_CONTRACTED;
    },
    isLoanActivated: function isLoanActivated(value) {
      return value >= INT_LOAN_STATE_ACTIVATED;
    },
    isLoanCompleted: function isLoanCompleted(value) {
      return value === INT_LOAN_STATE_COMPLETED;
    },
  },
};
