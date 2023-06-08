/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase-auth";
import classes from "./displayData.module.css";

function DisplayData() {
  const usersCollectionRef = collection(db, "students");

  const [details, setDetails] = useState([0]);
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
    <div>
      {details && details.length > 0 ? (
        details.map((user) => (
          <div>
            <h1>FirstName: {user.firstName}</h1>
            <>LastName: {user.lastName}</>
            <>Year studying: {user.year}</>
            <>CGPA: {user.cgpa}</>
            <>Address: {user.address}</>
            <>Contact: {user.contact}</>
            <>No of Backlogs: {user.backlogs}</>
          </div>
        ))
      ) : (
        <div>No profile details available</div>
      )}
    </div>
  );
}

export default DisplayData;
