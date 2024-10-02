import { api } from "../shared/api.js";
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const { getAllTasks, getSpecificTask, patchTask, deleteSpecificTask } = api;

export function TasksList() {
  const [tasks, setTasks] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const flexContainer = {
    display: "flex",
    flexDirection: "row",
    padding: 0,
  };

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
          <Box sx={{ width: "100%", maxWidth: 600 }}>
            {tasks.map((task) => (
              <List key={task.id} style={flexContainer}>
                <ListItem>
                  <Link to={`/task/${task.id}`}>{task.title}</Link>
                </ListItem>
                <ListItemButton edge="end">
                  <Button variant={"contained"} style={{ minWidth: "80px" }}>
                    Details
                  </Button>
                </ListItemButton>
                <ListItemButton edge="end">
                  <Button variant={"contained"} style={{ minWidth: "80px" }}>
                    Delete
                  </Button>
                </ListItemButton>
              </List>
            ))}
          </Box>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
