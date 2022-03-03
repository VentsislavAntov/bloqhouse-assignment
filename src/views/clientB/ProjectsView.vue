<template>
  <FiltersWrapper
    v-if="this.data !== undefined && this.data !== ''"
    v-bind:data="this.data"
    title="Categories"
    filterCriteria="category"
    secondTitle="Availability"
    secondFilterCriteria="funding"
    secondFilterItemTitle="Show funded"
  />
</template>

<script>
import FiltersWrapper from "../../components/FiltersWrapper.vue";

export default {
  name: "ProjectsView",
  components: {
    FiltersWrapper,
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
