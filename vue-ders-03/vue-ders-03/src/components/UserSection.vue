<template>
  <ListSection />
  <AddSection />
</template>

<script>
import ListSection from "./ListSection.vue";
import AddSection from "./AddSection.vue";

export default {
  components: {
    ListSection,
    AddSection,
  },
//   props: ["userList"],
//   emits: ["new-item"],
};
</script>
