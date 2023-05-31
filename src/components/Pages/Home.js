import { NavLink } from "react-router-dom";

const HomePage = () => {

    return (
        <>
        <h1> This is Home page..</h1>
        <p>YOU ARE A </p>
        <div>
           <NavLink to='/student'> <span>STUDENT           </span></NavLink><br></br>
            <NavLink to='/admin'><span>ADMIN</span></NavLink>
        </div>
        
        </>
    )

}
export default HomePage;