const getAllTasks = async () => {
  const getResponse = await fetch("https://jsonplaceholder.typicode.com/todos");
  const tasksData = await getResponse.json();
  return { data: tasksData, responseStatus: getResponse.status };
};

const getSpecificTask = async (taskId) => {
  const getResponse = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${taskId}`,
  );
  const taskData = await getResponse.json();
  return { data: taskData, responseStatus: getResponse.status };
};

const patchTask = async (dataToPost, taskId) => {
  const patchResponse = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${taskId}`,
    {
      method: "PATCH",
      body: JSON.stringify(dataToPost),
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  const editedOrderData = await patchResponse.json();
  return { data: editedOrderData, responseStatus: patchResponse.status };
};

const deleteSpecificTask = async (taskId) => {
  const deleteResponse = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${taskId}`,
    {
      method: "DELETE",
    },
  );
  return { data: null, responseStatus: deleteResponse.status };
};

export const api = {
  getAllTasks,
  getSpecificTask,
  patchTask,
  deleteSpecificTask,
};
