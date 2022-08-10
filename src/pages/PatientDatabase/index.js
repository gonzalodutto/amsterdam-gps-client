import { useEffect, useState } from "react";
import axios from "axios";
import { PatientCard } from "../../components";

const PatientDatabase = () => {
  const [patientList, setPatientList] = useState(null);
  const [doctorList, setDoctorList] = useState(null);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    try {
      const fetchData = async () => {
        const patientResponse = await axios.get(
          "http://localhost:4000/patients"
        );
        setPatientList(patientResponse.data);

        const doctorResponse = await axios.get("http://localhost:4000/doctors");
        setDoctorList(doctorResponse.data);
      };

      fetchData();
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  console.log(`Doctor ID selected: ${filter}`);

  return (
    <div className="PatientDatabasePage">
      <div>Choose Doctor:</div>
      <select
        className="InputSignUp"
        type="text"
        onChange={(event) => {
          setFilter(event.target.value);
        }}
        required
      >
        <option value="">All Doctors</option>
        {doctorList
          ? doctorList
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((doctor, i) => (
                <option key={i} value={doctor.id}>
                  {doctor.name}
                </option>
              ))
          : "loading..."}
      </select>
      <div>
        {patientList
          ? patientList
              // .filter((patientObj) => patientObj.doctorId === parseInt(filter))
              .sort((a, b) => a.lastName.localeCompare(b.lastName))
              .map((patient, i) => (
                <PatientCard
                  key={i}
                  id={patient.id}
                  firstName={patient.firstName}
                  lastName={patient.lastName}
                  dateOfBirth={patient.dateOfBirth}
                />
              ))
          : "loading..."}
      </div>
    </div>
  );
};

export { PatientDatabase };
