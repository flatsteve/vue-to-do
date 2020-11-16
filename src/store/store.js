import Vue from "vue";
import Vuex from "vuex";

import actions from "@/store/actions";
import mutations from "@/store/mutations";

import { db } from "@/main";

Vue.use(Vuex);

const mutationsToSaveToDB = [
  "setTodos",
  "addTodo",
  "updateTodo",
  "checkTodo",
  "removeTodo",
];

const store = new Vuex.Store({
  state: {
    user: null,
    pendingTodos: [],
    completedTodos: [],
    saved: false,
  },
  mutations,
  actions,
  // Store the result of important todo mutations in the db for logged in users
  plugins: [
    (store) => {
      let timeoutId;

      store.subscribe((mutation, state) => {
        if (mutationsToSaveToDB.includes(mutation.type) && state.user) {
          db.collection("todos")
            .doc(state.user.id)
            .set({ data: [...state.pendingTodos, ...state.completedTodos] })
            .then(
              () => {
                store.commit("setSaved", true);

                if (timeoutId) {
                  clearTimeout(timeoutId);
                }

                timeoutId = setTimeout(() => {
                  store.commit("setSaved", false);
                }, 2000);
              },
              (error) => {
                console.log(error);
              }
            );
        }
      });
    },
  ],
});

export default store;
