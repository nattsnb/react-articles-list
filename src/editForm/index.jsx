import { Button, Container, MenuItem, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { api } from "../shared/api.js";

const isCompletedSelectValues = [
  {
    value: "completed",
    label: "Yes",
  },
  {
    value: "notCompleted",
    label: "No",
  },
];

export function EditForm({ taskDataObject, setTaskBeingEdited }) {
  const [newTitle, setNewTitle] = useState(taskDataObject.title);
  const [newCompletedStatus, setNewCompletedStatus] = useState(
    taskDataObject.completed === true ? "completed" : "notCompleted",
  );

  const onClickSaveButton = () => {
    const dataToPost = {
      userId: taskDataObject.userId,
      id: taskDataObject.id,
      title: newTitle,
      completed: newCompletedStatus,
    };
    api.patchTask(dataToPost, taskDataObject.id, setTaskBeingEdited);
  };

  return (
    <Container>
      <TextField
          sx={{width: "650px" }}
        id="title"
        label={"Title"}
        defaultValue={newTitle}
        variant="outlined"
      />
      <Stack direction="row">
        <TextField
          disabled
          sx={{ m: 1, width: "25ch" }}
          id="user-id"
          label={"User Id"}
          defaultValue={taskDataObject.userId}
          variant="outlined"
        />
        <TextField
          disabled
          sx={{ m: 1, width: "25ch" }}
          id="post-id"
          label={"Post Id"}
          defaultValue={taskDataObject.id}
          variant="outlined"
        />
        <TextField
          sx={{ m: 1, width: "25ch" }}
          id="is-completed"
          select
          label="Is Completed?"
          defaultValue={newCompletedStatus}
        >
          {isCompletedSelectValues.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Stack>
      <Button
        variant={"contained"}
        style={{ minWidth: "80px" }}
        color="success"
        onClick={onClickSaveButton}
      >
        Save
      </Button>
    </Container>
  );
}
