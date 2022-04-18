<template>
  <span><slot></slot></span>
</template>
<script>
export default {
  mounted() {
    console.log("GREEN mounted");
  }
};
</script>