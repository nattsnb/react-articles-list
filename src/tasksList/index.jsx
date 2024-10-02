import { api } from "../shared/api.js";
import { List, ListItem, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";

const { getAllTasks, getSpecificTask, patchTask, deleteSpecificTask } = api;

export function TasksList() {
  const [tasks, setTasks] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getAllTasks()
      .then((data) => setTasks(data))
      .catch((error) => {
        console.log("error fetching data", error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <div>
        {!isLoading ? (
          <List>
            {tasks.map((task) => (
              <li key={task.id}>
                <ul>
                  <ListItem>
                    <ListItemText primary={task.title} />
                  </ListItem>
                </ul>
              </li>
            ))}
          </List>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
