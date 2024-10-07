const getAllTasks = () => {
  return fetch(`https://jsonplaceholder.typicode.com/todos`).then((res) =>
    res.json(),
  );
};

const getSpecificTask = (taskId) => {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${taskId}`).then(
    (res) => res.json(),
  );
};

const patchTask = (dataToPost, taskId) => {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${taskId}`, {
    method: "PATCH",
    body: JSON.stringify(dataToPost),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const deleteSpecificTask = (taskId) => {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${taskId}`, {
    method: "DELETE",
  });
};

export const api = {
  getAllTasks,
  getSpecificTask,
  patchTask,
  deleteSpecificTask,
};
