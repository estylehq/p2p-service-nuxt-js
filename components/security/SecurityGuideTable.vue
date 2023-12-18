<template>
  <div class="g-table">
    <b-row>
      <b-col cols="12" md="4" lg="5">
        {{ $t('security.table-qualification') }}
      </b-col>
      <b-col cols="12" md="8" lg="7">
        {{ $t('security.table-qualification-answer') }}
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" md="4" lg="5">
        {{ $t('security.table-limits-and-rates') }}
      </b-col>
      <b-col cols="12" md="8" lg="7">
        {{ $t('security.table-limits-and-rates-answer') }}
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" md="4" lg="5">
        {{ $t('security.table-term') }}
      </b-col>
      <b-col cols="12" md="8" lg="7">
        {{ $t('security.table-term-answer') }}
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" md="4" lg="5">
        {{ $t('security.table-return-type') }}
      </b-col>
      <b-col cols="12" md="8" lg="7">
        {{ $t('security.table-return-type-answer') }}
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" md="4" lg="5">
        {{ $t('security.table-loan-rate') }}
      </b-col>
      <b-col cols="12" md="8" lg="7">
        {{ $t('security.table-table-loan-rate-answer') }}
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" md="4" lg="5">
        {{ $t('security.table-delay-rate') }}
      </b-col>
      <b-col cols="12" md="8" lg="7">
        {{ $t('security.table-delay-rate-answer') }}
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" md="4" lg="5">
        {{ $t('security.table-returning-rate') }}
      </b-col>
      <b-col cols="12" md="8" lg="7">
        {{ $t('security.table-returning-rate-answer') }}
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>
div.g-table {
  margin: 24px auto 48px;
}

div.row:first-child {
  border-top: 2px solid rgba(0, 0, 0, 0.1);
}

div.row {
  font-size: 0.9rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

div.row > div {
  padding: 8px 24px;
  color: #727272;
}

div.row div:first-child {
  font-weight: bold;
}

div.row div ul {
  padding-inline-start: 24px;
  margin-bottom: 0;
}

div.row div ul > li {
  margin-bottom: 8px;
}
</style>
