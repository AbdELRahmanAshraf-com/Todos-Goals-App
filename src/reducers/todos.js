import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actions/todos";
import { RECEIVE_DATA } from "../actions/shared";

export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);

    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id !== action.id
          ? todo
          : // : Object.assign({}, todo, { read: !todo.complete }
            { ...todo, complete: !todo.complete }
      );

    case RECEIVE_DATA:
      return action.todos;

    default:
      return state;
  }
}
