<template>
  <CheckoutWrapper view="shares" v-bind:data="data" />
</template>

<script>
import data from "../../components/data/dbA";
import CheckoutWrapper from "../../components/CheckoutWrapper.vue";

export default {
  name: "PropertiesCheckoutView",
  components: {
    CheckoutWrapper,
  },
  data() {
    return {
      data: data,
    };
  },
};
</script>

<style></style>
