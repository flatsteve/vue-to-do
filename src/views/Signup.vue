<template>
  <div class="login">
    <h2 class="login__title">Sign up to get started</h2>

    <form>
      <label>Email</label>
      <input
        v-model="email"
        type="text"
        placeholder="e.g. joe@bananas.com"
        autofocus
      />

      <label>Password</label>
      <input v-model="password" type="password" placeholder="Your password" />

      <p v-show="error" class="login__error">{{ error }}</p>

      <Button
        :on-click="signup"
        :disabled="!email || !password"
        class="login__button"
        >Sign up</Button
      >

      <p class="login__link">
        Already got an account?
        <router-link to="/login">Log in here</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import Button from "../components/Button";

export default {
  name: "Signup",
  components: { Button },
  data() {
    return {
      email: "",
      password: "",
      error: "",
      loading: false
    };
  },
  methods: {
    signup(e) {
      e.preventDefault();

      this.error = "";
      this.loading = true;
      const { email, password } = this;

      this.$store
        .dispatch({
          type: "signUp",
          credentials: { email, password }
        })
        .then(() => {
          this.$router.replace("todos");
        })
        .catch(error => {
          this.error = error.message;
          this.loading = false;
        });
    }
  }
};
</script>

<style scoped lang="scss">
@import "../styles/login-signup.scss";
</style>
