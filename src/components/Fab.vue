<template>
  <button @click="onClick">
    <slot>Fab</slot>
  </button>
</template>

<script>
export default {
  name: "Fab",
  props: {
    onClick: {
      type: Function,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
$size: 4.75rem;

button {
  background-color: $pink;
  border-radius: 50%;
  box-shadow: 0px 2px 5px rgba($dark-blue, 0.3);
  border: none;
  bottom: 2.5rem;
  color: $white;
  height: $size;
  font-weight: bold;
  padding: 0.75rem 1rem;
  position: fixed;
  right: 2.5rem;
  transition: all 0.3s ease-in;
  width: $size;
  z-index: 999;

  &:disabled {
    opacity: 0.7;
  }

  &:hover {
    box-shadow: none;
  }
}
</style>
