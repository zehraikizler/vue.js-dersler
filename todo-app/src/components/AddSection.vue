<template>
  <div>
    <label for="todoText"></label>
    <input
      v-model="todoText"
      @keydown.enter="addNewTodo(todoText)"
      class="form-control"
      type="text"
      id="todoText"
      placeholder="Bir şeyler yazınız..."
    />
  </div>
</template>

<script>
export default {
  props: {
    addNewTodo: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      todoText: null,
    };
  },
  methods: {
    // addNewTodo() {
    //   this.$emit("add-todo", this.todoText);
    //   this.todoText = null;
    // }
  },
};
</script>
