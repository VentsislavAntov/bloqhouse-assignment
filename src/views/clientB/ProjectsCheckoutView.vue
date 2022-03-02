<template>
  <CheckoutWrapper view="slots" v-bind:data="data" />
</template>

<script>
import data from "../../components/data/dbB";
import CheckoutWrapper from "../../components/CheckoutWrapper.vue";

export default {
  name: "ProjectsCheckoutView",
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
