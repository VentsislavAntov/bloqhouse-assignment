<template>
  <FiltersWrapper
    title="Categories"
    filterCriteria="category"
    secondTitle="Availability"
    secondFilterCriteria="funding"
    secondFilterItemTitle="Show funded"
    v-bind:data="data"
  />
</template>

<script>
import data from "../../components/data/dbB";

import FiltersWrapper from "../../components/FiltersWrapper.vue";

export default {
  name: "ProjectsView",
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
