<template>
  <div
    class="todo-item"
    :class="{ 'todo-item--checked': todo.checked, 'todo-item--edit': edit }"
  >
    <div>
      <input
        v-if="edit"
        ref="editDescription"
        v-model="description"
        type="text"
        @keyup.enter="editTodo(todo)"
        @blur="editTodo(todo)"
      />

      <h4
        v-else
        v-linkify
        class="todo-item__description"
        @click="enableEditTodo"
        v-html="todo.description"
      ></h4>
    </div>

    <div class="todo-item__actions">
      <BinIcon
        v-show="todo.checked"
        class="todo-item__actions__delete"
        @click="$emit('remove-todo', todo)"
      />

      <CustomCheckbox
        :id="todo.id"
        :checked="todo.checked"
        @checked="$emit('check-todo', todo)"
      />
    </div>
  </div>
</template>

<script>
import linkify from "vue-linkify";

import CustomCheckbox from "@/components/CustomCheckbox";
import BinIcon from "../../public/svg/bin.svg";

export default {
  name: "TodoItem",
  components: { CustomCheckbox, BinIcon },
  directives: { linkify },
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      edit: false,
      description: this.todo.description,
    };
  },
  methods: {
    enableEditTodo() {
      this.edit = true;

      // Wait for DOM update before focusing on input
      this.$nextTick(() => {
        this.$refs.editDescription.focus();
      });
    },
    editTodo(todo) {
      if (!todo.description) {
        return this.$emit("remove-todo", todo);
      }

      this.$store.commit("updateTodo", {
        todo,
        description: this.description,
      });

      this.edit = false;
    },
  },
};
</script>

<style scoped lang="scss">
.todo-item {
  align-items: center;
  background-color: $white;
  border-bottom: 1px solid lighten($blue, 25%);
  display: flex;
  hyphens: auto;
  justify-content: space-between;
  padding: 1.25rem;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;

  &:last-of-type {
    border-bottom: none;
  }

  &--checked .todo-item__description {
    text-decoration: line-through;
  }

  &__actions {
    display: flex;

    &__delete {
      fill: $pink;
      margin-right: 1.25rem;
      transition: all 0.3s ease-in;
      width: 1rem;

      &:hover {
        cursor: pointer;
        fill: darken($pink, 20%);
      }
    }
  }

  &__description {
    margin: 0 0.75rem 0 0;
  }
}
</style>
