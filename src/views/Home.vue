<template>
  <div class="home">
    <h1>Vue playground</h1>

    <Todo />
  </div>
</template>

<script>
import Todo from "@/components/Todo.vue";

export default {
  name: "home",
  components: {
    Todo
  }
};
</script>
