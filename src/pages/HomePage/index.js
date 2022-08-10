import { PresentationCard } from "../../components";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div>
        <h1>Welcome to AMS GPs</h1>
        <div>
          <PresentationCard />{" "}
        </div>
        <div className="buttonArea">
          <button className="button">
            <NavLink className="product-title" to={"/doctor_schedule"}>
              How is on duty?
            </NavLink>
          </button>
          <button className="button">
            <NavLink className="product-title" to={"/patient_signup"}>
              I'm a new patient
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export { HomePage };
