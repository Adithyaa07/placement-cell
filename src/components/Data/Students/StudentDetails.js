import React, { useState } from "react";
import { NavLink, Navigate } from "react-router-dom";

import classes from "./studentDetails.module.css";
import { auth } from "../../../firebase-auth";
import { signOut } from "firebase/auth";
import ReactModal from "react-modal";
import DisplayData from "./DisplayData";
import { useContext } from "react";
import { UserContext } from "../../../context/AuthContext";
import HomeFeed from "../../Posts/PostUpdate/HomeFeed";

const StudDetails = () => {
  const [isOpen, setIsOpen] = useState(false);

  const user = useContext(UserContext);

  const logout = async () => {
    await signOut(auth);
  };

  if (!user) {
    return <Navigate to="/student" />;
  }

  return (
    <>
      <div className={classes.classHeader}>
        <div className={classes.logo}>Student Details</div>
        <div className={classes.right}>
          <NavLink onClick={() => setIsOpen(true)}>
            <span className={classes.active}>profile</span>
          </NavLink>
          <ReactModal
            isOpen={isOpen}
            contentLabel="Example Modal"
            onRequestClose={() => setIsOpen(false)}
          >
            <DisplayData />
            <div className={classes.modalContent}>
              <NavLink to="/studentDetails/studentProfile">
                <button>Create / Update profile </button>
              </NavLink>
            </div>
          </ReactModal>
          <NavLink to="/">
            <span className={classes.span}>Home</span>
          </NavLink>
          <NavLink to="/showDriveDetails">
            <span className={classes.span}>Drives/Events</span>
          </NavLink>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
      <HomeFeed />

      
    </>
  );
};

export default StudDetails;
