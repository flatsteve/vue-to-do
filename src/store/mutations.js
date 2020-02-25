function removeTodoFromList(state, { type, id }) {
  state[`${type}Todos`] = state[`${type}Todos`].filter(todo => {
    return todo.id !== id;
  });
}

export default {
  // User mutations
  setUser(state, payload) {
    state.user = payload.user;
  },

  // Todo mutations
  receiveTodos(state, todos) {
    const pending = [];
    const complete = [];

    todos.forEach(todo => {
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

  saveTodos() {
    return false;
  },

  addTodo(state, description) {
    state.pendingTodos.push({
      id: Date.now().toString(),
      description: description,
      checked: false
    });
  },

  checkTodo(state, todo) {
    todo.checked = !todo.checked;
    debugger;

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
  }
};
