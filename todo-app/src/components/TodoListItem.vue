<template>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>{{ item.text }}</span>
    <button @click="deleteItem(item)" class="btn btn-sm btn-danger">Sil</button>
  </li>
</template>
<script>
export default {
  props: ["item"],
  inject: ["deleteItem"],
};
</script>
