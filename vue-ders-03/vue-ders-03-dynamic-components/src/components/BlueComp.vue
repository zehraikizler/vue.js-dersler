<template>
  <span>
      <h3 class="bg-primary text-white">Blue Component</h3>
  <input type="text" />
  </span>
</template>
<script>
export default {
  mounted() {
    console.log("BLUE mounted");
  },
  activated() {
    console.log("BLUE activated");
  },
  deactivated() {
    console.log("BLUE deactivated");
  }
};
</script>