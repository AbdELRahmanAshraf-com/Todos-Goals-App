import { ADD_TODO } from "../actions/todos";
import { ADD_GOAL } from "../actions/goals";

const checker = store => next => action => {
  if (
    action.type === ADD_TODO &&
    action.payload.name.toLowerCase().includes("bitcoin")
  ) {
    return alert("Nope, That's a bad Idea");
  }

  if (
    action.type === ADD_GOAL &&
    action.payload.name.toLowerCase().includes("bitcoin")
  ) {
    return alert("Nope, That's a bad Idea");
  }

  return next(action);
};

export default checker;
