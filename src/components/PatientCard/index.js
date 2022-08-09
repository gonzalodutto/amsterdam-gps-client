import "./styles.css";
import { NavLink } from "react-router-dom";

const PatientCard = (props) => {
  return (
    <div className="PatientCardComponent">
      <div className="card-text-section">
        <div className="patientInformation">
          <div>
            Name: {props.firstName} {props.lastName}{" "}
          </div>
          <div>Id: {props.id}</div>
          <div>Date: {props.dateOfBirth}</div>
        </div>
        <div>
          <button className="MoreInformationButton">
            <NavLink className="product-title" to={`/patients/${props.id}`}>
              Show details
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export { PatientCard };
