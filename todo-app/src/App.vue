<template>
  <div class="container w-50">
    <h1 class="text-danger mt-5 mb-3 fw-bold text-center">TODO APP</h1>
    <hr class="my-2" />
    <AddSection :addNewTodo="addNewTodo" @add-todo="addNewTodo" />
    <ListSection />
    <!-- <TodoList @delete-todo-item="deleteItem" :myData="todoList" />
    <ResultBar :itemCount="todoList.length" /> -->
  </div>
</template>
<script>
import AddSection from "@/components/AddSection";
import ListSection from "@/components/ListSection";
// import TodoList from "@/components/TodoList";
// import ResultBar from "@/components/ResultBar";
export default {
  components: {
    AddSection,
    ListSection,
    // TodoList,
    // ResultBar
  },
  created() {
    // setTimeout(() => {
    //   this.todoList = [
    //     { id: 1, text: "Kitap oku." },
    // { id: 2, text: "Kod yaz." },
    // { id: 3, text: "Su iç." },
    // { id: 4, text: "Yürüyüş yap." },
    // { id: 5, text: "Ders çalış." }
    //   ];
    // }, 2000);
  },
  data() {
    return {
      provideData: {
        todoList: [
          { id: 1, text: "Kitap oku." },
          { id: 2, text: "Kod yaz." },
          { id: 3, text: "Su iç." },
          { id: 4, text: "Yürüyüş yap." },
          { id: 5, text: "Ders çalış." },
        ],
      },
    };
  },
  provide() {
    return {
      provideData: this.provideData,
      deleteItem: this.deleteItem,
    };
  },
  methods: {
    testEvent(data) {
      alert(data);
    },
    deleteItem(todoItem) {
      console.log(todoItem);
      // const matchedIndex = this.todoList.findIndex((i) => i === todoItem);
      // if (matchedIndex > -1) {
      //   this.todoList.splice(this.todoList[matchedIndex], 1);
      // }
      this.provideData.todoList = this.provideData.todoList.filter(
        (t) => t !== todoItem
      );
    },
    addNewTodo(todo) {
      this.provideData.todoList.push({
        id: new Date().getTime(),
        text: todo,
      });
    },
  },
};
</script>
