export const getTodos = () => $.ajax({
  method: 'GET',
  url: 'api/todos'
});

export const makeTodo = (todo) => $.ajax({
  method: 'POST',
  url: 'api/todos',
  data: {todo: todo},
  dateType: 'json'
});
