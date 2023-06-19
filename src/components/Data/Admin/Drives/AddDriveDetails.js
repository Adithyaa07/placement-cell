import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../../firebase-auth";
import classes from "./AddDriveDetails.module.css";

function AddDriveDetails() {
  const [title, setTitle] = useState("");
  const [eligible, setEligible] = useState("");
  const [role, setRole] = useState("");
  const [packages, setPackages] = useState("");
  const [location, setLocation] = useState("");
  const [register, setRegister] = useState("");
  const [description, setDescription] = useState("");

  const collectionData = collection(db, "drives");
  const navigate = useNavigate();

  const createNewDrive = async (e) => {
    e.preventDefault();
    if (title === "" || role === "" || location === "" || packages === "") {
      alert("Please fill in all the details");
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
    alert("Successfully added");
    navigate("/adminPage");
  };

  return (
    <div className={classes.body}>
      <div className={classes.container}>
        <h1 className={classes.heading}>Add Drive Details</h1>
        <label htmlFor="title" className={classes.label}>
          Company Name
        </label>
        <br />
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={classes.input}
          placeholder="Enter company name"
        />
        <br />

        <label htmlFor="eligibility" className={classes.label}>
          Eligibility
        </label>
        <br />
        <input
          value={eligible}
          onChange={(e) => setEligible(e.target.value)}
          className={classes.input}
          placeholder="Enter eligibility"
        />
        <br />

        <label htmlFor="role" className={classes.label}>
          Role
        </label>
        <br />
        <input
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className={classes.input}
          placeholder="Student's role"
        />
        <br />

        <label htmlFor="package" className={classes.label}>
          Package
        </label>
        <br />
        <input
          value={packages}
          onChange={(e) => setPackages(e.target.value)}
          className={classes.input}
          placeholder="Package"
        />
        <br />

        <label htmlFor="location" className={classes.label}>
          Location
        </label>
        <br />
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className={classes.input}
          placeholder="Location"
        />
        <br />

        <label htmlFor="register" className={classes.label}>
          Register Here
        </label>
        <br />
        <input
          value={register}
          onChange={(e) => setRegister(e.target.value)}
          className={classes.input}
          placeholder="Enter company name"
        />
        <br />

        <label htmlFor="register" className={classes.label}>
          Job Description
        </label>
        <br />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={classes.input}
          placeholder="Enter company name"
        />
        <br />

        <div className="text-center">
          <button onClick={createNewDrive} className={classes.button}>
            Add Drive
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddDriveDetails;
