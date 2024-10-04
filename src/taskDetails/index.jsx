import { Link } from "react-router-dom";
import { api } from "../shared/api.js";
import { useEffect, useState } from "react";
import {EditForm} from "../editForm/index.jsx";

export function TaskDetails() {
  const [displayedTaskDataObject, setDisplayedTaskDataObject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
      <div>
        <h2>{`Task ${taskId}`}</h2>
        {!isLoading ? (
          <>
          <h3>{displayedTaskDataObject.title}</h3>
            <EditForm taskDataObject={displayedTaskDataObject} ></EditForm>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <Link to="/">Back to list</Link>
    </>
  );
}
