<template>
  <button @click="onClick">
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    onClick: {
      type: Function,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
@import "../styles/colors";

button {
  background-color: $pink;
  border-radius: 0.25rem;
  box-shadow: 0px 2px 5px rgba($dark-blue, 0.3);
  border: none;
  color: $white;
  font-weight: bold;
  padding: 0.75rem 1rem;
  transition: all 0.3s ease-in;

  &:disabled {
    opacity: 0.6;
  }

  &:hover {
    box-shadow: none;
  }
}
</style>
