<template>
  <div>
    <h6>
      상환 계좌
    </h6>
    <b-table :items="[bank]" :fields="fields" stacked></b-table>
    <div class="divider"></div>
    <ul>
      <li>
        원리금 상환 시 입금자명은 대출자명과 동일해야합니다.
      </li>
      <li>
        상환금액은 상환 일정표의 해당 회차 금액과 동일하게 입금되어야합니다.
      </li>
      <li>
        만약, 입금자명이 다르거나 상환금액이 다르게 입금된 경우 고객센터로&nbsp;
        연락주시기 바랍니다.
      </li>
    </ul>
  </div>
</template>

<script>
const fields = [
  { key: 'name', label: '은행명' },
  { key: 'account', label: '계좌번호' },
  { key: 'owner', label: '계좌주' },
];

const bank = {
  name: '하나은행',
  account: '338-910014-21205',
  owner: 'P2P 서비스대부 주식회사',
};

export default {
  data() {
    return { bank, fields };
  },
};
</script>

<style scoped>
h6 {
  font-weight: bold;
  padding: 8px;
  margin-bottom: 8px;
}

ul {
  margin-top: 16px;
  padding-left: 24px;
  font-weight: 300;
  list-style-type: circle;
}

ul > li {
  margin-bottom: 8px;
}

ul > li:last-child {
  margin-bottom: 0;
}
</style>
