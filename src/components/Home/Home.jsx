import React from "react";
import "./Home.scss";
import medusa from "../../assets/medusa.jpg";

function Home() {
  return (
    <>
      <div className="d-flex align-items-center mainCardContainer">
        <div className="mainCard">
          <div className="position-relative">
            <img src={medusa} className="img-fluid" />
            <div className="position-absolute it">
              Trying to make it better every day.
            </div>
            <div className="position-absolute main-txt">
              Hi, this is Arun, a web dev. Making things for online junkies.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
