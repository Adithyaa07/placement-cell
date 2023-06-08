import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase-auth";
import classes from "./AvailableStudents.module.css";

function AvailableStudents() {
  const usersCollectionRef = collection(db, "students");

  const [details, setDetails] = useState([]);

  useEffect(() => {
    const q = query(usersCollectionRef);
    const unSub = onSnapshot(q, (querySnapshot) => {
      let detailsArr = [];
      querySnapshot.forEach((doc) => {
        detailsArr.push({ ...doc.data() });
      });
      setDetails(detailsArr);
    });

    return () => unSub();
  });

  return (
    <div className={classes.container}>
      {details && details.length > 0 ? (
        details.map((user) => (
          <div className={classes.profile} key={user.uid}>
            <span className={classes.firstName}>First Name: {user.firstName}</span>
            <span className={classes.lastName}>Last Name: {user.lastName}</span>
            <span className={classes.year}>Year studying: {user.year}</span>
            <span className={classes.cgpa}>CGPA: {user.cgpa}</span>
            <span className={classes.address}>Address: {user.address}</span>
            <span className={classes.contact}>Contact: {user.contact}</span>
            <span className={classes.backlogs}>No of Backlogs: {user.backlogs}</span>
          </div>
        ))
      ) : (
        <div className={classes.noDetails}>No profile details available</div>
      )}
    </div>
  );
}

export default AvailableStudents;
