import { Route, Routes } from "react-router-dom";
import { TaskDetails } from "./taskDetails/index.jsx";
import { TasksList } from "./tasksList/index.jsx";
import styles from "./app.module.css";
import { ProtectedRoute } from "./shared/protectedRoute.jsx";
import { IS_ADMIN_STORAGE_KEY } from "./shared/constans.js";
import { StyledEngineProvider } from "@mui/material/styles";

export function App() {
  const admin = localStorage.getItem(IS_ADMIN_STORAGE_KEY);
  let isAdmin = false;
  if (admin === "true") {
    isAdmin = true;
  }
  return (
    <StyledEngineProvider injectFirst>
      <div>
        <h1>To Do List Example</h1>
        <Routes>
          <Route path="/" element={<TasksList />} />
          <Route
            path="/task/:taskId"
            element={
              <ProtectedRoute admin={isAdmin}>
                <TaskDetails />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </StyledEngineProvider>
  );
}
