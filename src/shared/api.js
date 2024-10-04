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

const patchTask = async (dataToPost, taskId, setTaskBeingEditedFunction) => {
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
  if (patchResponse.status === 200) {
    setTaskBeingEditedFunction(false);
    console.log("Patch succeeded");
  } else {
    console.log("Patch didn't succeed" + patchResponse.status);
  }
};

const deleteSpecificTask = async (taskId) => {
  const deleteResponse = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${taskId}`,
    {
      method: "DELETE",
    },
  );
  if (deleteResponse.status === 200) {
    console.log("Delete succeeded");
  } else {
    console.log("Delete didn't succeed" + deleteResponse.status);
  }
};

export const api = {
  getAllTasks,
  getSpecificTask,
  patchTask,
  deleteSpecificTask,
};
