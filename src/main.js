import Vue from "vue";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;

let app;

const firebaseConfig = {
  apiKey: "AIzaSyAF0ixKrukUjN7XnETJieygHxGFXW0M6Bk",
  authDomain: "vue-to-do-4fa82.firebaseapp.com",
  databaseURL: "https://vue-to-do-4fa82.firebaseio.com",
  projectId: "vue-to-do-4fa82",
  storageBucket: "vue-to-do-4fa82.appspot.com",
  messagingSenderId: "620060105724",
  appId: "1:620060105724:web:a699ea67cf75948ab07079"
};

firebase.initializeApp(firebaseConfig);

// TODO find better solution
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
