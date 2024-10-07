import styles from "./taskDetails.module.css";
import { api } from "../shared/api.js";
import { useEffect, useState } from "react";
import { EditForm } from "../editForm/index.jsx";
import { Button, Container, Stack, Typography } from "@mui/material";

export function TaskDetails() {
  const [displayedTaskDataObject, setDisplayedTaskDataObject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [taskBeingEdited, setTaskBeingEdited] = useState(true);

  const url = new URL(window.location);
  const taskId = url.pathname.replace("/task/", "");

  useEffect(() => {
    async function getSpecificTaskData() {
      setIsLoading(true);
      try {
        const taskResponse = await api.getSpecificTask(taskId);
        setDisplayedTaskDataObject(taskResponse);
      } catch (error) {}
      setIsLoading(false);
    }
    getSpecificTaskData();
  }, []);

  return (
    <>
      <Container className={styles.mainContainer}>
        <Stack direction="row" className={styles.stackTaskNumberAndBackButton}>
          <h2>{`Task ${taskId}`}</h2>
          <Button
            href={"/"}
            variant={"contained"}
            className={styles.backButton}
          >
            Back to List
          </Button>
        </Stack>
        {!isLoading ? (
          <>
            <EditForm
              taskDataObject={displayedTaskDataObject}
              setTaskBeingEdited={setTaskBeingEdited}
            ></EditForm>
          </>
        ) : (
          <p>Loading...</p>
        )}
        {taskBeingEdited ? (
          <></>
        ) : (
          <Container className={styles.patchResponseMessage}>
            <Typography variant="h6" gutterBottom>
              Saved successfully.
            </Typography>
          </Container>
        )}
      </Container>
    </>
  );
}
