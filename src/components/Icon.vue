<template>
  <div>
    <svg class="icon">
      <use :xlink:href="'#' + name" />
    </svg>
  </div>
</template>

<script lang="ts">
const importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context("../assets/icons", true, /\.svg$/));
} catch (error) {
  console.log(error);
}

export default {
  name: "Icon",
  props: ["name"],
};
</script>

<style lang="scss" scoped>
.icon {
   width: 32px;
      height: 32px;
  fill: currentColor;
  overflow: hidden;
}
</style>
