<template>
  <div class="date">
    <h1 class="date__day">{{ date }}</h1>

    <div class="date__info">
      <h4>{{ day }}</h4>
      <p>{{ monthYear }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Date",
  computed: {
    date() {
      return new Date().toLocaleDateString("en-UK", {
        day: "numeric",
      });
    },
    day() {
      return new Date().toLocaleDateString("en-UK", {
        weekday: "long",
      });
    },
    monthYear() {
      return new Date().toLocaleDateString("en-UK", {
        month: "short",
        year: "numeric",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.date {
  align-items: center;
  color: $white;
  display: flex;

  &__day {
    font-size: 3.25rem;
    margin: 0 0.75rem 0 0;
  }

  &__info {
    h4 {
      margin: 0;
    }
    p {
      margin: 0.25rem 0 0 0;
    }
  }
}
</style>
