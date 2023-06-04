import React from "react";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase-auth";

function AddDriveDetails() {
  const [title, setTitle] = useState();
  const [eligible, setEligible] = useState();
  const [role, setRole] = useState();
  const [packages, setPackages] = useState();
  const [location, setLocation] = useState();
  const [register, setRegister] = useState();

  const collectionData = collection(db, "drives");

  const createNewDrive = async (e) => {
    e.preventDefault(e);
    if (title === "" || role === "" || location === "" || packages === "") {
      alert("PLese fill the details");
      return;
    }
    await addDoc(collectionData, {
      title,
      eligibility: eligible,
      role,
      package: packages,
      location,
      additional: register,
    });
  };

  return (
    <div>
      <h1>Add Drive details</h1>
      <label htmlFor="title">Company Name </label>
      <br></br>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter company name"
      />
      <br></br>

      <label htmlFor="eligiblity">Eligibility </label>
      <br></br>
      <input
        value={eligible}
        onChange={(e) => setEligible(e.target.value)}
        placeholder="Enter Eligible"
      />
      <br></br>

      <label htmlFor="role">Role </label>
      <br></br>
      <input
        value={role}
        onChange={(e) => setRole(e.target.value)}
        placeholder="Student's Role"
      />
      <br></br>
      <label htmlFor="package">Package </label>
      <br></br>
      <input
        value={packages}
        onChange={(e) => setPackages(e.target.value)}
        placeholder="package"
      />
      <br></br>
      <label htmlFor="location">Location </label>
      <br></br>
      <input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
      />
      <br></br>
      <label htmlFor="register">Register Here </label>
      <br></br>
      <input
        value={register}
        onChange={(e) => setRegister(e.target.value)}
        placeholder="enter company name"
      />
      <br></br>
      <button onClick={createNewDrive}>Add </button>
    </div>
  );
}

export default AddDriveDetails;
