import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./styles.css";

const DetailsPage = () => {
  const [patients, setProducts] = useState({});
  const params = useParams();

  useEffect(() => {
    try {
      const getPatients = async () => {
        const response = await axios.get(
          `http://localhost:4000/patients/${params.id}`
        );
        // console.log(response);
        setProducts(response.data);
      };
      getPatients();
    } catch (e) {
      console.log(e.message);
    }
  }, [params.id]);

  return (
    <div>
      <div className="ContainerDetailsPage">
        {!patients ? (
          "Loading.."
        ) : (
          <div className="AllProductDetails">
            <div className="ProductDescr">
              <h2>
                {patients.firstName} {patients.lastName}
              </h2>
              <p>ID: {patients.id}</p>
              <p>Date of birth: {patients.dateOfBirth}</p>
              <p>Gender: {patients.gender}</p>
              <div>
                Contact details:
                <ol>
                  <li>Email: {patients.email}</li>
                  <li>Phone number: {patients.phoneNumber}</li>
                </ol>
                Prescriptions:
                <ol>
                  <li>Email: {patients.email}</li>
                  <li>Phone number: {patients.phoneNumber}</li>
                </ol>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { DetailsPage };
