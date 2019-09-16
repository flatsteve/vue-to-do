<template>
  <div class="todo" :class="{ 'todo--checked': todo.checked }">
    <h4 class="todo__description">{{ todo.description }}</h4>

    <CustomCheckbox
      :id="todo.id"
      :checked="todo.checked"
      @checked="checkTodo"
    />
  </div>
</template>

<script>
import CustomCheckbox from "./CustomCheckbox";

export default {
  name: "TodoItem",
  components: { CustomCheckbox },
  props: {
    todo: {
      default: () => [],
      type: [Array, Object]
    }
  },
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
