import { Link } from "react-router-dom";
import { api } from "../shared/api.js";
import { useEffect, useState } from "react";
import { EditForm } from "../editForm/index.jsx";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";

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
      <Container style={{ marginTop: "40px" }}>
        <Stack direction="row" style={{ marginBottom: "30px" }}>
          <h2>{`Task ${taskId}`}</h2>
          <Button
            href={"/"}
            variant={"contained"}
            style={{ marginLeft: "30px" }}
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
          <Container style={{ marginTop: "30px" }}>
            <Typography variant="h6" gutterBottom>
              Saved successfully.
            </Typography>
          </Container>
        )}
      </Container>
    </>
  );
}
