import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: JSON.parse(localStorage.getItem("app_todos")) || []
  },

  mutations: {
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
