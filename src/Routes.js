import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/Pages/Home";
import Student from "./components/Pages/StudentLogin";
import Register from "./components/Pages/Registration";
import Forgot from "./components/Pages/ForgotPass";
import Admin from "./components/Pages/Admin";
import AdminPage from "./components/Data/AdminPage";
import StudDetails from "./components/Data/StudentDetails";
import StudentProfile from "./components/Data/studentProfile";
import AvailableStudents from "./components/Data/AvailableStudents";

const Route = () => {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/admin", element: <Admin /> },
    { path: "/student", element: <Student /> },
    { path: "student/studentRegister", element: <Register /> },
    { path: "student/studentForgot", element: <Forgot /> },
    { path: "/adminPage", element: <AdminPage /> },
    { path: "/studentDetails", element: <StudDetails /> },
    { path: "studentDetails/studentProfile", element: <StudentProfile /> },
    { path: "/AvailableStudents", element: <AvailableStudents /> },
  ]);

  return <RouterProvider router={router} />;
};

export default Route;
