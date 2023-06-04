import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { db } from "../../firebase-auth";
import {
  collection,
  deleteDoc,
  doc,
  query,
  onSnapshot,
} from "firebase/firestore";
import AddDriveDetails from "./AddDriveDetails";
import classes from "./AdminPage.module.css";
import ReactModal from "react-modal";

const AdminPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "drives");

  const deleteDrive = async (id) => {
    const userDoc = doc(usersCollectionRef, id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const q = query(usersCollectionRef);
    const unSub = onSnapshot(q, (querySnapshot) => {
      let driverArr = [];
      querySnapshot.forEach((doc) => {
        driverArr.push({ ...doc.data(), id: doc.id });
      });
      setUsers(driverArr);
    });

    return () => unSub();
  });

  return (
    <div>
      <div className={classes.classHeader}>
        <div className={classes.logo}>AdminPage</div>
        <div className={classes.right}>
          <span className={classes.active}>Student Details</span>
          <NavLink to="/">
            <span className={classes.span}>Home</span>
          </NavLink>
        </div>
      </div>
      <section className={classes.add}>
        <div className={classes.sec}>
          <div>
            <h2>Add a New Job Details</h2>
            <button onClick={() => setIsOpen(true)} className={classes.but}>
              Add New Job
            </button>
            <ReactModal
              isOpen={isOpen}
              contentLabel="Example Modal"
              onRequestClose={() => setIsOpen(false)}
            >
              <div className={classes.modalContent}>
                <AddDriveDetails />
              </div>
            </ReactModal>
          </div>
        </div>
      </section>
      <section className={classes.intern}>
        <div className={classes.int1}>
          <div>
            <h2 className="h2">Drives</h2>

            {users.map((user) => {
              return (
                <div key={user.id} className={classes.driveCard}>
                  <h1 className={classes.driveTitle}>Title: {user.title}</h1>
                  <div className={classes.driveDetails}>
                    <span className={classes.driveLabel}>Eligibility:</span>
                    <span className={classes.driveValue}>
                      {user.eligibility}
                    </span>
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
                    <span className={classes.driveValue}>
                      {user.additional}
                    </span>
                  </div>
                  <div>
                    <button className={classes.driveButton}>Update</button>
                    <button
                      className={classes.driveButton}
                      onClick={() => deleteDrive(user.id)}
                    >
                      Delete Drive
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminPage;
