import { Button, Container, MenuItem, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { api } from "../shared/api.js";
import styles from "./editForm.module.css";

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

  async function patchActiveTask(dataToPost) {
    try {
      const patchResponse = await api.patchTask(dataToPost, taskDataObject.id);
    } catch (error) {}
    setTaskBeingEdited(false);
  }
  const onClickSaveButton = () => {
    const dataToPost = {
      userId: taskDataObject.userId,
      id: taskDataObject.id,
      title: newTitle,
      completed: newCompletedStatus,
    };
    patchActiveTask(dataToPost);
  };

  return (
    <Container>
      <TextField
        className={styles.titleTextField}
        id="title"
        label={"Title"}
        defaultValue={newTitle}
        variant="outlined"
      />
      <Stack direction="row">
        <TextField
          disabled
          className={styles.smallTextFields}
          id="user-id"
          label={"User Id"}
          defaultValue={taskDataObject.userId}
          variant="outlined"
        />
        <TextField
          disabled
          className={styles.smallTextFields}
          id="post-id"
          label={"Post Id"}
          defaultValue={taskDataObject.id}
          variant="outlined"
        />
        <TextField
          className={styles.smallTextFields}
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
        className={styles.saveButton}
        color="success"
        onClick={onClickSaveButton}
      >
        Save
      </Button>
    </Container>
  );
}
