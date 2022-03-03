<template>
  <CheckoutWrapper view="shares" v-bind:data="data" />
</template>

<script>
import CheckoutWrapper from "../../components/CheckoutWrapper.vue";

export default {
  name: "PropertiesCheckoutView",
  components: {
    CheckoutWrapper,
  },
  data() {
    return {
      data: "",
    };
  },
  mounted() {
    this.data = this.$store.getters.getDba;
  },
};
</script>

<style></style>
