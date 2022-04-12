<template>
  <div class="container text-center border py-4 my-5 w-25">
    <h3 class="mb-2">{{ counter }}</h3>
    <button @click="counter--" class="btn btn-danger me-2" >-</button>
    <button @click="counter++" class="btn btn-primary" >+</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
};
</script>