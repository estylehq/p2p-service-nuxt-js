<template>
  <div>
    <home-tag-line></home-tag-line>
    <div class="bg-img"></div>
    <div class="bg-white">
      <home-invest-process></home-invest-process>
      <home-invest-profits></home-invest-profits>
      <home-loan-process></home-loan-process>
      <home-loan-profits></home-loan-profits>
    </div>
  </div>
</template>

<script>
import HomeTagLine from '~/components/home/HomeTagLine.vue';
import HomeInvestProcess from '~/components/home/invest/HomeInvestProcess.vue';
import HomeInvestProfits from '~/components/home/invest/HomeInvestProfits.vue';
import HomeLoanProcess from '~/components/home/loan/HomeLoanProcess.vue';
import HomeLoanProfits from '~/components/home/loan/HomeLoanProfits.vue';

export default {
  layout: 'home',
  components: {
    HomeTagLine,
    HomeInvestProcess,
    HomeInvestProfits,
    HomeLoanProcess,
    HomeLoanProfits,
  },
  head() {
    return {
      title: this.$t('page-title'),
    };
  },
};
</script>

<style scoped>
div.bg-white {
  background-color: #ffffff;
}

div.bg-img {
  margin-top: 256px;
}

@media (max-width: 990px) {
  div.bg-white {
    margin-bottom: 0;
  }
}
</style>
