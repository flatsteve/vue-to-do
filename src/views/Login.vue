<template>
  <div class="login">
    <h2 class="login__title">Login to your account</h2>

    <form>
      <label>Email</label>
      <input v-model="email" type="text" placeholder="e.g. joe@bananas.com" />

      <label>Password</label>
      <input v-model="password" type="password" placeholder="Your password" />

      <p v-show="error">{{ error }}</p>

      <Button
        :on-click="login"
        :disabled="!email || !password"
        class="login__button"
        >Login</Button
      >

      <p class="login__link">
        Don't have an account?
        <router-link to="/signup">Sign up here</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import * as firebase from "firebase/app";

import Button from "../components/Button";

export default {
  name: "Login",
  components: { Button },
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    login(e) {
      e.preventDefault();

      this.error = "";

      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.replace("todos");
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>

<style scoped lang="scss">
@import "../styles/login-signup.scss";
</style>
