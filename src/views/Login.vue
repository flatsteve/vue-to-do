<template>
  <div class="login">
    <h2 class="login__title">Login to your account</h2>

    <form>
      <label>Email</label>
      <input v-model="email" type="text" placeholder="e.g. joe@bananas.com" />

      <label>Password</label>
      <input v-model="password" type="text" placeholder="Your password" />

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

  &__link {
    text-align: center;

    a {
      color: $white;
    }
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
