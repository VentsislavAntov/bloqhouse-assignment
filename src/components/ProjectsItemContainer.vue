<template>
  <div class="containerProject">
    <div class="leftColumnProject">
      <ul class="projectListContainer">
        <li
          v-for="property in filteredProperties"
          :key="property.id"
          class="projectListItem"
        >
          <div class="wrapperProjectImage">
            <img class="imageProject" :src="property.img" />
          </div>
          <div class="cardContentProject">
            <div class="titleProject">
              {{ property.name }}
            </div>

            <ul class="cardListProject">
              <li class="cardItemProject">
                Project goal:
                {{ property.projectGoal.toLocaleString("en-US") }}&#8364;
              </li>
              <li class="cardItemProject" v-if="property.availableSlots > 0">
                Slot size:
                {{
                  (property.projectGoal / property.totalSlots).toLocaleString(
                    "en-US"
                  )
                }}&#8364;
              </li>
              <li class="cardItemProject" v-if="property.availableSlots > 0">
                Remaining funding needed:
                {{
                  (
                    (property.projectGoal * property.availableSlots) /
                    property.totalSlots
                  ).toLocaleString("en-US")
                }}&#8364;
              </li>
            </ul>
          </div>
          <div class="buttonWrapperProject">
            <div class="buttonContainerProject">
              <router-link
                v-if="property.availableSlots > 0"
                :to="{
                  name: 'ProjectsCheckout',
                  params: { id: property.id },
                }"
              >
                <button class="button">Invest</button>
              </router-link>
              <div class="projectFunded" v-else>Project Funded</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "PropertiesItemContainer",
  props: ["filters", "filterCriteria", "data"],
  computed: {
    filteredProperties() {
      let result = this.properties;
      if (this.$props.filters.primarySelections.length > 0) {
        result = this.properties.filter((property) => {
          return this.$props.filters.primarySelections.includes(
            property[this.$props.filterCriteria]
          );
        });
      }
      if (this.$props.filters.secondarySelection !== true) {
        result = result.filter((property) => {
          return property.availableSlots > 0;
        });
      }
      return result;
    },
  },
  data() {
    return {
      properties: this.$props.data.properties,
    };
  },
};
</script>

<style>
.containerProject {
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 50px;
  padding-right: 50px;
  display: flex;
  flex-direction: row;
  height: 500px;
}

.projectListContainer {
  margin: 0px;
  padding: 0px;
  margin-left: 90px;
  margin-right: 90px;
}

.projectListItem {
  display: flex;
  flex-direction: row;
  border-style: solid;
  height: 200px;
  margin-bottom: 30px;
}

.wrapperProjectImage {
  width: 35%;
  text-align: left;
}

.cardContentProject {
  padding-top: 15px;
  padding-bottom: 15px;
  width: 40%;
  text-align: left;
}

.buttonWrapperProject {
  width: 25%;
  padding-bottom: 15px;
  position: relative;
}

.titleProject {
  font-size: 18px;
  font-weight: bold;
}

.leftColumnProject {
  width: 100%;
  height: 100vh;
  text-align: left;
}
.imageProject {
  height: 100%;
}

.cardListProject {
  margin-top: 50px;
  padding: 0px;
}

.cardItemProject {
  list-style-type: none;
  padding-bottom: 10px;
}

.buttonContainerProject {
  text-align: center;
  position: absolute;
  bottom: 25px;
  right: 45px;
}

.projectFunded {
  color: red;
  font-size: 18px;
}
</style>
