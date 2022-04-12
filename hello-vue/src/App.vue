<template>
  <div>
    <app-header />
    <CounterItem />
  </div>
</template>
<script>
import CounterItem from "@/components/CounterItem";
export default {
  components: {
    CounterItem,
  },
};
</script>
