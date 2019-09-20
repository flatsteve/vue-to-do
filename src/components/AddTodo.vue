<template>
  <div v-click-outside="close" class="todos-add">
    <div class="todos-add__close" @click="close">
      <CloseIcon />
    </div>

    <form class="todos-add__controls">
      <input
        v-model="description"
        type="text"
        placeholder="e.g. Eat that frog"
        autofocus
      />

      <Button
        :disabled="!description"
        :on-click="addTodo"
        class="todos-add__button"
        type="submit"
        >Add todo</Button
      >
    </form>
  </div>
</template>

<script>
import Button from "../components/Button";
import CloseIcon from "../../public/svg/close.svg";

export default {
  name: "AddTodo",
  components: { Button, CloseIcon },
  data() {
    return {
      description: ""
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();

      this.$emit("addTodo", this.description);
      this.description = "";
      this.$emit("toggleShowAdd");
    },
    close() {
      this.$emit("toggleShowAdd");
    }
  }
};
</script>

<style scoped lang="scss">
.todos-add {
  align-items: center;
  background-color: $dark-blue;
  border-top-left-radius: 1.25rem;
  border-top-right-radius: 1.25rem;
  bottom: 0;
  display: flex;
  left: 0;
  height: 10rem;
  justify-content: center;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 9999;

  &__close {
    background-color: $dark-blue;
    padding: 0.75rem;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    margin-left: -0.75rem;
    top: -0.75rem;

    &:hover {
      cursor: pointer;
    }

    svg {
      fill: $white;
      height: 1.5rem;
      width: 1.5rem;
    }
  }

  &__button {
    margin-left: 0.75rem;
  }

  &__controls {
    display: flex;
  }
}
</style>
