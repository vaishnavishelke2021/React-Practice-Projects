// import React from "react";

import { Navigate } from "react-router-dom";

function PrivateRoute({ isLogin, children }) {
  if (isLogin) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default PrivateRoute;
