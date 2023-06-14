import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// import AddDriveDetails from "./AddDriveDetails";
import classes from "./AdminPage.module.css";
import ReactModal from "react-modal";

import AddEventDetails from "./Events/AddEventDetails";

const AdminPage = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className={classes.classHeader}>
        <div className={classes.logo}>AdminPage</div>
        <div className={classes.right}>
          <NavLink to="/AvailableStudents">
            <span className={classes.active}>Student Details</span>
          </NavLink>
          <NavLink to="/">
            <span className={classes.span}>Home</span>
          </NavLink>
          <NavLink to="/drives">
            <span className={classes.span}>Drives</span>
          </NavLink>
        </div>
      </div>
      <section className={classes.add}>
        <div className={classes.sec}>
          <div>
            <div>
              <span>
                <h2>Add a New Drive Details</h2>
              </span>
            </div>
            <NavLink to="/addDriveDetails">
              <button className={classes.but}>Add New Job</button>
            </NavLink>
            <button onClick={() => setIsOpen(true)} className={classes.but}>
              Add New Event
            </button>
            <ReactModal
              isOpen={isOpen}
              contentLabel="Example Modal"
              onRequestClose={() => setIsOpen(false)}
            >
              <div className={classes.modalContent}>
                <AddEventDetails setIsOpen={setIsOpen}/>
              </div>
            </ReactModal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminPage;
