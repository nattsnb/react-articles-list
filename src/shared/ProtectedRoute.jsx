import { Navigate, NavLink } from "react-router-dom";

export function ProtectedRoute({ admin, children }) {
  if (!admin) {
    return <Navigate to="/" replace />;
  }

  return children;
}
