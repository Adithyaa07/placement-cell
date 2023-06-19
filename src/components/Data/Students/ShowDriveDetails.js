import React from "react";
import classes from "./showDriveDetails.module.css";
import { useEffect, useState } from "react";

import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase-auth";
import "..//..//..//..//node_modules/bootstrap/dist/css/bootstrap.min.css";
function ShowDriveDetails() {
  const usersCollectionRef = collection(db, "drives");
  
  const [details, setDetails] = useState([]);


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



  return (
    <div>
      <div className={classes.body}>
        <div className={classes.driveContainer}>
          <div className={classes.logo}>
            <h1>Available Drive</h1>
          </div>
          {details && details.length > 0 ? (
            details.map((user) => (
              <div className="row">
                <div className="row g-4">
                  <div className="card  mx-auto w-50 ">
                    <div className={classes.content}>
                      <div key={user.id} className={classes.driveCard}>
                        <h1 className={classes.driveTitle}>
                          Title: {user.title}
                        </h1>
                        <div className={classes.driveDetails}>
                          <span className={classes.driveLabel}>
                            Eligibility:
                          </span>
                          <span className={classes.driveValue}>
                            {user.eligibility}
                          </span>
                        </div>
                        <div className={classes.driveDetails}>
                          <span className={classes.driveLabel}>Role:</span>
                          <span className={classes.driveValue}>
                            {user.role}
                          </span>
                        </div>
                        <div className={classes.driveDetails}>
                          <span className={classes.driveLabel}>Package:</span>
                          <span className={classes.driveValue}>
                            {user.package}
                          </span>
                        </div>
                        <div className={classes.driveDetails}>
                          <span className={classes.driveLabel}>Location:</span>
                          <span className={classes.driveValue}>
                            {user.location}
                          </span>
                        </div>
                        <div className={classes.driveDetails}>
                          <span className={classes.driveLabel}>
                            Apply here:
                          </span>
                          <span className={classes.driveValue}>
                            {user.additional}
                          </span>
                        </div>
                        <button className={classes.button}> Apply Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No drive details available</div>
          )}
          <br />
          <br />
        </div>

       

 
      </div>
    </div>
  );
}

export default ShowDriveDetails;
