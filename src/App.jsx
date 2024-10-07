import { Route, Routes } from "react-router-dom";
import { TaskDetails } from "./taskDetails/index.jsx";
import { TasksList } from "./tasksList/index.jsx";
import styles from "./app.module.css";
import { useEffect, useState } from "react";
import { ProtectedRoute } from "./shared/protectedRoute.jsx";

export function App() {
  const isAdmin = localStorage.getItem("isAdmin");
  const [admin, setAdmin] = useState(isAdmin);

  useEffect(() => {
    if (isAdmin === "admin") {
      setAdmin("admin");
    } else {
      setAdmin(null);
    }
  }, [isAdmin]);

  return (
    <div>
      <h1>To Do List Example</h1>
      <Routes>
        <Route path="/" element={<TasksList />} />
        <Route
          path="/task/:taskId"
          element={
            <ProtectedRoute admin={admin}>
              <TaskDetails />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}
