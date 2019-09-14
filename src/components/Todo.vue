<template>
  <div>
    <div class="todo-add">
      <input type="text" v-model="description" />
      <button @click="addTodo" :disabled="!description">Add todo</button>
    </div>

    <div class="todo-container">
      <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import TodoItem from "./TodoItem";

export default {
  name: "Todo",
  data: () => ({
    description: ""
  }),
  methods: {
    addTodo() {
      this.$store.commit({ type: "addTodo", description: this.description });
    }
  },
  computed: mapState(["todos"]),
  components: { TodoItem }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.todo-add {
  margin-bottom: 1.25rem;
}

.todo-container {
  border: 2px solid #3498db;
  border-radius: 1.25rem;
}
</style>
