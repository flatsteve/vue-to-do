<template>
  <div class="todo">
    <h1 class="todo-title">Get shit done</h1>

    <div class="todo-container">
      <TodoItem v-for="todo in orderedTodos" :key="todo.id" :todo="todo" />
    </div>

    <div class="todo-add">
      <div class="todo-add__controls">
        <input
          v-model="description"
          type="text"
          placeholder="e.g. eat that frog"
        />
        <button :disabled="!description" @click="addTodo">Add todo</button>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  name: "Todo",
  components: { TodoItem },
  data: () => ({
    description: ""
  }),
  computed: {
    orderedTodos() {
      return this.$store.state.todos.reduce((acc, todo) => {
        if (todo.checked === false) {
          return [todo, ...acc];
        }
        return [...acc, todo];
      }, []);
    }
  },
  methods: {
    addTodo() {
      this.$store.commit({ type: "addTodo", description: this.description });
      this.description = "";
    }
  }
};
</script>

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
