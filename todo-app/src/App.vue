<template>
  <div class="container w-50">
    <h1 class="text-danger mt-5 mb-3 fw-bold text-center">TODO APP</h1>
    <label for="todoText"></label>
    <input
      @keydown.enter="addNewTodo"
      type="text"
      id="todoText"
      class="form-control"
      placeholder="Bugün ne yapmak istersin?..."
    />
    <ul class="list-group my-4">
      <li
        v-for="todoItem in todoList"
        :key="todoItem.id"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <span> {{ todoItem.text }} </span>
        <button @click="deleteItem(todoItem)" class="btn btn-sm btn-danger">
          Delete
        </button>
      </li>
    </ul>
    <small class="text-primary d-flex float-end"
      >{{ todoList.length }} adet todo vardır.</small
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoList: [
        { id: 1, text: "Kitap oku." },
        { id: 2, text: "Kod yaz." },
        { id: 3, text: "Su iç." },
        { id: 4, text: "Yürüyüş yap." },
        { id: 5, text: "Ders çalış." },
      ],
    };
  },
  methods: {
    deleteItem(todoItem) {
      // const matchedIndex = this.todoList.findIndex((i) => i === todoItem);
      // if(matchedIndex > -1){
      //   this.todoList.splice(this.todoList[matchedIndex], 1);
      // }
      this.todoList = this.todoList.filter((t) => t !== todoItem);
    },
    addNewTodo(event) {
      this.todoList.push({
        id: new Date().getTime(),
        text: event.target.value,
      });
      event.target.value = "";
    },
  },
};
</script>
