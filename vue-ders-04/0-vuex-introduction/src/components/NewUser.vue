<template>
  <button @click="updateName" class="btn btn-danger">click</button>
</template>

<script>
export default {
  methods: {
    updateName() {
      this.$store.state.fullName = "Zehra Karakuzu";
    },
  },
};
</script>
