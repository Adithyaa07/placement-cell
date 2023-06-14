import React from "react";
import classes from "./AddEventDetails.module.css";
import { useState } from "react";
import { db } from "../../../../firebase-auth";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function AddEventDetails(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const collectionData = collection(db, "events");
  const navigate = useNavigate();

  const addEvent = async (e) => {
    e.preventDefault();
    if (title === "" || description === "") {
      alert("Please fill in all the details");
      return;
    }
    await addDoc(collectionData, {
      title,
      description,
    });
    alert("Successfully added");
    navigate("/adminPage");
    props.setIsOpen(false);
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Add Drive Details</h1>

      <label htmlFor="title" className={classes.label}>
        Title
      </label>
      <br />
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={classes.input}
        placeholder="Event details"
      />
      <br />

      <label htmlFor="description" className={classes.label}>
        Event Description
      </label>
      <br />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={classes.input}
        placeholder="Event details"
      />
      <br />

      <button onClick={addEvent} className={classes.button}>
        Add Event
      </button>
    </div>
  );
}

export default AddEventDetails;
