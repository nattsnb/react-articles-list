import {Button, Container, FormControl, InputLabel, MenuItem, Select, Stack, TextField} from "@mui/material";

export function EditForm ({ taskDataObject }) {


    return (
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
    )
}