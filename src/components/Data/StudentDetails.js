import React, { useEffect, useState } from "react";
import { NavLink, Navigate } from "react-router-dom";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase-auth";
import classes from "./studentDetails.module.css";
import { auth } from "../../firebase-auth";
import { signOut } from "firebase/auth";
import ReactModal from "react-modal";
import DisplayData from "./DisplayData";
import { useContext } from "react";
import { UserContext } from "../../context/AuthContext";
// import StudentProfile from "./studentProfile";

const StudDetails = () => {
  const usersCollectionRef = collection(db, "drives");
  const [details, setDetails] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const user = useContext(UserContext);

  const logout = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    const q = query(usersCollectionRef);
    const unSub = onSnapshot(q, (querySnapshot) => {
      let driverArr = [];
      querySnapshot.forEach((doc) => {
        driverArr.push({ ...doc.data(), id: doc.id });
      });
      setDetails(driverArr);
    });

    return () => unSub();
  }, [usersCollectionRef]);

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
        </div>
      </div>
      <div className={classes.driveContainer}>
        <h1>Available drive details</h1>
        {details && details.length > 0 ? (
          details.map((user) => (
            <div key={user.id} className={classes.driveCard}>
              <h1 className={classes.driveTitle}>Title: {user.title}</h1>
              <div className={classes.driveDetails}>
                <span className={classes.driveLabel}>Eligibility:</span>
                <span className={classes.driveValue}>{user.eligibility}</span>
              </div>
              <div className={classes.driveDetails}>
                <span className={classes.driveLabel}>Role:</span>
                <span className={classes.driveValue}>{user.role}</span>
              </div>
              <div className={classes.driveDetails}>
                <span className={classes.driveLabel}>Package:</span>
                <span className={classes.driveValue}>{user.package}</span>
              </div>
              <div className={classes.driveDetails}>
                <span className={classes.driveLabel}>Location:</span>
                <span className={classes.driveValue}>{user.location}</span>
              </div>
              <div className={classes.driveDetails}>
                <span className={classes.driveLabel}>Apply here:</span>
                <span className={classes.driveValue}>{user.additional}</span>
              </div>
            </div>
          ))
        ) : (
          <div>No drive details available</div>
        )}
      </div>
      <button onClick={() => logout(user)}>Logout</button>
    </>
  );
};

export default StudDetails;
