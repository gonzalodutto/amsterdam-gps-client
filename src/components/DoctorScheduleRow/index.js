import "./styles.css";

const DoctorScheduleRow = (props) => {
  return (
    <tr>
      <td>{props.name} </td>
      <td>{props.onDuty ? "On Duty" : "Not on Duty"} </td>
    </tr>
  );
};

export { DoctorScheduleRow };
