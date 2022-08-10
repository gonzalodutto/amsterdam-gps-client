import { PresentationCard } from "../../components";
import { useEffect, useState } from "react";
import axios from "axios";
import { DoctorScheduleRow } from "../../components";
import "./styles.css";

const DoctorSchedule = () => {
  const [doctorList, setDoctorList] = useState(null);

  useEffect(() => {
    try {
      const getDocotors = async () => {
        const doctorsResponse = await axios.get(
          "http://localhost:4000/doctors"
        );
        setDoctorList(doctorsResponse.data);
      };

      getDocotors();
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  return (
    <div>
      <div>
        <h1>Who is on duty?</h1>
        <div>
          <table>
            <tbody>
              <tr className="TitleRow">
                <td>Doctor</td>
                <td>Availability</td>
              </tr>
              {doctorList
                ? doctorList.map((doctor, i) => (
                    <DoctorScheduleRow
                      key={i}
                      name={doctor.name}
                      onDuty={doctor.onDuty}
                    />
                  ))
                : ""}
            </tbody>
          </table>
        </div>

        <div>
          <PresentationCard />{" "}
        </div>
      </div>
    </div>
  );
};

export { DoctorSchedule };
