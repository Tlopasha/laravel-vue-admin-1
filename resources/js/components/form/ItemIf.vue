<template>
  <div v-if="ifShow">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    form_item: Object,
    form_items: Array,
    form_data: Object
  },
  computed: {
    ifShow() {
      let key = this.form_item.vif.key;
      let value = this.form_item.vif.value;

      if (key) {
        let cValue = window._.get(this.form_data, key);
        if (cValue == value) {
          return true;
        } else {
          return false;
        }
      }

      return true;
    }
  }
};
</script>
