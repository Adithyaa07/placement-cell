import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Home.module.css";

const HomePage = () => {
  return (
    <div className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/student"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Student
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin">Admin</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
