import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      { id: 1, description: "Test todo" },
      { id: 2, description: "Another test todo" }
    ]
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    }
  },
  actions: {}
});
