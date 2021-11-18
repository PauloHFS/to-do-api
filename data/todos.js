let todos = [
  {
    id: 0,
    title: '#00 task title',
    description: '#00 task description',
  },
  {
    id: 1,
    title: '#01 task title',
    description: '#01 task description',
  },
  {
    id: 2,
    title: '#02 task title',
    description: '#02 task description',
  },
  {
    id: 3,
    title: '#03 task title',
    description: '#03 task description',
  },
  {
    id: 4,
    title: '#04 task title',
    description: '#04 task description',
  },
];

const create = data => {
  let newEntry = { id: Date.now(), ...data };

  if (todos.length != 20) {
    todos.push(newEntry);
  }

  return newEntry;
};

const read = () => {
  return todos;
};

const update = (id, { title, description }) => {
  let isUpdated = false;

  todos = todos.map(value => {
    let newValue = value;

    if (value.id == id) {
      isUpdated = true;
      newValue = [value.id, title, description];
    }

    return newValue;
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
