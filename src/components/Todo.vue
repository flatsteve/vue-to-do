<template>
  <div class="todo">
    <h1 class="todo-title">Get shit done</h1>

    <div class="todo-container">
      <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
    </div>

    <div class="todo-add">
      <div class="todo-add__controls">
        <input type="text" v-model="description" placeholder="e.g. eat that frog" />
        <button @click="addTodo" :disabled="!description">Add todo</button>
      </div>
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
      this.description = "";
    }
  },
  computed: mapState(["todos"]),
  components: { TodoItem }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/colors";

.todo {
  flex: 1;
}

.todo-title {
  color: $white;
}

.todo-add {
  display: flex;

  &__controls {
    display: flex;
    margin-left: auto;
  }

  input {
    border: 2px solid $blue;
    border-radius: 0.25rem;
    padding: 0.75rem;
  }

  button {
    background-color: $pink;
    border-radius: 0.25rem;
    border: none;
    color: $white;
    font-weight: bold;
    margin-left: 0.75rem;
    padding: 0.75rem 1rem;
  }
}

.todo-container {
  background-color: $white;
  border: 2px solid $blue;
  border-radius: 1.25rem;
  margin-bottom: 1.75rem;
}
</style>
