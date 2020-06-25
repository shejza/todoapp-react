import { headers } from "../../../../../../helpers/headers";
import { apiUrl } from "../../../../../../helpers/api-url";
import { handleResponse } from "../../../../../../helpers/handle-response";

export const apiCalls = {
  getToDosDesc,
  createTask,
  deleteTaskDesc,
};

function getToDosDesc(tasksId) {
  const requestUrl = `${apiUrl}tasks/${tasksId}/tasksdescription`;
  const requestOptions = {
    method: "GET",
    headers,
  };
  return fetch(requestUrl, requestOptions).then((response) => response.json());
}

function createTask(formValues, tasksId) {
  const formData = new FormData();

  formData.append("description", formValues.description);
  const requestUrl = `${apiUrl}tasks/${tasksId}/tasksdescription`;
  const requestOptions = {
    method: "POST",
    headers,
    body: formData,
  };
  return fetch(requestUrl, requestOptions).then((response) => response.json());
}

function deleteTaskDesc(id) {
  const requestUrl = `${apiUrl}/tasks/${id}/tasksdescription/${id}`;

  const requestOptions = {
    method: "DELETE",
    headers,
  };
  return fetch(requestUrl, requestOptions).then(handleResponse);
}
