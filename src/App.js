import "./App.css";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components";
import {
  HomePage,
  DoctorSchedule,
  PatientDatabase,
  PatientSignUp,
} from "./pages";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/doctor_schedule" element={<DoctorSchedule />} />
        <Route path="/patient_database" element={<PatientDatabase />} />
        <Route path="/patient_signup" element={<PatientSignUp />} />
      </Routes>
    </div>
  );
}

export default App;
