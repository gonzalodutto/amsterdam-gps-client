import "./styles.css";

const PresentationCard = (props) => {
  const todayTime = new Date().getHours();
  let isOpen = null;

  if (todayTime >= 8 && todayTime <= 16) {
    isOpen = true;
  } else {
    isOpen = false;
  }

  return (
    <div className="presentationCard">
      <div>
        We are: <b> {isOpen ? "Open" : "Close"} </b>
      </div>
      <div>To make an appointment</div>
      <div>call: 020 555 5555</div>
    </div>
  );
};

export { PresentationCard };
