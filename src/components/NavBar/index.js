import { NavLink } from "react-router-dom";
import "./styles.css";

const NavBar = (props) => {
  return (
    <div className="NavContainer">
      <div className="NavLinksAndInput">
        <div className="NavLinks">
          <NavLink
            style={({ isActive }) =>
              isActive ? { fontWeight: "bold" } : undefined
            }
            to="/"
          >
            Home
          </NavLink>
          {" | "}
          <NavLink
            style={({ isActive }) =>
              isActive ? { fontWeight: "bold" } : undefined
            }
            to="/doctor_schedule"
          >
            Doctor Schedule
          </NavLink>
          {" | "}
          <NavLink
            style={({ isActive }) =>
              isActive ? { fontWeight: "bold" } : undefined
            }
            to="/patient_signup"
          >
            Patient SignUp
          </NavLink>
          {" | "}
          <NavLink
            style={({ isActive }) =>
              isActive ? { fontWeight: "bold" } : undefined
            }
            to="/patients"
          >
            Patient Database
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export { NavBar };
