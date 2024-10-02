import { Route, Routes } from "react-router-dom";
import { TaskDetails } from "./taskDetails/index.jsx";
import { TasksList } from "./tasksList/index.jsx";

export function App() {
  return (
    <div>
      <h1>To Do List Example</h1>
      <Routes>
        <Route path="/" element={<TasksList />} />
        <Route path="/task/:taskId" element={<TaskDetails />} />
      </Routes>
    </div>
  );
}
