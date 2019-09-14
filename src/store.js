import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: JSON.parse(localStorage.getItem("app_todos")) || []
  },
  mutations: {
    addTodo(state, payload) {
      let todoId;

      if (state.todos.length > 0) {
        todoId = state.todos.length + 1;
      } else {
        todoId = 0;
      }

      console.log(todoId);

      state.todos.push({
        id: todoId,
        description: payload.description
      });
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
