<template>
  <div class="container mt-3">
    <h3 class="text-center text-danger">Alışveriş Listesi</h3>
    <hr />
    <div class="my-2">
      <input type="text" class="form-control" placeholder="Ne almak istersinn?.." @keydown.enter="onSave" />
    </div>
    <ul v-if="itemsList.length > 0" class="list-group">
      <li v-for="item in itemsList" :key="item.id" class="list-group-item d-flex justify-content-between align-items-center">
        <span>{{ item.title }}</span>
        <button @click="onDelete(item)" class="btn btn-danger">Sil</button>
      </li>
    </ul>
    <div v-else class="bg-success text-white p-2">
      Herhangi bir ürün yoktur..
    </div>
    <small class="mt-2 text-danger d-flex justify-content-end align-items-center">{{ itemCount }} adet alınacak ürün vardır..</small>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      itemsList: []
    };
  },
  mounted() {
    axios.get("http://localhost:3000/items").then(items_response => {
      console.log("items_response :>> ", items_response);
      this.itemsList = items_response.data || [];
      console.log("this.itemsList :>> ", this.itemsList);
    });
  },
  methods: {
    onSave(e) {
      const saveObject = {
        title: e.target.value,
        created_at: new Date(),
        completed: false
      };
      axios.post("http://localhost:3000/items", saveObject).then(save_response => {
        console.log(save_response);
        this.itemsList.push(save_response.data);
        e.target.value = "";
        e.target.focus();
      });
    },
    onDelete(item) {
      axios.delete(`http://localhost:3000/items/${item.id}`).then(delete_response => {
        console.log(delete_response);
        this.itemsList = this.itemsList.filter(i => i.id !== item.id);
      });
    }
  },
  computed: {
    itemCount() {
      return this.itemsList.length || 0;
    }
  }
};
</script>