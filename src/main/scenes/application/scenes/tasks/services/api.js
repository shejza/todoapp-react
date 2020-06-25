import { headers } from "../../../../../../helpers/headers";
import { apiUrl } from "../../../../../../helpers/api-url";
import { handleResponse } from "../../../../../../helpers/handle-response";

export const apiCalls = {
  getToDos,
  createTask,
  editTask,
  deleteTask,
  markAll,
};

function getToDos() {
  const requestUrl = `${apiUrl}/tasks`;
  const requestOptions = {
    method: "GET",
    headers,
  };
  return fetch(requestUrl, requestOptions).then((response) => response.json());
}

function createTask(formValues) {
  const formData = new FormData();

  formData.append("title", formValues.title);
  const requestUrl = `${apiUrl}/tasks`;
  const requestOptions = {
    method: "POST",
    headers,
    body: formData,
  };
  return fetch(requestUrl, requestOptions).then((response) => response.json());
}

function editTask(formValues, todoId) {
  const formData = new FormData();
  console.log(formValues);
  formData.append("title", formValues.title);
  formData.append("completed", formValues.completed);
  const requestUrl = `${apiUrl}tasks/${todoId}`;
  const requestOptions = {
    method: "POST",
    headers,
    body: formData,
  };
  return fetch(requestUrl, requestOptions).then((response) => response.json());
}

function deleteTask(id) {
  const requestUrl = `${apiUrl}tasks/${id}`;

  const requestOptions = {
    method: "DELETE",
    headers,
  };
  return fetch(requestUrl, requestOptions).then(handleResponse);
}

function markAll(completed) {
  const requestUrl = `${apiUrl}tasks/mark-all/${completed}`;

  const requestOptions = {
    method: "POST",
    headers,
  };
  return fetch(requestUrl, requestOptions).then(handleResponse);
}
