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
            href={"/task/${taskDataObject.id"}
          >
            Details
          </Button>
        </Stack>
      ) : (
        <Container>
          <TextField
            fullWidth
            id="title"
            label={"Title"}
            defaultValue={taskDataObject.title}
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
            <FormControl sx={{ m: 1, width: "25ch" }}>
              <InputLabel id="is-completed">Is Completed?</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={taskDataObject.completed}
                label="Is Completed?"
              >
                <MenuItem value={"true"}>Yes</MenuItem>
                <MenuItem value={"false"}>No</MenuItem>
              </Select>
            </FormControl>{" "}
          </Stack>
          <Button
            variant={"contained"}
            style={{ minWidth: "80px" }}
            color="success"
          >
            Save
          </Button>
        </Container>
      )}
      <Divider
        variant="middle"
        style={{ marginBottom: "45px", marginTop: "10px" }}
      />
    </>
  );
}
