/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import { collection, query, onSnapshot, where } from "firebase/firestore";
import { db } from "../../../firebase-auth";
import { useContext } from "react";
import { UserContext } from "../../../context/AuthContext";
import { Navigate } from "react-router-dom";
import classes from "./displayData.module.css";

function DisplayData() {
  const usersCollectionRef = collection(db, "students");
  const user = useContext(UserContext);

  const [details, setDetails] = useState([]);

  useEffect((id) => {
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

  if (!user) {
    return <Navigate to="/student" />;
  }

  return (
    <div className={classes.container}>
      {details && details.length > 0 ? (
        details.map((user, index) => (
          <div className={classes.profile} key={index}>
            <p>FirstName: {user.firstName}</p>
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

export default DisplayData;
