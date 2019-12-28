<template>
  <div class="container font-weight-bold">
    <p class="biz biz-info">
      P2P 서비스 (주) | 대표 누구 <br />
      사업자 번호 000-00-00000 | 통신판매업 제2010-서울OO-00000호 | 서울특별시
      어디로 000, 0층
    </p>
    <p class="biz biz-conents">
      P2P 서비스는 투자원금과 수익을 보장하지 않으며, 투자손실에 대한&nbsp;
      책임은 모두 투자자에게 있습니다.
    </p>
  </div>
</template>

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
