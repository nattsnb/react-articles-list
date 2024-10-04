import { api } from "../shared/api.js";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemButton,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./tasksList.module.css";
import { TasksListEntry } from "../taksListEntry/index.jsx";

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
          <Container sx={{ width: "100%", maxWidth: 750 }}>
            {tasks.map((task) => (
              <TasksListEntry
                taskDataObject={task}
                key={task.id}
              ></TasksListEntry>
            ))}
          </Container>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
