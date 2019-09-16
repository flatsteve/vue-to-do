<template>
  <div class="todo">
    <h1 class="todo-title">Get shit done</h1>

    <div class="todo-container">
      <div v-show="!orderedTodos.length" class="todo-empty">
        <h3>Don't you have anything to do?</h3>

        <p>Nice, go read a book or something...</p>

        <p>Or you could add a todo below.</p>
      </div>

      <TodoItem v-for="todo in orderedTodos" :key="todo.id" :todo="todo" />
    </div>

    <div class="todo-add">
      <div class="todo-add__controls">
        <input
          v-model="description"
          type="text"
          placeholder="e.g. Eat that frog"
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
  data() {
    return { description: "" };
  },
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

.todo-empty {
  padding: 1.25rem;
}
</style>
