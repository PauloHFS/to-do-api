let todos = [
  {
    id: 1637336376732,
    title: '#00 task title',
    description: '#00 task description',
  },
  {
    id: 1637336376733,
    title: '#01 task title',
    description: '#01 task description',
  },
  {
    id: 1637336376734,
    title: '#02 task title',
    description: '#02 task description',
  },
  {
    id: 1637336376735,
    title: '#03 task title',
    description: '#03 task description',
  },
  {
    id: 1637336376736,
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

const read = (id = undefined) => {
  let data = todos;

  if (id != undefined) {
    data = todos.find(todo => todo.id === id);
  }

  return data;
};

const update = (id, { title, description }) => {
  let isUpdated = false;

  todos = todos.map(value => {
    let newValue = value;

    if (value.id == id) {
      isUpdated = true;
      newValue = { id: value.id, title: title, description: description };
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
