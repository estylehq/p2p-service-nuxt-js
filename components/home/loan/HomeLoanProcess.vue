<template>
  <div class="container">
    <h3 class="header">
      대출 프로세스
    </h3>
    <p>대출이 필요하신가요?</p>
    <p>합리적인 조건을 찾아 진행해 드립니다.</p>
    <b-row class="justify-content-center">
      <b-col cols="12" lg="auto">
        <h5>대출 신청 및 심사</h5>
      </b-col>
      <b-col cols="12" lg="auto">
        <div class="arrow"></div>
      </b-col>
      <b-col cols="12" lg="auto">
        <h5>대출금 모집</h5>
      </b-col>
      <b-col cols="12" lg="auto">
        <div class="arrow"></div>
      </b-col>
      <b-col cols="12" lg="auto">
        <h5>대출 계약 및 대출 집행</h5>
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>
div.container {
  padding: 8px 8px 16px;
  min-height: 386px;
}

h3.header {
  color: #ffbf31;
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
}

h5 {
  padding: 16px;
}

div.arrow {
  width: 32px;
  height: 100%;
  background-image: url('~~/assets/css/home/intro/icon-loan-arrow.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

@media (max-width: 991px) {
  div.arrow {
    width: 100%;
    height: 48px;
    transform: rotate(90deg);
  }
}
</style>
