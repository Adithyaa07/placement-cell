import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase-auth";
import classes from './displayData.module.css'

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
        details.map((user, index) => (
          <div className={classes.profile} key={index}>
            <p><b>FirstName: </b>{user.firstName}</p>
            <p>LastName: {user.lastName}</p>
            <p>Year studying: {user.year}</p>
            <p>CGPA: {user.cgpa}</p>
            <p>Address: {user.address}</p>
            <p>Contact: {user.contact}</p>
            <p>No of Backlogs: {user.backlogs}</p>
          </div>
        ))
      ) : (
        <div>No profile details available</div>
      )}
    </div>
  );
}

export default AvailableStudents;
