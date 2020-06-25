import { apiCalls } from "./api";

export const actions = {
  getAllDesc,
  create,
  deleteTaskDesc,
};

function getAllDesc(selectedId) {
  return (dispatch) => {
    apiCalls
      .getToDosDesc(selectedId)
      .then((todosdesc) => dispatch(success(todosdesc)));
  };

  function success(todosdesc) {
    return {
      type: "TODOS_DESC_GETALL",
      todosdesc,
    };
  }
}

function create(formValues, taskId) {
  return (dispatch) => {
    // console.log(formValues);
    apiCalls.createTask(formValues, taskId).then((data) => {
      dispatch(success(data));
    });
  };

  function success(todosdesc) {
    return {
      type: "CREATE_SUCCESS",
      todosdesc,
    };
  }
}

function deleteTaskDesc(id) {
  console.log(id);
  return (dispatch) => {
    apiCalls.deleteTaskDesc(id).then(() => {
      dispatch(success(id));
    });
  };

  function success(id) {
    return {
      type: "DELETE_TASK_DESC",
      id,
    };
  }
}
