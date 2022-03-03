<template>
  <FiltersWrapper
    v-if="this.data !== undefined && this.data !== ''"
    v-bind:data="this.data"
    title="Locations"
    filterCriteria="location"
    secondTitle="Availability"
    secondFilterCriteria="availability"
    secondFilterItemTitle="Show available
  only"
  />
</template>

<script>
import FiltersWrapper from "../../components/FiltersWrapper.vue";

export default {
  name: "PropertiesView",
  components: {
    FiltersWrapper,
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
