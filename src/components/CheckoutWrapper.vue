<template>
  <div v-if="this.foundProperty !== undefined" class="checkoutWrapper">
    <div class="containerPropertiesCheckout">
      <div class="columnLeftPropertiesCheckout">
        <div class="boxComponentPropertiesCheckout">
          <img
            v-if="this.$props.view === 'shares'"
            class="image fillImage"
            :src="foundProperty.img"
          />
          <ProjectDescription
            v-if="
              this.$props.view === 'slots' &&
              this.foundProperty !== undefined &&
              this.foundProperty !== ''
            "
            v-bind:description="foundProperty.description"
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
              {{ foundProperty.name }}
            </div>
          </div>
          <div class="middleAreaTextPropertiesCheckout textPropertiesCheckout">
            {{ this.firstTitle }}
            {{ this.availableSharesFunc() }}
          </div>
          <div class="middleAreaTextPropertiesCheckout textPropertiesCheckout">
            {{ this.secondTitle }}
            {{ this.secondNumber }}&#8364;
          </div>
          <div class="inputContainerPropertiesCheckout">
            <input
              class="inputPropertiesCheckout"
              v-model="toInvest"
              :placeholder="buttonPlaceholder"
            />
            <span class="middleSpanPropertiesCheckout">=</span>
            <span class="endSpanPropertiesCheckout">
              {{ currentSelectionEuros }}&#8364;</span
            >
          </div>

          <div class="buttonWrapPropertiesCheckout">
            <router-link
              :to="{
                name: backButtonRoute,
              }"
            >
              <button
                v-on:click="updateData()"
                class="buttonCheckoutPropertiesCheckout"
                :class="+isInvestedInputInvalid ? 'disabled' : ''"
              >
                {{ buttonText }}
              </button>
            </router-link>
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
  props: ["id", "view"],
  components: { ProjectDescription },

  methods: {
    updateData() {
      if (this.$props.view === "shares") {
        const payload = {
          passedId: this.$route.params.id,
          newAmount: this.toInvest,
        };
        this.$store.commit("setDba", payload);
      }
      if (this.$props.view === "slots") {
        const payload = {
          passedId: this.$route.params.id,
          newAmount: this.toInvest,
        };
        this.$store.commit("setDbb", payload);
      }
    },
    availableSharesFunc() {
      if (this.$props.view === "shares") {
        return this.foundProperty.availableShares?.toLocaleString("en-US");
      }
      if (this.$props.view === "slots") {
        return this.foundProperty.availableSlots?.toLocaleString("en-US");
      }
    },
  },

  computed: {
    currentSelectionEuros() {
      if (!this.toInvest) {
        return 0;
      }
      if (this.$props.view === "shares") {
        console.log(
          "this.foundProperty.totalValue",
          this.foundProperty.totalValue
        );
        console.log(
          "this.foundProperty.totalShares",
          this.foundProperty.totalShares
        );
        console.log("this.toInvest", this.toInvest);
        return (
          (this.foundProperty.totalValue * this.toInvest) /
          this.foundProperty.totalShares
        ).toLocaleString("en-US");
      }
      if (this.$props.view === "slots") {
        return (
          (this.foundProperty.projectGoal * this.toInvest) /
          this.foundProperty.totalSlots
        ).toLocaleString("en-US");
      }
      return 0;
    },
    isInvestedInputInvalid() {
      const found = this.foundProperty;
      const toInvestAmount =
        this.$props.view === "shares"
          ? (found.totalValue * this.toInvest) / found.totalShares
          : (found.projectGoal * this.toInvest) / found.totalSlots;
      if (!toInvestAmount) {
        return true;
      }
      const availableFunds =
        this.$props.view === "shares"
          ? (found.availableShares * found.totalValue) / found.totalShares
          : (found.availableSlots * found.projectGoal) / found.totalSlots;
      return toInvestAmount > availableFunds;
    },
  },
  data() {
    return {
      foundProperty: "",
      toInvest: null,
      buttonPlaceholder: "",
      backButtonRoute: "",
      firstTitle: "",
      secondTitle: "",
      secondNumber: "",
      buttonText: "",
    };
  },

  mounted() {
    if (this.$props.view === "shares") {
      this.foundProperty = this.$store.getters.getDbaById(
        this.$route.params.id
      );
      this.buttonPlaceholder = "Shares to buy";
      this.backButtonRoute = "Properties";
      this.firstTitle = "available shares:";
      this.secondTitle = "price per share:";
      this.secondNumber =
        this.foundProperty.totalValue / this.foundProperty.totalShares;
      this.buttonText = "Invest";
    }
    if (this.$props.view === "slots") {
      this.foundProperty = this.$store.getters.getDbbById(
        this.$route.params.id
      );
      this.buttonPlaceholder = "Slots to fund";
      this.backButtonRoute = "Projects";
      this.firstTitle = "available slots:";
      this.secondTitle = "slot size:";
      this.secondNumber =
        this.foundProperty.projectGoal / this.foundProperty.totalSlots;
      this.buttonText = "Fund";
    }
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
  padding-left: 6%;
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
