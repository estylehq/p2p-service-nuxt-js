<template>
  <div class="container">
    <h3 class="header">
      투자 프로세스
    </h3>
    <p>P2P 서비스가 까다롭게 심사하고 선택한 상품들로만 소개해 드립니다.</p>
    <b-row class="justify-content-center">
      <b-col cols="12" lg="auto">
        <h5>예치금 충전</h5>
      </b-col>
      <b-col cols="12" lg="auto">
        <div class="arrow"></div>
      </b-col>
      <b-col cols="12" lg="auto">
        <h5>상품 선택</h5>
      </b-col>
      <b-col cols="12" lg="auto">
        <div class="arrow"></div>
      </b-col>
      <b-col cols="12" lg="auto">
        <h5>투자</h5>
      </b-col>
      <b-col cols="12" lg="auto">
        <div class="arrow"></div>
      </b-col>
      <b-col cols="12" lg="auto">
        <h5>원리금 수령</h5>
      </b-col>
    </b-row>
  </div>
</template>

<style lang="scss" scoped>
div.container {
  padding: 8px 8px 16px;
  min-height: 386px;

  h3.header {
    color: #1f93ff;
    margin-bottom: 32px;
  }

  p {
    color: #606060;
    font-size: 0.9rem;
    text-align: center;
  }

  div.row {
    margin-top: 72px;
    margin-bottom: 56px;
    text-align: center;

    h5 {
      padding: 16px;
    }

    div.arrow {
      width: 32px;
      height: 100%;
      background-image: url('~~/assets/css/home/intro/icon-invest-arrow.svg');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }
  }
}

@media (max-width: 991px) {
  div.arrow {
    width: 100%;
    height: 48px;
    transform: rotate(90deg);
  }
}
</style>
