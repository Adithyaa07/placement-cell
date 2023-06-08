/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { db } from "../../firebase-auth";

import { collection, setDoc, addDoc } from "firebase/firestore";

import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function StudentProfile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [year, setYear] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [backlogs, setBacklogs] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const currentUser = UserAuth();
  const dataCollection = collection(db, "students");

  const navigate = useNavigate();
  const createNewStudentProfile = async (id) => {
    await addDoc(dataCollection, {
      firstName: firstName,

      lastName: lastName,
      year: year,
      cgpa: cgpa,
      backlogs: backlogs,
      address: address,
      contact: contact,
    });
    alert("Successfully updated..!!")
    navigate('/studentDetails')
    
  };

  return (
    <div>
      <label>First Name</label>
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <label>Last Name</label>
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <label>Year of Studying</label>
      <input value={year} onChange={(e) => setYear(e.target.value)} />
      <label>CGPA</label>
      <input value={cgpa} onChange={(e) => setCgpa(e.target.value)} />
      <label>No. of Active Backlogs</label>
      <input value={backlogs} onChange={(e) => setBacklogs(e.target.value)} />
      <label>Address</label>
      <input value={address} onChange={(e) => setAddress(e.target.value)} />
      <label>Contact</label>
      <input value={contact} onChange={(e) => setContact(e.target.value)} />
      <button onClick={createNewStudentProfile}>Add your details</button>
    </div>
  );
}

export default StudentProfile;
