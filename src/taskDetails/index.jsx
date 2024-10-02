import { Link } from "react-router-dom";
import { api } from "../shared/api.js";

const { getAllTasks, getSpecificTask, patchTask, deleteSpecificTask } = api;

export function TaskDetails() {
  return (
    <>
      <div>Placeholder - Task Details</div>
      <Link to="/">Back to list</Link>
    </>
  );
}
