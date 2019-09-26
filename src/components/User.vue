<template>
  <div
    v-click-outside="hideShowAccount"
    class="user"
    :class="{ 'user--open': showAccount }"
  >
    <div class="user__name" @click="toggleShowAccount">
      {{ user.email }}
      <ChevronIcon />
    </div>

    <SavedIndicator />

    <transition name="fade">
      <div v-show="showAccount" class="user__menu">
        <Button :on-click="signOut">Sign out</Button>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";

import Button from "./Button";
import SavedIndicator from "./SavedIndicator";
import ChevronIcon from "../../public/svg/chevron.svg";

export default {
  name: "User",
  components: { Button, ChevronIcon, SavedIndicator },
  data() {
    return {
      showAccount: false
    };
  },
  computed: {
    ...mapState(["user"])
  },
  methods: {
    toggleShowAccount() {
      this.showAccount = !this.showAccount;
    },
    hideShowAccount() {
      this.showAccount = false;
    },
    signOut() {
      this.$store.dispatch("signOut").then(() => {
        this.$router.replace("login");
      });
    }
  }
};
</script>

<style scoped lang="scss">
.user {
  position: relative;

  &--open {
    .user__name svg {
      transform: rotate(180deg);
    }
  }

  &__name {
    color: $white;
    font-weight: bold;
    max-width: 12rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:hover {
      cursor: pointer;
    }

    svg {
      fill: $white;
      transition: all 0.2s ease-in;
      width: 0.9rem;
    }
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

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(1.25rem);
}
</style>
