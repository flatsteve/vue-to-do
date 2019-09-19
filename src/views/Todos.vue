<template>
  <div class="todos">
    <div class="header">
      <Date />

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

      <AddTodo
        v-show="showAdd"
        @addTodo="addTodo"
        @toggleShowAdd="toggleShowAdd"
      />

      <Fab :on-click="toggleShowAdd">Add</Fab>
    </div>
  </div>
</template>

<script>
import TodoItem from "../components/TodoItem";
import Date from "../components/Date";
import User from "../components/User";
import Fab from "../components/Fab";
import AddTodo from "../components/AddTodo";
import LoadingIcon from "../../public/svg/loading.svg";

export default {
  name: "Todos",
  components: { TodoItem, Date, User, LoadingIcon, Fab, AddTodo },
  data() {
    return { loading: true, showAdd: false };
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
      this.$store.dispatch("getTodos").then(() => {
        this.loading = false;
      });
    },
    toggleShowAdd() {
      this.showAdd = !this.showAdd;
    },
    addTodo(description) {
      this.$store.commit({ type: "addTodo", description });
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
  padding: 2rem 0;
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
