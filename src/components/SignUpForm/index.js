import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const submitSignUp = async (event) => {
    console.log("Hi, the patient was created :)");
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/patients/signup",
        {
          firstName: firstName,
          lastName: lastName,
          gender: gender,
          dateOfBirth: dateOfBirth,
          email: email,
          phoneNumber: phoneNumber,
        }
      );
      console.log(response.data.name);
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      <p style={{ color: "gray", marginTop: -5, fontWeight: "bold" }}>
        Welcome! Fill with your data:
      </p>
      <form onSubmit={submitSignUp} className="Form">
        <input
          className="InputSignUp"
          type="text"
          value={firstName}
          placeholder="First Name"
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
          required
        />
        <input
          className="InputSignUp"
          type="text"
          value={lastName}
          placeholder="Last Name"
          onChange={(event) => {
            setLastName(event.target.value);
          }}
          required
        />
        <input
          className="InputSignUp"
          type="text"
          value={gender}
          placeholder="Famela or Male?"
          onChange={(event) => {
            setGender(event.target.value);
          }}
          required
        />
        <input
          className="InputSignUp"
          type="text"
          value={dateOfBirth}
          placeholder="Date of Birth. Ex: 26/01/1985"
          onChange={(event) => {
            setDateOfBirth(event.target.value);
          }}
          required
        />
        <input
          className="InputSignUp"
          type="text"
          value={email}
          placeholder="eMail"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          required
        />
        <input
          className="InputSignUp"
          type="text"
          value={phoneNumber}
          placeholder="Phone number. Ex: 0316599258495"
          onChange={(event) => {
            setPhoneNumber(event.target.value);
          }}
          required
        />
        <br />
        <br />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export { SignUpForm };
