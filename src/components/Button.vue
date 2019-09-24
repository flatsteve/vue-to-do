<template>
  <button :class="{ loading }" @click="onClick">
    <LoadingIcon v-show="loading" />

    <slot>Button</slot>
  </button>
</template>

<script>
import LoadingIcon from "../../public/svg/loading.svg";

export default {
  name: "Button",
  components: { LoadingIcon },
  props: {
    onClick: {
      type: Function,
      required: true
    },
    loading: {
      type: Boolean,
      required: false
    }
  }
};
</script>

<style scoped lang="scss">
button {
  background-color: $pink;
  border-radius: 0.25rem;
  box-shadow: 0px 2px 5px rgba($dark-blue, 0.3);
  border: none;
  color: $white;
  display: flex;
  justify-content: center;
  font-weight: bold;
  padding: 0.75rem 1rem;
  transition: all 0.3s ease-in;

  &:disabled {
    opacity: 0.7;
  }

  &:hover,
  &:focus {
    box-shadow: none;
    background-color: darken($pink, 5%);
  }
}

.loading {
  pointer-events: none;
  opacity: 0.7;

  svg {
    margin-right: 0.5rem;
    width: 1rem;
  }
}
</style>
