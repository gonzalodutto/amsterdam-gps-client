import { NavLink } from "react-router-dom";
import "./styles.css";

const NavBar = (props) => {
  return (
    <div className="NavContainer">
      <div className="NavLinksAndInput">
        <div className="NavLinks">
          <NavLink to="/">Home</NavLink>
          {" | "}
          <NavLink to="/doctor_schedule">Doctor Schedule</NavLink>
          {" | "}
          <NavLink to="/patient_signup">Patient SignUp</NavLink>
          {" | "}
          <NavLink to="/patient_database">Patient Database</NavLink>
        </div>
      </div>
    </div>
  );
};

export { NavBar };
