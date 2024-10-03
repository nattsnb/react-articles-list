const getAllTasks = async (setTasksListFunction) => {
  const getResponse = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const tasksData = await getResponse.json();
  setTasksListFunction(tasksData);
};

const getSpecificTask = async (taskId, setActiveTaskFunction) => {
  const getResponse = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${taskId}`,
  );
  const taskData = await getResponse.json();
  setActiveTaskFunction(taskData);
};

const patchTask = async (dataToPost, taskId, setPatchResponseFunction) => {
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
  const patchData = await patchResponse.json();
  setPatchResponseFunction(patchData);
};

const deleteSpecificTask = async (taskId) => {
  const deleteResponse = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${taskId}`,
    {
      method: "DELETE",
    },
  );
  console.log(deleteResponse.status);
  return deleteResponse.status;
};

export const api = {
  getAllTasks,
  getSpecificTask,
  patchTask,
  deleteSpecificTask,
};
