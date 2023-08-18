import React from "react";
import { useHistory, useParams } from "react-router-dom";

const ChooseService = () => {
  const { jobId } = useParams();
  const history = useHistory();
  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Choose a service</h3>
      <div className="row">
        <div
          onClick={(e) => {
            window.localStorage.setItem("service", "Laser cutting");
            history.push(`/upload-file/${jobId}`);
          }}
          className="col-md-3 cp"
        >
          <div className="single_part text-center">
            <div className="part">
              <img src={require("./part.png")} />
              <h6>Laser cutting</h6>
            </div>
          </div>
        </div>

        <div
          onClick={(e) => {
            window.localStorage.setItem("service", "Tube cutting");
            history.push(`/choose-service/${jobId}`);
          }}
          className="col-md-3 cp"
        >
          <div className="single_part text-center">
            <div className="part">
              <img src={require("./part.png")} />
              <h6>Tube cutting</h6>
            </div>
          </div>
        </div>

        <div
          onClick={(e) => {
            window.localStorage.setItem("service", "CNC Machine");
            history.push(`/choose-service/${jobId}`);
          }}
          className="col-md-3 cp"
        >
          <div className="single_part text-center">
            <div className="part">
              <img src={require("./part.png")} />
              <h6>CNC Machine</h6>
            </div>
          </div>
        </div>

        <div
          onClick={(e) => {
            window.localStorage.setItem("service", "3D printing");
            history.push(`/choose-service/${jobId}`);
          }}
          className="col-md-3 cp"
        >
          <div className="single_part text-center">
            <div className="part">
              <img src={require("./part.png")} />
              <h6>3D printing</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseService;
