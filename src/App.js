import "./App.css";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components";
import {
  HomePage,
  DoctorSchedule,
  PatientDatabase,
  PatientSignUp,
  DetailsPage,
} from "./pages";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/doctor_schedule" element={<DoctorSchedule />} />
        <Route path="/patients" element={<PatientDatabase />} />
        <Route path="/patient_signup" element={<PatientSignUp />} />
        <Route path="/patients/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
