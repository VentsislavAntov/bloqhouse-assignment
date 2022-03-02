<template>
  <div class="checkoutWrapper">
    <div class="containerPropertiesCheckout">
      <div class="columnLeftPropertiesCheckout">
        <div class="boxComponentPropertiesCheckout">
          <img
            v-if="this.$props.view === 'shares'"
            class="image fillImage"
            :src="filteredProperty.img"
          />
          <ProjectDescription
            v-if="this.$props.view === 'slots'"
            v-bind:description="filteredProperty.description"
          />
        </div>
      </div>
      <div class="columnRightPropertiesCheckout">
        <div class="boxComponentPropertiesCheckout">
          <div class="containerDetailsTopPropertiesCheckout">
            <div
              class="columnLeftDetailsTopPropertiesCheckout textPropertiesCheckout"
            >
              Checkout form
            </div>
            <div
              class="columnRightDetailsTopPropertiesCheckout textPropertiesCheckout"
            >
              {{ filteredProperty.name }}
            </div>
          </div>
          <div class="middleAreaTextPropertiesCheckout textPropertiesCheckout">
            {{
              this.$props.view === "shares"
                ? "available shares:"
                : "available slots:"
            }}
            {{
              this.$props.view === "shares"
                ? filteredProperty.availableShares
                : filteredProperty.availableSlots
            }}
          </div>
          <div class="middleAreaTextPropertiesCheckout textPropertiesCheckout">
            {{
              this.$props.view === "shares" ? "price per share:" : "slot size:"
            }}

            {{
              this.$props.view === "shares"
                ? filteredProperty.totalValue / filteredProperty.totalShares
                : filteredProperty.projectGoal / filteredProperty.totalSlots
            }}&#8364;
          </div>
          <div class="inputContainerPropertiesCheckout">
            <input
              class="inputPropertiesCheckout"
              v-model="toInvest"
              :placeholder="buttonPlaceholder"
            />
            <span class="middleSpanPropertiesCheckout">=</span>
            <span class="endSpanPropertiesCheckout">
              {{
                this.$props.view === "shares"
                  ? (
                      (filteredProperty.totalValue * this.toInvest) /
                      filteredProperty.totalShares
                    ).toLocaleString("en-US")
                  : (
                      (filteredProperty.projectGoal * this.toInvest) /
                      filteredProperty.totalSlots
                    ).toLocaleString("en-US")
              }}
              &#8364;</span
            >
          </div>

          <div class="buttonWrapPropertiesCheckout">
            <!--  :class="'buttonCheckoutPropertiesCheckout' + checkShouldBeHidden" -->
            <button
              v-on:click="updateData()"
              class="buttonCheckoutPropertiesCheckout"
              :class="+tooMuchInvestingChecker ? 'disabled' : ''"
            >
              {{ this.$props.view === "shares" ? " Invest" : "Fund" }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <router-link
      :to="{
        name: backButtonRoute,
      }"
    >
      <div class="goBackButtonWrap">
        <button class="goBackButton">Go Back</button>
      </div>
    </router-link>
  </div>
</template>

<script>
import ProjectDescription from "./ProjectDescription.vue";

export default {
  name: "CheckoutWrapper",
  props: ["id", "data", "view"],
  components: { ProjectDescription },

  methods: {},
  computed: {
    filteredProperty() {
      const idLocal = this.$route.params.id;
      const found = this.properties.find((x) => x.id === parseInt(idLocal));
      return found;
    },
    // checkShouldBeHidden(){
    //     const total = this.$props.view === "shares" ? "Shares to buy" : "Slots to fund",
    // },
    tooMuchInvestingChecker() {
      const idLocal = this.$route.params.id;
      const found = this.properties.find((x) => x.id === parseInt(idLocal));
      const toInvestAmount =
        this.$props.view === "shares"
          ? (found.totalValue * this.toInvest) / found.totalShares
          : (found.projectGoal * this.toInvest) / found.totalSlots;
      const availableFunds =
        this.$props.view === "shares"
          ? (found.availableShares * found.totalValue) / found.totalShares
          : (found.availableSlots * found.projectGoal) / found.totalSlots;
      return toInvestAmount > availableFunds;
    },
  },
  data() {
    return {
      properties: this.$props.data.properties,
      toInvest: null,
      buttonPlaceholder:
        this.$props.view === "shares" ? "Shares to buy" : "Slots to fund",
      backButtonRoute:
        this.$props.view === "shares" ? "Properties" : "Projects",
    };
  },
};
</script>

<style>
.containerPropertiesCheckout {
  display: flex;
  flex-direction: row;
}

.columnLeftPropertiesCheckout {
  width: 50%;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.columnRightPropertiesCheckout {
  width: 50%;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.boxComponentPropertiesCheckout {
  width: 700px;
  height: 450px;
  border-style: solid;
}

.fillImage {
  height: 100%;
}

.containerDetailsTopPropertiesCheckout {
  display: flex;
  flex-direction: row;
  height: 70px;
  justify-content: space-between;
}

.columnLeftDetailsTopPropertiesCheckout {
  padding-top: 20px;
  padding-left: 40px;
  width: 50%;
  display: flex;
}

.columnRightDetailsTopPropertiesCheckout {
  width: 50%;
  padding-top: 20px;
  padding-right: 40px;

  text-align: right;
}

.middleAreaTextPropertiesCheckout {
  text-align: left;
  padding-left: 40px;
  padding-top: 10px;
}

.textPropertiesCheckout {
  font-size: 25px;
}

.inputContainerPropertiesCheckout {
  display: flex;
  text-align: left;
  padding-left: 40px;
  padding-top: 70px;
  padding-right: 50px;
}

.buttonWrapPropertiesCheckout {
  display: flex;
  flex-direction: row;
  height: 150px;
  justify-content: space-between;
  padding-left: 40px;
  position: relative;
}

.inputPropertiesCheckout {
  height: 50px;
  text-align: center;
  font-size: 28px;
}
.middleSpanPropertiesCheckout {
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
}
.endSpanPropertiesCheckout {
  width: 43%;
  display: flex;
  align-items: center;
  font-size: 30px;
}
.buttonCheckoutPropertiesCheckout {
  background-color: lightgreen;
  font-size: 14px;
  width: 130px;
  height: 35px;
  cursor: pointer;
  bottom: 20px;
  position: absolute;
}

.buttonCheckoutPropertiesCheckout:hover {
  background-color: rgb(209, 248, 209);
}

.goBackButtonWrap {
  text-align: left;
  padding-left: 5%;
}

.goBackButton {
  width: 50%;
  font-size: 14px;
  width: 130px;
  height: 35px;
  cursor: pointer;
  bottom: 20px;
}
.checkoutWrapper {
  border-style: solid;
  padding: 5px;
  padding-bottom: 60px;
}

.disabled {
  cursor: not-allowed;
  pointer-events: none;
  background-color: #ddd;
  background: #ddd;
  color: grey;
}
</style>
