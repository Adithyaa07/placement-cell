import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/Pages/Home";
import Student from "./components/Pages/StudentLogin";
import Register from "./components/Pages/Registration";
import Forgot from "./components/Pages/ForgotPass";
import Admin from "./components/Pages/Admin";
import AdminPage from "./components/Data/Admin/AdminPage";
import StudDetails from "./components/Data/Students/StudentDetails";
import StudentProfile from "./components/Data/Students/studentProfile";
import AvailableStudents from "./components/Data/Students/AvailableStudents";
import ShowDriveDetails from "./components/Data/Students/ShowDriveDetails";
import AddDriveDetails from "./components/Data/Admin/Drives/AddDriveDetails";
import Drives from '../src/components/Data/Admin/Drives/Drives'

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
    { path: "/showDriveDetails", element: <ShowDriveDetails /> },
    { path: "/addDriveDetails", element: <AddDriveDetails /> },
    { path: '/drives', element: <Drives /> },
  ]);

  return <RouterProvider router={router} />;
};

export default Route;
