<template>
  <CheckoutWrapper view="slots" v-bind:data="data" />
</template>

<script>
import CheckoutWrapper from "../../components/CheckoutWrapper.vue";

export default {
  name: "ProjectsCheckoutView",
  components: {
    CheckoutWrapper,
  },
  data() {
    return {
      data: "",
    };
  },
  mounted() {
    this.data = this.$store.getters.getDbb;
  },
};
</script>

<style></style>
