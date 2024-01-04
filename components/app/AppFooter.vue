<template>
  <footer>
    <b-row class="container">
      <b-col cols="12" lg="4">
        <div class="logo">
          <p>P2P Service</p>
        </div>
      </b-col>
      <b-col cols="12" lg="4">
        <slot name="policies"></slot>
      </b-col>
      <b-col cols="12" lg="4">
        <div class="services">
          <h6>고객센터 운영안내</h6>
          <ul>
            <li>
              <a href="tel:+8215440000"><i class="fa fa-phone"></i>1544-0000</a>
            </li>
            <li>
              <a href="mailto:help@p2pservice.kr"
                ><i class="fa fa-envelope-o"></i>help@p2pservice.kr</a
              >
            </li>
            <li><i class="fa fa-fax"></i>000-0000-0000</li>
            <li>
              <i class="fa fa-clock-o"></i>평일 10시 ~ 18시 (점심 12시 ~ 13시)
            </li>
          </ul>
        </div>
      </b-col>
    </b-row>
    <div class="divider"></div>
    <slot></slot>
    <div class="divider"></div>
    <p class="copyright">
      Ⓒ 2018-2019 P2P Service Co., Ltd. All Rights Reserved.
    </p>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-color: #f2f2f2;

  div.logo {
    display: flex;
    padding: 16px 24px;

    & > p {
      width: fit-content;
      color: #1f93ff;
      margin-left: 16px;
      font-weight: bold;
      font-size: 1.6rem;
    }
  }

  div.row {
    padding: 8px 0;

    & > div {
      padding: 0;
    }

    &.container {
      margin: 0 auto;
      max-width: 960px;
    }
  }

  div.services {
    padding: 16px;

    & > h6 {
      font-size: 0.9rem;
      font-weight: bold;
      margin-bottom: 16px;
    }

    & > ul {
      font-size: 0.8rem;
      list-style-type: none;
      padding-left: 0;
      margin-bottom: 0;

      li {
        margin-bottom: 8px;

        a {
          color: inherit;
        }

        i.fa {
          margin-right: 8px;
        }

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  div.divider {
    margin: 0;
  }

  p.copyright {
    font-size: 0.9rem;
    padding: 16px;
    margin: 0;
    line-height: 1.6;
    font-weight: bold;
    text-align: center;
  }
}

@media (max-width: 768px) {
  div.cs-info {
    padding: 16px 24px;
  }
}

@media (max-width: 768px) {
  footer {
    div.row {
      padding: 16px;
    }
  }
}
</style>
