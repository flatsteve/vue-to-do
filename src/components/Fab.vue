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
  align-self: flex-end;
  background-color: darken($blue, 15%);
  border-radius: 50%;
  box-shadow: 0px 5px 10px rgba($dark-blue, 0.5);
  border: none;
  bottom: 2rem;
  color: $white;
  height: $size;
  font-weight: bold;
  margin-right: -0.5rem;
  padding: 0.75rem 1rem;
  position: sticky;
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
