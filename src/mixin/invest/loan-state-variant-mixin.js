export default {
  methods: {
    convertState: function convertState(state) {
      switch (state) {
        case '10': // 심사 중
        case '20': // 펀딩 준비 중
        case '40': // 상환 중
        default:
          return 'warning';
        case '01': // 신청 중
        case '21': // 펀딩 중
          return 'primary';
        case '12': // 신청 취소
        case '22': // 펀딩 마감
          return 'secondary';
        case '11': // 대출 거절
        case '23': // 펀딩 실패
        case '41': // 연체 중
          return 'danger';
        case '19': // 승인 완료
        case '29': // 펀딩 완료
        case '30': // 대출 계약 완료
        case '50': // 상환 완료
          return 'light';
        case '-1':
          return 'info';
      }
    },
  },
};
