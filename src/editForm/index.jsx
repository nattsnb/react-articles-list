import {
  Button,
  Container,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";

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
  const [title, setTitle] = useState(taskDataObject.title);
  const [isCompleted, setIsCompleted] = useState(
    taskDataObject.completed === true ? "completed" : "notCompleted",
  );

  return (
    <Container>
      <TextField
        fullWidth
        id="title"
        label={"Title"}
        defaultValue={title}
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
          defaultValue={isCompleted}
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
      >
        Save
      </Button>
    </Container>
  );
}
