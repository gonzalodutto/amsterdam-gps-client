import { useEffect, useState } from "react";
import axios from "axios";
import { PatientCard } from "../../components";

const PatientDatabase = () => {
  const [patientList, setPatientList] = useState(null);

  useEffect(() => {
    try {
      const getpatients = async () => {
        const patientResponse = await axios.get(
          "http://localhost:4000/patients"
        );
        setPatientList(patientResponse.data);
      };

      getpatients();
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  return (
    <div className="PatientDatabasePage">
      <div>Hola desde Patient Database</div>
      <div>
        {patientList
          ? patientList
              // .filter(
              //   (patientObj) =>
              //     categoryFilterList.length === 0 ||
              //     categoryFilterList.includes(patientObj.categoryId)
              // )
              // .filter(
              //   (patientObj) =>
              //     ratingFilterList.length === 0 ||
              //     ratingFilterList.includes(Math.round(patientObj.rating))
              // )
              .map((patient, i) => (
                <PatientCard
                  key={i}
                  id={patient.id}
                  firstName={patient.firstName}
                  lastName={patient.lastName}
                  dateOfBirth={patient.dateOfBirth}
                />
              ))
          : ""}
      </div>
    </div>
  );
};

export { PatientDatabase };
