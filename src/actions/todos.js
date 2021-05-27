import API from "goals-todos-api";

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

const addTodo = todo => ({
  type: ADD_TODO,
  payload: todo,
});

const removeTodo = id => ({
  type: REMOVE_TODO,
  id,
});

const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});

export const handleAddTodo = (name, cb) => dispatch => {
  return API.saveTodo(name)
    .then(todo => {
      dispatch(addTodo(todo));
      cb();
    })
    .catch(() => {
      alert("There was an error. Try again.");
    });
};

export const handleDeleteTodo = todo => dispatch => {
  dispatch(removeTodo(todo.id));
  return API.deleteTodo(todo.id).catch(() => {
    dispatch(addTodo(todo));
    alert("An error occurred. Try again.");
  });
};

export const handleToggleTodo = todo => dispatch => {
  dispatch(toggleTodo(todo.id));
  return API.saveTodoToggle(todo.id).catch(() => {
    dispatch(toggleTodo(todo.id));
    alert("An error occurred. Try again.");
  });
};
