import { apiCalls } from "./api";
import { todos } from "./reducers";

export const actions = {
  getAll,
  create,
  edit,
  deleteTask,
  markAll,
};

function getAll() {
  return (dispatch) => {
    apiCalls.getToDos().then((todos) => dispatch(success(todos)));
  };

  function success(todos) {
    return {
      type: "TODOS_GETALL",
      todos,
    };
  }
}

function create(formValues) {
  return (dispatch) => {
    apiCalls.createTask(formValues).then((data) => {
      dispatch(success(data));
    });
  };

  function success(todo) {
    return {
      type: "TODOS_ADD",
      todo,
    };
  }
}
function edit(formValues, todoId) {
  return (dispatch) => {
    apiCalls.editTask(formValues, todoId).then((data) => {
      dispatch(success(data));
    });
  };

  function success(todo) {
    return {
      type: "TODOS_EDIT",
      todo,
    };
  }
}

function deleteTask(id) {
  return (dispatch) => {
    apiCalls.deleteTask(id).then(() => {
      dispatch(success(id));
    });
  };

  function success(id) {
    return {
      type: "DELETE_TASK",
      id,
    };
  }
}

function markAll(completed) {
  return (dispatch) => {
    apiCalls.markAll(completed).then(() => {
      dispatch(success(completed));
    });
  };

  function success(completed) {
    return {
      type: "MARK_ALL",
      completed,
    };
  }
}
