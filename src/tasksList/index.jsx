import { api } from "../shared/api.js";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./tasksList.module.css";

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
    api
      .getAllTasks(setTasks)
      .catch((error) => {
        console.log("error fetching data", error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <div>
        {!isLoading ? (
          <Box sx={{ width: "100%", maxWidth: 750 }}>
            {tasks.map((task) => (
              <List key={task.id} style={flexContainer}>
                <ListItem>
                  <Typography variant="h6" gutterBottom>
                    <Link to={`/task/${task.id}`}>{task.title}</Link>
                  </Typography>
                </ListItem>
                <ListItemButton edge="end">
                  <Button
                    variant={"contained"}
                    style={{ minWidth: "80px" }}
                    color="secondary"
                  >
                    Edit
                  </Button>
                </ListItemButton>
                <ListItemButton edge="end">
                  <Button
                    variant={"contained"}
                    style={{ minWidth: "80px" }}
                    color="error"
                  >
                    Delete
                  </Button>
                </ListItemButton>
                <ListItemButton edge="end">
                  <Button
                    variant={"contained"}
                    style={{ minWidth: "80px" }}
                    color="success"
                  >
                    Details
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
