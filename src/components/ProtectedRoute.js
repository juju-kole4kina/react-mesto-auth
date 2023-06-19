import * as React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, element }) {
  return (
    isLoggedIn ? element : <Navigate to='/sing-in' replace />
  );
}

export {ProtectedRoute};
