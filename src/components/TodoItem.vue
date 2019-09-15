<template>
  <div class="todo" v-bind:class="{'todo--checked': todo.checked}">
    <h4 class="todo__description">{{todo.description}}</h4>

    <CustomCheckbox @checked="checkTodo" :id="todo.id" :checked="todo.checked" />
  </div>
</template>

<script>
import CustomCheckbox from "./CustomCheckbox";

export default {
  name: "TodoItem",
  props: ["todo"],
  components: { CustomCheckbox },
  methods: {
    checkTodo(id) {
      this.$store.commit({ type: "checkTodo", id });
    }
  }
};
</script>

<style scoped lang="scss">
.todo {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1.25rem;

  &--checked .todo__description {
    text-decoration: line-through;
  }

  &__description {
    margin: 0;
  }
}
</style>