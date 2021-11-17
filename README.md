# to-do-api

#### Motivação:

API simples construído para realizar testes de novas tecnologias e bibliotecas no back end.

#### End point(s):

| Método | URL          | body                                            | Descrição                         |
| ------ | ------------ | ----------------------------------------------- | --------------------------------- |
| POST   | /            | {"title": "title #01", "description #01"}       | *Adiciona uma nova task*          |
| GET    | /            |                                                 | *Obtem todas as task cadastradas* |
| PUT    | /{{task_id}} | {"title": "title update", "description update"} | *Atualiza uma task pelo id*       |
| DELETE | /{{task_id}} |                                                 | *Deleta uma task pelo id*         |

