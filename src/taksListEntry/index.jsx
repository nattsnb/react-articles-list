import {
  Button,
  Container,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { api } from "../shared/api.js";
import { useState } from "react";
import { EditForm } from "../editForm/index.jsx";

export function TasksListEntry({ taskDataObject }) {
  const [taskBeingEdited, setTaskBeingEdited] = useState(false);
  const onEditButtonClick = () => {
    setTaskBeingEdited(true);
  };

  return (
    <>
      <Container style={{ padding: "0px" }}>
        <Typography variant="h5" gutterBottom>
          {taskDataObject.title}
        </Typography>
      </Container>
      {!taskBeingEdited ? (
        <Stack direction="row">
          <Button
            variant={"contained"}
            style={{ minWidth: "80px" }}
            color="success"
            onClick={onEditButtonClick}
          >
            Edit
          </Button>
          <Button
            onClick={() => {
              api.deleteSpecificTask(taskDataObject.id);
            }}
            variant={"contained"}
            style={{
              minWidth: "80px",
              marginLeft: "12px",
              marginRight: "12px",
            }}
            color="error"
          >
            Delete
          </Button>
          <Button
            variant={"contained"}
            style={{ minWidth: "80px" }}
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
      <Divider
        variant="middle"
        style={{ marginBottom: "45px", marginTop: "10px" }}
      />
    </>
  );
}
