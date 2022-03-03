<template>
  <div class="projectDescriptionContainer">
    <div class="projectDescriptionTitleWrapper">
      <div class="projectDescriptionTitle">Project description</div>
    </div>
    <div class="projectDescriptionDescription">
      <div class="projectDescriptionDescriptionText">
        {{ this.$props.description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectDescription",
  props: ["description"],
  data() {
    return {};
  },
};
</script>

<style>
.projectDescriptionContainer {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.projectDescriptionTitleWrapper {
  display: block;
  height: 40%;
}

.projectDescriptionTitle {
  padding-top: 36px;
  font-size: 30px;
}

.projectDescriptionDescription {
  margin-bottom: 15px;
  margin-left: 15px;
  margin-right: 15px;
  height: 60%;
  display: inline-table;
  background-color: rgba(189, 212, 255, 0.322);
}

.projectDescriptionDescriptionText {
  vertical-align: middle;
  font-size: 30px;
  display: table-cell;
}
</style>
