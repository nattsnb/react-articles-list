import { Link } from "react-router-dom";
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
    setIsLoading(true);
    api
      .getSpecificTask(taskId, setDisplayedTaskDataObject)
      .catch((error) => {
        console.log("error fetching data", error);
      })
      .finally(() => setIsLoading(false));
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
      </Container>
    </>
  );
}
