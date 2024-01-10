<template>
  <div class="info">
    <p>
      { 실 수령액 } = { 상환 원금 } + { 세후 수익금 }
      <span>
        { 세후 수익금 } = { 세전 수익금 } - { 세금 } - { 플랫폼 이용료 }
      </span>
    </p>
    <p>
      { 세금 } = { 세금 수익금 } ✕ { 세율 }
      <span>0.0% ; 단, 대부업종 투자자는 예외</span>
    </p>
    <div class="divider"></div>
    <ul>
      <li>
        상기 스케쥴은 예상 확정일을 현재일 기준으로 한 예상 스케쥴로, 모집&nbsp;
        완료 시점과 실제 대출 실행일정에 따라 변경될 수 있습니다.
      </li>
      <li>
        투자완료 후 실제 지급 스케쥴은 대출 실행 완료 후에 확인 하실 수&nbsp;
        있습니다.
      </li>
      <li>
        수익금은 매월 투자일수에 따라 변경됩니다.
      </li>
      <li>
        중도상환 및 조기상환, 연체 등의 시나리오 발생 시 지급 스케쥴 및&nbsp;
        수익금에 차이가 발생할 수 있습니다.
      </li>
      <li>
        연체 이자율은 정상 이자율에 연체 기간별 연체 가산 이자율을 더하여&nbsp;
        적용되며, 최고 연체 이자율은 24%로 제한됩니다.
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
div.info {
  padding: 16px;
  font-size: 0.85rem;

  ul {
    padding-left: 24px;
    margin-top: 16px;
    margin-bottom: 0;

    & > li {
      line-height: 1.8;
      margin-bottom: 8px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  p {
    font-weight: bold;
    margin-bottom: 16px;
    padding-left: 16px;

    & > span {
      display: block;
      margin-top: 8px;
      font-size: 0.8rem;
      font-weight: normal;

      &::before {
        content: '-';
        margin-right: 8px;
      }
    }
  }
}

@media (max-width: 768px) {
  div.info {
    p {
      padding-left: 0;

      & > span {
        margin-top: 4px;
        font-size: 0.7rem;
      }
    }
  }
}
</style>
