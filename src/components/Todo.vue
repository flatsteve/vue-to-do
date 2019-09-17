<template>
  <div class="todo">
    <div class="header">
      <h2 class="header__title">Get things done</h2>

      <User />
    </div>

    <div class="todo-container">
      <div v-show="!orderedTodos.length" class="todo-empty">
        <h3>Don't you have anything to do?</h3>

        <p>Nice, go read a book or something...</p>

        <p>Or you could add a todo below.</p>
      </div>

      <TodoItem v-for="todo in orderedTodos" :key="todo.id" :todo="todo" />
    </div>

    <div class="todo-add">
      <form class="todo-add__controls">
        <input
          v-model="description"
          type="text"
          placeholder="e.g. Eat that frog"
        />
        <Button
          :disabled="!description"
          :on-click="addTodo"
          class="todo-add__button"
          type="submit"
          >Add todo</Button
        >
      </form>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
import User from "./User";
import Button from "./Button";

export default {
  name: "Todo",
  components: { TodoItem, Button, User },
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
    addTodo(e) {
      e.preventDefault();

      this.$store.commit({ type: "addTodo", description: this.description });
      this.description = "";
    }
  }
};
</script>

<style scoped lang="scss">
@import "../styles/colors";

.header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 2.5rem 0;

  &__title {
    color: $white;
    margin: 0;
  }
}

.todo-add {
  display: flex;

  &__button {
    margin-left: 0.75rem;
  }

  &__controls {
    display: flex;
    margin-left: auto;
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
