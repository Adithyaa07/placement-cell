import React from "react";
import classes from "./studentDetails.module.css";
import { useEffect, useState } from "react";

import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase-auth";
function ShowDriveDetails() {
  const usersCollectionRef = collection(db, "drives");
  const eventsRef = collection(db, "events");
  const [details, setDetails] = useState([]);
  const [events, setEvents] = useState([]);

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

  useEffect(() => {
    const q = query(eventsRef);
    const unSub = onSnapshot(q, (querySnapshot) => {
      let eventsArr = [];
      querySnapshot.forEach((doc) => {
        eventsArr.push({ ...doc.data(), id: doc.id });
      });
      setEvents(eventsArr);
    });

    return () => unSub();
  }, [eventsRef]);

  return (
    <div>
      <div className={classes.driveContainer}>
        <h1>Available Drives </h1>
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
              <button className={classes.button}> Apply Now</button>
            </div>
          ))
        ) : (
          <div>No drive details available</div>
        )}
        <br />
        <br />
      </div>
      <div>
        <h1>Available Events</h1>
        {events && events.length > 0 ? (
          events.map((user) => (
            <div key={user.id} className={classes.driveCard}>
              <h1 className={classes.driveTitle}>Title: {user.title}</h1>
              <div className={classes.driveDetails}>
                <span className={classes.driveLabel}>Event Information:</span>
                <span className={classes.driveValue}>{user.description}</span>
              </div>
            </div>
          ))
        ) : (
          <div>No Events available</div>
        )}
      </div>
    </div>
  );
}

export default ShowDriveDetails;
