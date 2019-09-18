<template>
  <div id="app">
    <div class="app__container">
      <div v-show="loading" class="app__loading">
        <p>Warming up</p>
        <LoadingIcon />
      </div>

      <router-view v-show="!loading" />
    </div>
  </div>
</template>

<script>
import LoadingIcon from "../public/svg/loading.svg";

import * as firebase from "firebase/app";

export default {
  name: "App",
  components: { LoadingIcon },
  data() {
    return {
      loading: true
    };
  },
  beforeCreate() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.commit({
          type: "setUser",
          user: {
            id: user.uid,
            email: user.email
          }
        });

        if (this.$router.name !== "todos") {
          this.$router.replace("todos");
        }
      }

      this.loading = false;
    });
  }
};
</script>

<style lang="scss">
@import url("~normalize.css");

@import "./styles/colors";
@import "./styles/global";

#app {
  background-image: linear-gradient(
    to right bottom,
    #d16ba5,
    #c777b9,
    #ba83ca,
    #aa8fd8,
    #9a9ae1,
    #8aa7ec,
    #79b3f4,
    #69bff8,
    #52cffe,
    #41dfff,
    #46eefa,
    #5ffbf1
  );
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  min-height: 100vh;
}

.app__container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 50rem;
  padding: 0 1.25rem;
}

.app__loading {
  align-items: center;
  color: $white;
  display: flex;
  flex-direction: column;
  font-style: italic;
  justify-content: center;
  min-height: 100vh;

  svg {
    margin-top: 0.75rem;
    width: 2.5rem;
  }
}
</style>
