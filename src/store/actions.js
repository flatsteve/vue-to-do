import firebase from "firebase/app";
import { db } from "@/main";

export default {
  login(undefined, { email, password }) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },
  signUp(undefined, { email, password }) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  },
  signOut({ commit }) {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        commit("setUser", null);
        commit("receiveTodos", []);
      });
  },
  getTodos({ commit, state }) {
    return db
      .collection("todos")
      .doc(state.user.id)
      .get()
      .then(
        (doc) => {
          if (doc.exists) {
            const { data } = doc.data();

            commit("receiveTodos", data);
          }
        },
        (err) => {
          console.log(err);
        }
      )
      .catch((err) => {
        console.log(err);
      });
  },
};
