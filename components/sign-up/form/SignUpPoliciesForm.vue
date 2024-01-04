<template>
  <b-form-group :label="$t('sign-up.policies')">
    <policy-field
      id="online-service"
      :label="$t('policy.online-service')"
      :checked="onlineService"
      @change="onlineService = !onlineService"
      required
    ></policy-field>
    <policy-field
      id="processing-personal"
      :label="$t('policy.processing-personal')"
      :checked="processingPersonal"
      @change="processingPersonal = !processingPersonal"
      required
    ></policy-field>
    <policy-field
      id="collecting-personal"
      :label="$t('policy.collecting-personal')"
      :checked="collectingPersonal"
      @change="collectingPersonal = !collectingPersonal"
      required
    ></policy-field>
    <policy-field
      id="serving-personal"
      :label="$t('policy.serving-personal')"
      :checked="servingPersonal"
      @change="servingPersonal = !servingPersonal"
      required
    ></policy-field>
    <policy-field
      id="identification"
      :label="$t('policy.identification')"
      :checked="identification"
      @change="identification = !identification"
      required
    ></policy-field>
    <slot></slot>
    <div class="divider"></div>
    <b-row cols="12">
      <b-form-checkbox id="check-all" @change="onCheckAll">
        {{ $t('policy.allowed-all') }}
      </b-form-checkbox>
    </b-row>
  </b-form-group>
</template>

<script>
import PolicyField from '~/components/common/PolicyField.vue';

export default {
  components: {
    PolicyField,
  },
  props: {
    propCheckedAll: { type: Boolean, defualt: false },
  },
  data() {
    return {
      onlineService: false,
      processingPersonal: false,
      collectingPersonal: false,
      servingPersonal: false,
      identification: false,
    };
  },
  computed: {
    isCheckedAll: function isCheckedAll() {
      const {
        onlineService,
        processingPersonal,
        collectingPersonal,
        servingPersonal,
        identification,
      } = this;
      const result =
        onlineService &&
        processingPersonal &&
        collectingPersonal &&
        servingPersonal &&
        identification;
      return result;
    },
  },
  watch: {
    isCheckedAll: function onWatch(result) {
      this.$emit('listener', result);
    },
  },
  methods: {
    onCheckAll: function onCheckAll(value) {
      this.onlineService = value;
      this.processingPersonal = value;
      this.collectingPersonal = value;
      this.servingPersonal = value;
      this.identification = value;
      this.$emit('checkedAll', value);
    },
  },
};
</script>

<style lang="scss" scoped>
div.divider {
  margin-bottom: 8px;
}

div.row {
  margin: 0 0 16px;
}
</style>
