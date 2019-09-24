<template>
  <div class="login">
    <h2 class="login__title">Login to your account</h2>

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
        :on-click="login"
        :disabled="!email || !password"
        :loading="loading"
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
import Button from "../components/Button";

export default {
  name: "Login",
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
    login(e) {
      e.preventDefault();

      this.error = "";
      this.loading = true;
      const { email, password } = this;

      this.$store
        .dispatch({
          type: "login",
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
