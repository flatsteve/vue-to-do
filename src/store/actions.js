import * as firebase from "firebase/app";
import { db } from "@/main";

export default {
  login(undefined, { credentials }) {
    return firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password);
  },
  signUp(undefined, { credentials }) {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(credentials.email, credentials.password);
  },
  signOut({ commit }) {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        commit({ type: "setUser", user: null });
        commit({ type: "receiveTodos", todos: [] });
      });
  },
  getTodos({ commit, state }) {
    return db
      .collection("todos")
      .doc(state.user.id)
      .get()
      .then(
        doc => {
          if (doc.exists) {
            const { data } = doc.data();

            commit("receiveTodos", data);
          }
        },
        err => {
          console.log(err);
        }
      )
      .catch(err => {
        console.log(err);
      });
  }
};
