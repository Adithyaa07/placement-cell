import { NavLink } from "react-router-dom";
import classes from './Home.module.css'
// import "./Home.css"

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
    )

}
export default HomePage;
// eslint-disable-next-line
{/* <body>
        <div className="content">
        <h1> This is Home page..</h1>
        <p>YOU ARE A </p>
        <div>
           <NavLink to='/student' className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end> <span>STUDENT</span></NavLink><br></br>
            <NavLink to='/admin'><span>ADMIN</span></NavLink>
        </div>
        </div>
        
        </body> */}