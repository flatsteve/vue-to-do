<template>
  <div class="saved-indicator">
    <p
      class="saved-indicator__text"
      :class="{ 'saved-indicator__text--saved': saved }"
    >
      <small>Changes saved</small>
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SavedIndicator",
  computed: {
    ...mapState(["saved"])
  }
};
</script>

<style scoped lang="scss">
.saved-indicator {
  &__text {
    color: $white;
    margin: 0.25rem 1.25rem 0 0;
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
