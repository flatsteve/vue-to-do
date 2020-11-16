<template>
  <div class="todos">
    <div class="todos__header">
      <Date />

      <User />
    </div>

    <template v-if="loading">
      <div class="todos__loading">
        <p>Loading your todos</p>

        <LoadingIcon />
      </div>
    </template>

    <template v-else>
      <div v-if="hasNoTodos" class="todos-empty">
        <h3>Don't you have anything to do?</h3>

        <p>Nice, go read a book or something...</p>

        <p>Or you could add a todo below.</p>
      </div>

      <div v-else>
        <div v-if="pending.length">
          <h4 class="todos__title">Get shit done ({{ pending.length }})</h4>

          <div class="todos-container">
            <draggable
              v-model="pending"
              filter=".todo-item--edit"
              delay="100"
              :prevent-on-filter="false"
              :delay-on-touch-only="true"
            >
              <TodoItem
                v-for="todo in pending"
                :key="todo.id"
                :todo="todo"
                @check-todo="checkTodo"
                @remove-todo="removeTodo"
              />
            </draggable>
          </div>
        </div>

        <div v-if="completed.length">
          <h4 class="todos__title">Shit done ({{ completed.length }})</h4>

          <div class="todos-container">
            <draggable
              v-model="completed"
              filter=".todo-item--edit"
              delay="100"
              :prevent-on-filter="false"
              :delay-on-touch-only="true"
            >
              <TodoItem
                v-for="todo in completed"
                :key="todo.id"
                :todo="todo"
                @check-todo="checkTodo"
                @remove-todo="removeTodo"
              />
            </draggable>
          </div>
        </div>
      </div>

      <transition name="slide">
        <AddTodo
          v-if="showAdd"
          @add-todo="addTodo"
          @toggle-show-add="toggleShowAdd"
        />
      </transition>

      <Fab :on-click="toggleShowAdd">Add</Fab>
    </template>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";

import TodoItem from "../components/TodoItem";
import Date from "../components/Date";
import User from "../components/User";
import Fab from "../components/Fab";
import AddTodo from "../components/AddTodo";
import LoadingIcon from "../../public/svg/loading.svg";
import draggable from "vuedraggable";

export default {
  name: "Todos",
  components: {
    TodoItem,
    Date,
    User,
    LoadingIcon,
    Fab,
    AddTodo,
    draggable,
  },
  data() {
    return { loading: true, showAdd: false };
  },
  computed: {
    ...mapState(["pendingTodos", "completedTodos"]),
    pending: {
      get() {
        return this.pendingTodos;
      },
      set(todos) {
        this.setTodos({ type: "pending", todos });
      },
    },
    completed: {
      get() {
        return this.completedTodos;
      },
      set(todos) {
        this.setTodos({ type: "completed", todos });
      },
    },
    hasNoTodos() {
      return !this.pending.length && !this.completed.length;
    },
  },
  mounted() {
    this.getTodos().then(() => {
      this.loading = false;
    });
  },
  methods: {
    ...mapActions(["getTodos"]),
    ...mapMutations(["addTodo", "setTodos", "removeTodo", "checkTodo"]),
    toggleShowAdd() {
      this.showAdd = !this.showAdd;
    },
  },
};
</script>

<style scoped lang="scss">
.todos {
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;

  &__header {
    align-items: baseline;
    display: flex;
    justify-content: space-between;
    padding: 2rem 0 1.25rem 0;
  }

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

  &__title {
    color: $white;
    margin: 0 0 0.75rem;
  }
}

.todos-container,
.todos-empty {
  background-color: $white;
  border: 2px solid $blue;
  border-radius: 1.25rem;
  margin-bottom: 1.75rem;
  overflow: hidden;
}

.todos-empty {
  padding: 1.25rem;
}

.slide-enter-active {
  transition: all 0.3s ease-out;
}
.slide-leave-active {
  transition: all 0.3s ease-in;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(100%);
}
</style>
