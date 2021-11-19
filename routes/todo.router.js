import { Router } from 'express';

import { create, read, update, del } from '../data/todos.js';

const todoRouter = Router();

todoRouter.post('/', (request, response) => {
  let responseBody = {};
  let status_code = 200;

  if (request.body) {
    responseBody = create(request.body);
  } else {
    status_code = 400;
  }
  response.status(status_code).send(responseBody);
});

todoRouter.get('/', (request, response) => {
  response.status(200).send(read());
});

todoRouter.get('/:id', (request, response) => {
  response.status(200).send(read(Number.parseInt(request.params.id)));
});

todoRouter.put('/:id', (request, response) => {
  let responseBody = {
    error: true,
    message: "can't update",
  };
  let status_code = 400;

  if (request.body && update(request.params.id, request.body)) {
    responseBody = { id: request.params.id, ...request.body };
    status_code = 200;
  }

  response.status(status_code).send(responseBody);
});

todoRouter.delete('/:id', (request, response) => {
  let responseBody = {
    error: true,
    message: "can't delete",
  };
  let status_code = 400;

  if (request.body && del(Number.parseInt(request.params.id))) {
    responseBody = { error: false, message: 'Sucess!' };
    status_code = 200;
  }

  response.status(status_code).send(responseBody);
});

export default todoRouter;
