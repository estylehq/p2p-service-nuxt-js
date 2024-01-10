<template>
  <modal
    :click-to-close="false"
    name="loan-info-modal"
    transition="pop-out"
    height="auto"
    adaptive
  >
    <div class="modal-content">
      <h3 class="title">
        왜 대부업인가요?
      </h3>
      <div class="content">
        현재 국내법률 체계에서는 P2P 서비스와 같은 P2P금융기업이&nbsp;
        금융서비스를 제공하기 위해서는 대부업 등록이 필요합니다.<br />
        <br />
        P2P 서비스는 합법적이고 합리적인 서비스를 제공하기 위해 새로운&nbsp;
        제도가 마련되기 전까지 대부업 등록을 유지할 계획입니다. P2P&nbsp;
        서비스가 기존 대부업과의 다른점은 중저금리 대출을 제공하고&nbsp;
        선진화된 IT 시스템을 활용한다는 점입니다.
      </div>
      <b-button
        @click="$modal.hide('loan-info-modal')"
        size="lg"
        variant="primary"
      >
        {{ $t('button.confirm') }}
      </b-button>
    </div>
  </modal>
</template>

<script>
export default {
  name: 'AppHeaderLoanModal',
};
</script>

<style lang="scss" scoped>
div.modal-content {
  padding: 16px;
  display: block;

  h3.title {
    text-align: center;
  }

  div.content {
    font-size: 0.9rem;
    line-height: 1.8;
    overflow-y: auto;
    max-height: 420px;
    padding: 16px;
    background-color: #fafafa;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 8px;
  }

  button {
    width: 100%;
  }
}

@media (max-width: 768px) {
  div.modal-content {
    padding: 16px;
    display: block;

    h3.title {
      font-size: 1.4rem;
    }
  }
}
</style>
