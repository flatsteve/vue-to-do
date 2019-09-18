import Vue from "vue";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import vClickOutside from "v-click-outside";

import { firebaseConfig } from "./services/firebase";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import "./registerServiceWorker";

Vue.use(vClickOutside);
Vue.config.productionTip = false;

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
