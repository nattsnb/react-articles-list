import { Button, Container, Divider, Stack, Typography } from "@mui/material";
import { api } from "../shared/api.js";
import { useState } from "react";
import { EditForm } from "../editForm/index.jsx";
import styles from "./taskListEntry.module.css";
import clsx from "clsx";

export function TasksListEntry({ taskDataObject }) {
  const [taskBeingEdited, setTaskBeingEdited] = useState(false);
  const onEditButtonClick = () => {
    setTaskBeingEdited(true);
  };

  const deleteTask = async () => {
    try {
      await api.deleteSpecificTask(taskDataObject.id);
    } catch (error) {
      // setError(error.message);
    }
  };

  return (
    <>
      <Container className={styles.containerTitle}>
        <Typography variant="h5" gutterBottom>
          {taskDataObject.title}
        </Typography>
      </Container>
      {!taskBeingEdited ? (
        <Stack direction="row">
          <Button
            variant={"contained"}
            className={styles.button}
            color="success"
            onClick={onEditButtonClick}
          >
            Edit
          </Button>
          <Button
            onClick={deleteTask}
            variant={"contained"}
            className={clsx(styles.button, styles.deleteButton)}
            color="error"
          >
            Delete
          </Button>
          <Button
            variant={"contained"}
            className={styles.button}
            color="secondary"
            href={`/task/${taskDataObject.id}`}
          >
            Details
          </Button>
        </Stack>
      ) : (
        <EditForm
          taskDataObject={taskDataObject}
          setTaskBeingEdited={setTaskBeingEdited}
        ></EditForm>
      )}
      <Divider variant="middle" className={styles.divider} />
    </>
  );
}
