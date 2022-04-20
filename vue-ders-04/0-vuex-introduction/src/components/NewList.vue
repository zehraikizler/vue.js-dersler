<template>
  <button @click="updateWood" class="btn btn-danger">click</button>
</template>

<script>
export default {
  methods: {
    updateWood() {
      const userData = {
        id: new Date().getTime(),
        title: "Raf" + new Date().getTime(),
        type: "mobilya",
      };

      // mutations commit edilir.
      // actions dispatch edilir.

      //   this.$store.commit("newItem", userData);
      this.$store.dispatch("newItem", userData);
      //   this.$store.state.itemList.push(userData);
    },
  },
};
</script>
