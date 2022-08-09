import { PresentationCard } from "../../components";

const HomePage = () => {
  return (
    <div>
      <div>
        <h1>Welcome to AMS GPs</h1>
        <div>
          <PresentationCard />{" "}
        </div>
        <div className="buttonArea">
          <button className="button">How is on duty?</button>
          <button className="button">I'm a new patient</button>
        </div>
      </div>
    </div>
  );
};

export { HomePage };
