<template>
  <div class="login">
    <h2 class="login__title">Login to your account</h2>

    <form>
      <label>Email</label>
      <input v-model="email" type="text" placeholder="e.g. joe@bananas.com" />

      <label>Password</label>
      <input v-model="password" type="text" placeholder="Your password" />

      <Button
        :on-click="login"
        :disabled="!email || !password"
        class="login__button"
        >Login</Button
      >
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
      password: ""
    };
  },
  methods: {
    login(e) {
      e.preventDefault();

      console.log(this.email);
      console.log(this.password);
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
