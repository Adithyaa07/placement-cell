/* StudentProfile.js */
import React, { useState } from "react";
import { db } from "../../../firebase-auth";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import classes from './studentProfile.module.css';

function StudentProfile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [year, setYear] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [backlogs, setBacklogs] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");

  const dataCollection = collection(db, "students");

  const navigate = useNavigate();
  const createNewStudentProfile = async (e) => {
    e.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      year === "" ||
      cgpa === "" ||
      backlogs === "" ||
      address === "" ||
      contact === ""
    ) {
      alert("Please fill in all the details");
      return;
    }

    await addDoc(dataCollection, {
      firstName: firstName,
      lastName: lastName,
      year: year,
      cgpa: cgpa,
      backlogs: backlogs,
      address: address,
      contact: contact,
    });
    alert("Successfully updated..!!");
    navigate("/studentDetails");
  };

  return (
    <div className={classes.container}>
      <label className={classes.label}>First Name</label>
      <input
        className={classes.input}
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <label className={classes.label}>Last Name</label>
      <input
        className={classes.input}
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <label className={classes.label}>Year of Studying</label>
      <input
        className={classes.input}
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <label className={classes.label}>CGPA</label>
      <input
        className={classes.input}
        value={cgpa}
        onChange={(e) => setCgpa(e.target.value)}
      />
      <label className={classes.label}>No. of Active Backlogs</label>
      <input
        className={classes.input}
        value={backlogs}
        onChange={(e) => setBacklogs(e.target.value)}
      />
      <label className={classes.label}>Address</label>
      <input
        className={classes.input}
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <label className={classes.label}>Contact</label>
      <input
        className={classes.input}
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />
      <button className={classes.button} onClick={createNewStudentProfile}>
        Add your details
      </button>
    </div>
  );
}

export default StudentProfile;
