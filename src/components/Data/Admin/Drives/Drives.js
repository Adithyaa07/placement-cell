import React, { useEffect, useState } from "react";
import classes from '../AdminPage.module.css'
import { db } from "../../../../firebase-auth";
import {
  collection,
  deleteDoc,
  doc,
  query,
  onSnapshot,
} from "firebase/firestore";

function Drives() {
  const [users, setUsers] = useState([]);
  // const [event, setEvent] = useState(false);
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
      <section className={classes.intern}>
        <div className={classes.int1}>
          <div>
            <h2 className="h2">Drives</h2>
            <div className={classes.container}>
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
                      <span className={classes.driveValue}>
                        {user.location}
                      </span>
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
        </div>
      </section>
    </div>
  );
}

export default Drives;
