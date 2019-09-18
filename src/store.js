import Vue from "vue";
import Vuex from "vuex";

import { db } from "./main";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: null,
    todos: []
  },

  mutations: {
    // User mutations
    setUser(state, payload) {
      state.user = payload.user;
    },

    // Todo mutations
    receiveTodos(state, payload) {
      state.todos = payload.todos;
    },

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
        if (mutation.type !== "setUser") {
          db.collection("todos")
            .doc(state.user.id)
            .set({ data: state.todos });
        }
      });
    }
  ]
});

export default store;
