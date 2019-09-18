<template>
  <div class="todos">
    <div class="header">
      <h2 class="header__title">Get things done</h2>

      <User />
    </div>

    <div v-show="loading" class="todos__loading">
      <p>Loading your todos</p>

      <LoadingIcon />
    </div>

    <div v-show="!loading">
      <div class="todos-container">
        <div v-show="!orderedTodos.length" class="todos-empty">
          <h3>Don't you have anything to do?</h3>

          <p>Nice, go read a book or something...</p>

          <p>Or you could add a todo below.</p>
        </div>

        <TodoItem v-for="todo in orderedTodos" :key="todo.id" :todo="todo" />
      </div>

      <div class="todos-add">
        <form class="todos-add__controls">
          <input
            v-model="description"
            type="text"
            placeholder="e.g. Eat that frog"
          />
          <Button
            :disabled="!description"
            :on-click="addTodo"
            class="todos-add__button"
            type="submit"
            >Add todo</Button
          >
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../main";
import TodoItem from "../components/TodoItem";
import User from "../components/User";
import Button from "../components/Button";
import LoadingIcon from "../../public/svg/loading.svg";

export default {
  name: "Todos",
  components: { TodoItem, Button, User, LoadingIcon },
  data() {
    return { description: "", loading: true };
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
  mounted() {
    this.getTodos();
  },
  methods: {
    getTodos() {
      db.collection("todos")
        .doc(this.$store.state.user.id)
        .get()
        .then(doc => {
          this.loading = false;
          const { data } = doc.data();
          this.$store.commit({ type: "receiveTodos", todos: data });
        });
    },
    addTodo(e) {
      e.preventDefault();

      this.$store.commit({ type: "addTodo", description: this.description });
      this.description = "";
    }
  }
};
</script>

<style scoped lang="scss">
.todos {
  padding-bottom: 5rem;

  &__loading {
    align-items: center;
    color: $white;
    display: flex;
    flex-direction: column;
    font-style: italic;
    justify-content: center;
    margin-bottom: 1.75rem;

    svg {
      margin-top: 0.75rem;
      width: 2.5rem;
    }
  }
}

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

.todos-add {
  display: flex;

  &__button {
    margin-left: 0.75rem;
  }

  &__controls {
    display: flex;
    margin-left: auto;
  }
}

.todos-container {
  background-color: $white;
  border: 2px solid $blue;
  border-radius: 1.25rem;
  margin-bottom: 1.75rem;
}

.todos-empty {
  padding: 1.25rem;
}
</style>
