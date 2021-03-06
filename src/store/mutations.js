function removeTodoFromList(state, { type, id }) {
  state[`${type}Todos`] = state[`${type}Todos`].filter((todo) => {
    return todo.id !== id;
  });
}

export default {
  // User mutations
  setUser(state, user) {
    state.user = user;
  },
  // Todo mutations
  receiveTodos(state, todos) {
    const pending = [];
    const complete = [];

    todos.forEach((todo) => {
      if (todo.checked) {
        return complete.push(todo);
      }

      pending.push(todo);
    });

    state.pendingTodos = pending;
    state.completedTodos = complete;
  },
  setTodos(state, { type, todos }) {
    state[`${type}Todos`] = todos;
  },
  updateTodo(state, { todo: updateTodo, description }) {
    const type = updateTodo.checked ? "completed" : "pending";

    state[`${type}Todos`] = state[`${type}Todos`].map((todo) => {
      if (todo.id === updateTodo.id) {
        todo.description = description;
      }

      return todo;
    });
  },
  addTodo(state, description) {
    state.pendingTodos.push({
      id: Date.now().toString(),
      description: description,
      checked: false,
    });
  },
  checkTodo(state, todo) {
    todo.checked = !todo.checked;

    if (todo.checked) {
      removeTodoFromList(state, { type: "pending", id: todo.id });
      state.completedTodos.push(todo);
    } else {
      removeTodoFromList(state, { type: "completed", id: todo.id });
      state.pendingTodos.push(todo);
    }
  },
  removeTodo(state, todo) {
    if (todo.checked) {
      removeTodoFromList(state, { type: "completed", id: todo.id });
    } else {
      removeTodoFromList(state, { type: "pending", id: todo.id });
    }
  },
  // UI mutations
  setSaved(state, value) {
    state.saved = value;
  },
};
