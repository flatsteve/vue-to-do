<template>
  <div class="SavedIndicator">
    <p
      class="SavedIndicator__text"
      :class="{ 'SavedIndicator__text--saved': saved }"
    >
      <small>Changes saved</small>
    </p>
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
  &__text {
    color: $white;
    margin: 0.25rem 1.25rem 0.25rem 0;
    opacity: 0;
    text-align: right;
    transition: all 0.2s ease-in-out;
    transform: translateX(1.25rem);

    &--saved {
      opacity: 1;
      transform: translateX(0);
    }
  }
}
</style>
