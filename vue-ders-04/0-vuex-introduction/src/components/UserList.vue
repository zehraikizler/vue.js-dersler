<template>
  <div>
    <ul class="list-group my-4">
      <li
        v-for="(item, index) in woodItems"
        :key="index"
        class="list-group-item"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      woodItems: "_woodItems",
      activeUser: "_activeUser",
    }),
  },
};
</script>
