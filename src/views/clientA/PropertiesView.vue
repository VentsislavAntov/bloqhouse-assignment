<template>
  <FiltersWrapper
    title="Locations"
    filterCriteria="location"
    secondTitle="Availability"
    secondFilterCriteria="availability"
    secondFilterItemTitle="Show available only"
    v-bind:data="data"
  />
</template>

<script>
import data from "../../components/data/dbA";

import FiltersWrapper from "../../components/FiltersWrapper.vue";

export default {
  name: "PropertiesView",
  components: {
    FiltersWrapper,
  },
  data() {
    return {
      data: data,
    };
  },
};
</script>

<style></style>
