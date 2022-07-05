import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { getIsLoggedInSelector } from "./store/slices/LoginSlice";
import { usersAPI } from "./API/API.service";
import { useDispatch } from "react-redux";
import { checkAuthenticated } from "./store/slices/LoginSlice";

const ProtectedRoute = ({ children, isProtected, to, element }) => {
  if (isProtected) return <Navigate to={to} />;
  return element ? element : children;
};

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(checkAuthenticated());
  }, []);

  const isLoggedIn = useSelector(getIsLoggedInSelector);

  return (
    <div>
      <Layout />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute isProtected={!isLoggedIn} to={"/login"}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/register"
          element={
            <ProtectedRoute
              isProtected={isLoggedIn}
              to={"/"}
              element={<Register />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <ProtectedRoute
              isProtected={isLoggedIn}
              to={"/"}
              element={<Login />}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
