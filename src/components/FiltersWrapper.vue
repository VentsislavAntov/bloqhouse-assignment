<template>
  <div class="container">
    <div class="leftColumn">
      <div class="title">{{ title }}</div>
      <ul>
        <li
          v-for="element in elements"
          :key="element.id"
          class="elementListItem"
        >
          <input
            v-model="filters.primarySelections"
            :id="element"
            :value="element"
            name="element"
            type="checkbox"
          />
          {{ element }}
        </li>
      </ul>
      <div class="title">{{ secondTitle }}</div>
      <ul>
        <li class="elementListItem">
          <input
            v-model="filters.secondarySelection"
            :value="availableSelection"
            name="availableSelection"
            type="checkbox"
          />
          {{ secondFilterItemTitle }}
        </li>
      </ul>
    </div>

    <div class="rightColumn">
      <PropertiesItemContainer
        v-bind:filters="filters"
        v-bind:filterCriteria="filterCriteria"
        v-bind:data="data"
        v-if="this.$props.secondFilterCriteria === 'availability'"
      />
      <ProjectsItemContainer
        v-bind:filters="filters"
        v-bind:filterCriteria="filterCriteria"
        v-bind:data="data"
        v-if="this.$props.secondFilterCriteria === 'funding'"
      />
    </div>
  </div>
</template>

<script>
import PropertiesItemContainer from "./PropertiesItemContainer.vue";
import ProjectsItemContainer from "./ProjectsItemContainer.vue";

export default {
  name: "FiltersWrapper",
  props: [
    "data",
    "title",
    "filterCriteria",
    "secondTitle",
    "secondFilterCriteria",
    "secondFilterItemTitle",
  ],
  components: { PropertiesItemContainer, ProjectsItemContainer },
  methods: {
    filterDataFirstCriteria() {
      return new Set(
        this.$props.data.properties.map(
          (object) => object[this.$props.filterCriteria]
        )
      );
    },
  },
  data() {
    return {
      filters: { primarySelections: [], secondarySelection: false },
      elements: this.filterDataFirstCriteria(),
    };
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: row;
}

.leftColumn {
  width: 30%;
  height: 100vh;
  text-align: left;
  border-right: 0px;
  border-style: solid;
  min-height: 1000px;
}
.title {
  padding-top: 36px;
  padding-left: 40px;
  font-size: 30px;
}

.rightColumn {
  width: 70%;
  height: 100vh;
  border-style: solid;
  min-height: 1000px;
}

.elementListItem {
  list-style-type: none;
  padding-top: 10px;
  font-size: 22px;
}
</style>
