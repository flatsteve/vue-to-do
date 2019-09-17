<template>
  <div class="user">
    <div class="user__name" @click="toggleShowAccount">info@flatsteve.com</div>

    <div v-show="showAccount" class="user__menu">
      <Button :on-click="signOut">Sign out</Button>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import Button from "../components/Button";

export default {
  name: "User",
  components: { Button },
  data() {
    return {
      showAccount: false
    };
  },
  methods: {
    toggleShowAccount() {
      this.showAccount = !this.showAccount;
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    }
  }
};
</script>

<style scoped lang="scss">
.user {
  position: relative;

  &__name {
    color: $white;
    font-weight: bold;
  }

  &__menu {
    align-items: center;
    background-color: $blue;
    border: 2px solid $white;
    border-radius: 0.25rem;
    box-shadow: 0px 2px 5px rgba($dark-blue, 0.3);
    display: flex;
    justify-content: center;
    position: absolute;
    padding: 1.25rem;
    right: 0;
    top: 1.75rem;
    min-width: 12rem;
    z-index: 9;
  }
}
</style>
