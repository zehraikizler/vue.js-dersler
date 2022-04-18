<template>
  <div class="container">
    <div class="d-flex justify-content-between align-items-center">
      <button class="btn btn-danger" @click="activeComponent = 'RedComp'">RedComp</button>
      <button class="btn btn-success" @click="activeComponent = 'GreenComp'">GreenComp</button>
      <button class="btn btn-primary" @click="activeComponent = 'BlueComp'">BlueComp</button>
    </div>
    <!-- <RedComp msg="RedComp Component" v-if="activeComponent == 'RedComp'" class="mb-2" />
    <GreenComp v-if="activeComponent == 'GreenComp'" class="mb-2" />
    <BlueComp v-if="activeComponent == 'BlueComp'" class="mb-2" /> -->
    {{ activeComponent }}
    <keep-alive>
      <component :is="activeComponent" msg="RedComp Component 2">
        <h3 class="bg-success text-white">GreenComp Component</h3>
      </component>
    </keep-alive>
  </div>
</template>
<script>
import RedComp from "@/components/RedComp";
import GreenComp from "@/components/GreenComp";
import BlueComp from "@/components/BlueComp";
export default {
  components: {
    RedComp,
    GreenComp,
    BlueComp
  },
  data() {
    return {
      activeComponent: "RedComp"
    };
  }
};
</script>