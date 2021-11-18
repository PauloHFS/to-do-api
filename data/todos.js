let todos = [
  {
    id: 0,
    title: 'first task title',
    description: 'first task description',
  },
];

const create = data => {
  let newEntry = { id: Date.now(), ...data };
  todos.push(newEntry);
  return newEntry;
};

const read = () => {
  return todos;
};

const update = (id, { title, description }) => {
  let isUpdated = todos.some(value => {
    let isValue = false;

    if (value.id == id) {
      value.title = title;
      value.description = description;

      isValue = true;
    }

    return isValue;
  });

  return isUpdated;
};

const del = id => {
  let isDeleted = false;

  todos = todos.reduce((acc, todo) => {
    const nextTodos = [...acc];

    if (todo.id !== id) nextTodos.push(todo);
    else isDeleted = true;

    return nextTodos;
  }, []);

  return isDeleted;
};

export { create, read, update, del };
