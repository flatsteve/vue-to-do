import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: null,
    todos: JSON.parse(localStorage.getItem("app_todos")) || []
  },

  mutations: {
    // User mutations
    setUser(state, payload) {
      state.user = payload.user;
    },

    // Todo mutations
    addTodo(state, payload) {
      state.todos.push({
        id: Date.now().toString(),
        description: payload.description,
        checked: false
      });
    },

    checkTodo(state, payload) {
      const todo = state.todos.find(todo => {
        return todo.id === payload.id;
      });

      todo.checked = !todo.checked;
    },

    removeTodo(state, payload) {
      state.todos = state.todos.filter(todo => {
        return todo.id !== payload.id;
      });
    },

    editTodo(state, payload) {
      const todo = state.todos.find(todo => {
        return todo.id === payload.id;
      });

      todo.description = payload.description;
    }
  },

  // Store todos in local storage after each mutation of the store
  plugins: [
    store => {
      store.subscribe((mutation, state) => {
        localStorage.setItem("app_todos", JSON.stringify(state.todos));
      });
    }
  ]
});

export default store;
