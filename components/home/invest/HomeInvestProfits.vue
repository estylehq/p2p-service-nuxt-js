<template>
  <div class="bg">
    <div class="container">
      <b-row>
        <b-col cols="12" lg="4">
          <img src="~/assets/css/home/intro/icon-invest-01.svg" />
          <p class="header">장점 1</p>
          <div class="divider"></div>
          <p class="desc">
            서비스의 장점 1.
          </p>
        </b-col>
        <b-col cols="12" lg="4">
          <img src="~/assets/css/home/intro/icon-invest-02.svg" />
          <p class="header">장점 2</p>
          <div class="divider"></div>
          <p class="desc">
            서비스의 장점 2.
          </p>
        </b-col>
        <b-col cols="12" lg="4">
          <img src="~/assets/css/home/intro/icon-invest-03.svg" />
          <p class="header">장점 3</p>
          <div class="divider"></div>
          <p class="desc">
            서비스의 장점 3.
          </p>
        </b-col>
      </b-row>
      <div class="buttons">
        <div class="spacer"></div>
        <button @click="$router.push(localePath('invest'))" class="btn btn-lg">
          투자하기
        </button>
        <div class="spacer"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div.bg {
  background-color: #f4f8f9;

  div.container {
    padding: 56px 16px;
    min-height: 386px;

    div {
      &.divider {
        width: 75%;
        margin: 16px auto;
        border-bottom: 2px solid #1f93ff;
      }

      &.row {
        margin-bottom: 32px;

        & > div {
          text-align: center;

          img {
            width: 40px;
            height: 40px;
            margin-bottom: 16px;
          }

          p {
            text-align: center;
            font-size: 0.9rem;
            line-height: 2;

            &.header {
              color: rgb(76, 76, 76);
              font-size: 1.2rem;
              font-weight: bold;
            }

            &.desc {
              margin-bottom: 24px;
            }

            &.question {
              color: #62859b;
              font-size: 0.8rem;
              font-weight: bold;
            }
          }
        }
      }

      &.buttons {
        button {
          background-color: #1f93ff;
          color: #ffffff;
          min-width: 180px;
        }
      }
    }
  }
}

@media (max-width: 991px) {
  div {
    &.row {
      & > div {
        margin-bottom: 16px;
      }
    }

    &.divider {
      width: 50%;
    }
  }
}
</style>
