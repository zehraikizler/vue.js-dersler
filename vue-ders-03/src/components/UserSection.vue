<template>
  <ListSection :userList="userList" />
  <AddSection @new-item="$emit('new-item', $event)" />
</template>

<script>
import ListSection from "./ListSection.vue";
import AddSection from "./AddSection.vue";

export default {
  components: {
    ListSection,
    AddSection,
  },
  props: ["userList"],
  emits: ["new-item"],
};
</script>
