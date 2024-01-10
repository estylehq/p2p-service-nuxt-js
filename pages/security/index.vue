<template>
  <div class="container">
    <h3 class="header">대출 가이드라인</h3>
    <p class="desc">
      까다롭게 심사해 필요한 금액을 지원해 드립니다.
    </p>
    <b-row>
      <b-col>
        <security-guide-point
          :header="'대출 자격'"
          :content="'누구나 가능'"
        ></security-guide-point>
      </b-col>
      <b-col>
        <security-guide-point
          :header="'한도 및 금리'"
          :content="'신청 사유에 따라 심사'"
        ></security-guide-point>
      </b-col>
      <b-col>
        <security-guide-point
          :header="'대출 기간'"
          :content="'1년 이내 (심사 이후 연장 가능)'"
        ></security-guide-point>
      </b-col>
    </b-row>
    <security-guide-table></security-guide-table>
    <b-row v-if="!isSignedIn" class="buttons">
      <b-col>
        <p>
          {{ $t('security.not-registered-yet') }}
        </p>
        <b-button
          @click="$router.push(localePath('sign-up'))"
          size="lg"
          variant="outline-primary"
        >
          <i class="fa fa-pencil-square-o"></i>
          {{ $t('security.button-sign-up') }}
        </b-button>
      </b-col>
      <b-col>
        <p>
          {{ $t('security.already-signed-up') }}
        </p>
        <b-button
          @click="$router.push(localePath('security-request'))"
          size="lg"
          variant="primary"
        >
          <i class="fa fa-sign-in"></i>
          {{ $t('security.button-request') }}
        </b-button>
      </b-col>
    </b-row>
    <div v-if="isSignedIn" class="text-center">
      <b-button
        @click="$router.push(localePath('security-request'))"
        size="lg"
        variant="primary"
      >
        <i class="fa fa-paper-plane-o"></i>{{ $t('security.button-request') }}
      </b-button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SecurityGuidePoint from '@/components/security/SecurityGuidePoint.vue';
import SecurityGuideTable from '@/components/security/SecurityGuideTable.vue';

export default {
  components: {
    SecurityGuidePoint,
    SecurityGuideTable,
  },
  computed: {
    ...mapState('sign-in', { isSignedIn: state => state.success }),
  },
};
</script>

<style lang="scss" scoped>
div.container {
  & > p.desc {
    text-align: center;
    color: #727272;
    font-size: 0.9rem;
    margin: 16px auto 24px;
  }

  div.row {
    margin-bottom: 32px;

    & > div {
      padding: 0;

      &:first-child {
        padding-right: 8px;
      }

      &:last-child {
        padding-left: 8px;
      }

      & > button {
        width: 100%;
      }

      p {
        text-align: center;
        font-weight: bold;
        opacity: 0.75;
      }
    }
  }

  div.text-center {
    margin-bottom: 32px;
  }

  button {
    min-width: 256px;
    min-height: 72px;
  }
}

@media (max-width: 768px) {
  div.container {
    padding: 8px 16px;
  }

  div.row > div {
    padding: 8px;
  }
}
</style>
