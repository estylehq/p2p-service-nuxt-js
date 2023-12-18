<template>
  <div class="bg">
    <div class="container">
      <b-row>
        <b-col cols="12" lg="6">
          <img src="~/assets/css/home/intro/icon-loan-01.svg" />
          <p class="header">장점 1</p>
          <div class="divider"></div>
          <p class="desc">
            서비스의 장점 1.
          </p>
        </b-col>
        <b-col cols="12" lg="6">
          <img src="~/assets/css/home/intro/icon-loan-02.svg" />
          <p class="header">장점 2</p>
          <div class="divider"></div>
          <p class="desc">
            서비스의 장점 2.
          </p>
        </b-col>
      </b-row>
      <div class="buttons">
        <div class="spacer"></div>
        <button @click="$router.push({ name: 'security' })" class="btn btn-lg">
          대출하기
        </button>
        <div class="spacer"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
div.bg {
  background-color: #fcfaf5;
}

div.container {
  padding: 56px 16px;
  min-height: 386px;
}

div.row {
  margin-bottom: 32px;
}

div.row > div {
  text-align: center;
}

img {
  width: 40px;
  height: 40px;
  margin-bottom: 16px;
}

p {
  text-align: center;
  font-size: 0.9rem;
  line-height: 2;
}

p.header {
  color: rgb(76, 76, 76);
  font-size: 1.2rem;
  font-weight: bold;
}

p.desc {
  margin-bottom: 24px;
}

p.question {
  color: #e09b22;
  font-size: 0.8rem;
  font-weight: bold;
}

div.divider {
  width: 60%;
  margin: 16px auto;
  border-bottom: 2px solid #ffd05a;
}

div.buttons button {
  background-color: #ffbf31;
  color: #ffffff;
  min-width: 180px;
}

@media (max-width: 991px) {
  div.row > div {
    margin-bottom: 16px;
  }

  div.divider {
    width: 50%;
  }
}
</style>
