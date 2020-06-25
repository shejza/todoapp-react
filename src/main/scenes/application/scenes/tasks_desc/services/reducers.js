export function todosdesc(state = {}, action) {
  switch (action.type) {
    case "TODOS_DESC_GETALL":
      return {
        todosdesc: action.todosdesc,
      };
    case "CREATE_SUCCESS":
      return {
        todosdesc: [...state.todosdesc, action.todosdesc],
      };
    case "DELETE_TASK_DESC": {
      return {
        todosdesc: state.todosdesc.filter((todo) => todo.id !== action.id),
      };
    }
    default:
      return state;
  }
}
