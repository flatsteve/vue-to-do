<template>
  <div class="login">
    <h2 class="login__title">Signup to get started</h2>

    <form>
      <label>Email</label>
      <input v-model="email" type="text" placeholder="e.g. joe@bananas.com" />

      <label>Password</label>
      <input v-model="password" type="text" placeholder="Your password" />

      <p v-show="error">{{ error }}</p>

      <Button
        :on-click="signup"
        :disabled="!email || !password"
        class="login__button"
        >Signup</Button
      >

      <p>
        Already got an account?
        <router-link to="/login">Log in here</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import * as firebase from "firebase/app";

import Button from "../components/Button";

export default {
  name: "Signup",
  components: { Button },
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    signup(e) {
      e.preventDefault();

      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          console.log(user);
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>

<style scoped lang="scss">
@import "../styles/colors";

.login {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;

  &__title {
    color: $white;
    margin: 0 0 2.5rem;
  }

  &__button {
    margin-top: 0.25rem;
    width: 100%;
  }
}

form {
  max-width: 20rem;
}

label {
  display: block;
  margin-bottom: 0.25rem;
}

input {
  margin-bottom: 1.25rem;
  width: 100%;
}
</style>
