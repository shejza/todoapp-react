import { act } from "react-dom/test-utils";

export function todos(state = {}, action) {
  switch (action.type) {
    case "TODOS_GETALL":
      return {
        todos: action.todos,
      };
    case "TODOS_ADD":
      return {
        todos: [action.todo, ...state.todos],
      };
    case "TODOS_EDIT":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.todo.id ? action.todo : todo
        ),
      };
    case "DELETE_TASK": {
      return {
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    }
    case "MARK_ALL": {
      return {
        todos: state.todos.map((todo) =>
          !!action.completed
            ? { ...todo, completed: 1 }
            : { ...todo, completed: 0 }
        ),
      };
    }
    default:
      return state;
  }
}
