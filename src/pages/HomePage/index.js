import { PresentationCard } from "../../components";
import { NavLink } from "react-router-dom";
import "./styles.css";

const HomePage = () => {
  return (
    <div>
      <div>
        <h1>Welcome to AMS GPs</h1>
        <div>
          <PresentationCard />{" "}
        </div>
        <div className="buttonArea">
          <div>
            <button className="buttonClass">
              <NavLink className="product-title" to={"/doctor_schedule"}>
                How is on duty?
              </NavLink>
            </button>
          </div>
          <div>
            <button className="buttonClass">
              <NavLink className="product-title" to={"/patient_signup"}>
                I'm a new patient
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HomePage };
