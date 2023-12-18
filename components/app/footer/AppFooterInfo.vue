<template>
  <div class="container font-weight-bold">
    <p class="biz biz-info">
      P2P 서비스 (주) | 대표 누구 <br />
      사업자 번호 000-00-00000 | 통신판매업 제2019-서울OO-00000호 | 서울특별시
      어디로 000, 0층
    </p>
    <p class="biz biz-conents">
      P2P 서비스는 투자원금과 수익을 보장하지 않으며, 투자손실에 대한&nbsp;
      책임은 모두 투자자에게 있습니다.
    </p>
    <template v-if="showLoanInfo">
      <p class="biz biz-info">
        P2P 서비스 대부 (주) | 대표 누구 | P2P연계대부 | 201O-금감원-0000<br />
        사업자 번호 000-00-00000 | 서울특별시 어디로 000, 0층 0호 |&nbsp;
        등록기관 금융감독원(1332)<br />
        <span>
          <a
            href="http://fines.fss.or.kr/fines/plis/moneyLenderSearch/MoneyLenderSearch.getMoneyLenderList.do"
            target="_blank"
            >등록대부(중개)업체 통합조회서비스</a
          >
        </span>
      </p>
      <p class="biz biz-conents">
        대출금리 연 21.9% 이내 (연체금리 최고 연 24% 이내)대출 실행 시&nbsp;
        취급 수수료와 신용 조회비를 제외한 추가 비용은 없으며, <br />
        중도상환은 전액상환만 가능하며 계약조건에 따라 중도상환금액의 1.5%&nbsp;
        이내의 수수료가 부과되거나 면제될 수 있습니다.<br />
        과도한 빚은 당신에게 큰 불행을 안겨줄 수 있습니다. 대출 시 귀하의&nbsp;
        신용등급이 하락할 수 있습니다. 중개수수료를 요구하거나 받는 행위는&nbsp;
        불법입니다.
      </p>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    showLoanInfo: { type: Boolean },
  },
};
</script>

<style scoped>
div.container {
  padding: 16px;
}

.biz {
  font-size: 15px;
  color: #3f5567;
}

.biz-info {
  opacity: 0.6;
}

.biz-conents {
  line-height: 1.8;
}

p {
  margin: 8px auto;
  line-height: 1.6;
}

p.bold {
  margin: 0;
  font-weight: bold;
}

div.divider {
  margin: 0;
}

@media (max-width: 768px) {
  div.container {
    padding: 16px 24px;
  }

  .biz {
    font-size: 0.95rem;
  }
}
</style>
