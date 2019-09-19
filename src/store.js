import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "firebase/app";

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

  actions: {
    login(undefined, { credentials }) {
      return firebase
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password);
    },
    signUp(undefined, { credentials }) {
      return firebase
        .auth()
        .createUserWithEmailAndPassword(
          credentials.email,
          credentials.password
        );
    },
    signOut({ commit }) {
      return firebase
        .auth()
        .signOut()
        .then(() => {
          commit({ type: "setUser", user: null });
        });
    },
    getTodos({ commit, state }) {
      return db
        .collection("todos")
        .doc(state.user.id)
        .get()
        .then(doc => {
          if (doc.exists) {
            const { data } = doc.data();
            commit({ type: "receiveTodos", todos: data });
          }
        });
    }
  },

  // Store the result of any todo mutation in the db
  plugins: [
    store => {
      store.subscribe((mutation, state) => {
        if (mutation.type.includes("Todo")) {
          db.collection("todos")
            .doc(state.user.id)
            .set({ data: state.todos });
        }
      });
    }
  ]
});

export default store;
