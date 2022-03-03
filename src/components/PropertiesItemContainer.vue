<template>
  <ul class="propertyContainer">
    <li
      v-for="property in filteredProperties"
      :key="property.id"
      class="propertyListItem"
    >
      <div class="wrapper">
        <img class="image" :src="property.img" />

        <ul class="cardContent">
          <li class="cardTitle">
            {{ property.name }}
          </li>
          <li class="cardItem">
            Total value:
            {{ property.totalValue.toLocaleString("en-US") }}&#8364;
          </li>
          <li
            v-if="
              property.availableShares *
              (property.totalValue / property.totalShares)
            "
            class="cardItem"
          >
            Remaining funding:
            {{
              (
                property.availableShares *
                (property.totalValue / property.totalShares)
              ).toLocaleString("en-US")
            }}&#8364;
          </li>
          <li
            v-if="
              property.availableShares *
              (property.totalValue / property.totalShares)
            "
            class="cardItem"
          >
            Price per share
            {{
              (property.totalValue / property.totalShares).toLocaleString(
                "en-US"
              )
            }}&#8364;
          </li>
        </ul>
        <div
          class="buttonContainer"
          v-if="
            property.availableShares *
            (property.totalValue / property.totalShares)
          "
        >
          <router-link
            :to="{
              name: 'PropertiesCheckout',
              params: { id: property.id },
            }"
          >
            <button class="button">Invest</button>
          </router-link>
        </div>
        <div class="soldOut" v-else>Sold out</div>
      </div>
    </li>
  </ul>
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
      if (this.$props.filters.secondarySelection === true) {
        result = result.filter((property) => {
          return (
            property.availableShares *
              (property.totalValue / property.totalShares) >
            0
          );
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
.propertyContainer {
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-shrink: 0;
  flex-flow: row wrap;
  justify-content: left;
}

.propertyListItem {
  list-style-type: none;
  width: 33.3%;
  text-align: -webkit-center;
}
.wrapper {
  width: 320px;
  height: 440px;
  margin: 20px;
  border-style: solid;
}

.image {
  width: 100%;
}

.cardContent {
  padding-left: 30px;
  padding-right: 30px;
  min-height: 160px;
}

.cardTitle {
  list-style-type: none;
  padding-bottom: 15px;
  padding-top: 15px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
}
.cardItem {
  list-style-type: none;
  padding-bottom: 15px;
  font-size: 15px;
  text-align: center;
}

.buttonContainer {
  text-align: center;
}

.button {
  width: 130px;
  height: 35px;
  background-color: lightgreen;
  font-size: 14px;
  cursor: pointer;
}

.button:hover {
  background-color: rgb(209, 248, 209);
}

.soldOut {
  padding-left: 30px;
  padding-right: 30px;
  color: red;
  text-align: center;
}
</style>
