<template>
  <div class="SavedIndicator">
    <small
      class="SavedIndicator__text"
      :class="{ 'SavedIndicator__text--saved': saved }"
      >Changes saved</small
    >
  </div>
</template>

<script>
export default {
  name: "SavedIndicator",
  computed: {
    saved() {
      return this.$store.state.saved;
    }
  }
};
</script>

<style scoped lang="scss">
.SavedIndicator {
  display: flex;
  justify-content: flex-end;

  &__text {
    color: $white;
    margin: 0 1.25rem 0.25rem;
    opacity: 0;
    transition: all 0.2s ease-in-out;
    transform: translateX(1.25rem);

    &--saved {
      opacity: 1;
      transform: translateX(0);
    }
  }
}
</style>
