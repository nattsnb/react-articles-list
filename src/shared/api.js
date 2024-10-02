const getAllTasks = () => {
  return fetch(`https://jsonplaceholder.typicode.com/todos`).then((response) =>
    response.json(),
  );
};

const getSpecificTask = async (taskId) => {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${taskId}`).then(
    (response) => response.json(),
  );
};

const patchTask = async (dataToPost, taskId) => {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${taskId}`, {
    method: "PATCH",
    body: JSON.stringify(dataToPost),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

const deleteSpecificTask = async (taskId) => {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${taskId}`, {
    method: "DELETE",
  }).then((response) => response.json());
};

export const api = {
  getAllTasks,
  getSpecificTask,
  patchTask,
  deleteSpecificTask,
};
