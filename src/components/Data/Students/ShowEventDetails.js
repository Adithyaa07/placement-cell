import React from "react";
import classes from "./showDriveDetails.module.css";
import { useEffect, useState } from "react";

import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase-auth";
function ShowEventDetails() {
  const eventsRef = collection(db, "events");
  const [events, setEvents] = useState([]);
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
      <div className={classes.logo1}>
        <h1>Available Events</h1>
      </div>
      <div>
        {events && events.length > 0 ? (
          events.map((user) => (
            <div className="row">
              <div className="col g-4">
                <div className="card   mx-auto w-50  ">
                  <div className={classes.content}>
                    <div key={user.id} className={classes.driveCard}>
                      <h1 className={classes.driveTitle}>
                        Title: {user.title}
                      </h1>
                      <div className={classes.driveDetails}>
                        <span className={classes.driveLabel}>
                          Event Information:
                        </span>
                        <span className={classes.driveValue}>
                          {user.description}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
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

export default ShowEventDetails;
