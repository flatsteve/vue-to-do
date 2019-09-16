<template>
  <div class="todo" :class="{ 'todo--checked': todo.checked }">
    <div>
      <input
        v-show="edit"
        ref="editDescription"
        v-model="editDescription"
        type="text"
        @blur="() => editTodo(todo.id)"
      />

      <h4 v-show="!edit" class="todo__description" @click="enableEditTodo">
        {{ todo.description }}
      </h4>
    </div>

    <div class="todo__actions">
      <BinIcon
        v-if="todo.checked"
        class="todo__actions__delete"
        @click="() => removeTodo(todo.id)"
      />

      <CustomCheckbox
        :id="todo.id"
        :checked="todo.checked"
        @checked="checkTodo"
      />
    </div>
  </div>
</template>

<script>
import CustomCheckbox from "./CustomCheckbox";
import BinIcon from "../../public/svg/bin.svg";

export default {
  name: "TodoItem",
  components: { CustomCheckbox, BinIcon },
  props: {
    todo: {
      default: () => [],
      type: [Array, Object]
    }
  },
  data() {
    return {
      edit: false,
      editDescription: this.todo.description
    };
  },
  methods: {
    checkTodo(id) {
      this.$store.commit({ type: "checkTodo", id });
    },
    removeTodo(id) {
      this.$store.commit({ type: "removeTodo", id });
    },
    enableEditTodo() {
      this.edit = true;

      // Wait for DOM update before focusing on input
      this.$nextTick(() => {
        this.$refs.editDescription.focus();
      });
    },
    editTodo(id) {
      this.$store.commit({
        type: "editTodo",
        id,
        description: this.editDescription
      });

      this.edit = false;
    }
  }
};
</script>

<style scoped lang="scss">
@import "../styles/colors";

.todo {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1.25rem;

  &--checked .todo__description {
    text-decoration: line-through;
  }

  &__actions {
    display: flex;

    &__delete {
      fill: $pink;
      margin-right: 1.25rem;
      width: 1rem;
    }
  }

  &__description {
    margin: 0;
  }
}
</style>
