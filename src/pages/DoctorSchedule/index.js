import { PresentationCard } from "../../components";

const DoctorSchedule = () => {
  return (
    <div>
      <div>
        <h1>Who is on duty?</h1>
        <div>
          <table>
            <tr>
              <td>Doctor</td>
              <td>availability</td>
            </tr>
            <tr>
              <td>16</td>
              <td>14</td>
            </tr>
            <tr>
              <td>16</td>
              <td>14</td>
            </tr>
            <tr>
              <td>16</td>
              <td>14</td>
            </tr>
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
