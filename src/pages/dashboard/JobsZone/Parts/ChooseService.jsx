import React from "react";

const ChooseService = () => {
  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Choose a service</h3>
      <div className="row">
        <div className="col-md-3 cp">
          <div className="single_part text-center">
            <div className="part">
              <img src={require("./part.png")} />
              <h6>Laser cutting</h6>
            </div>
          </div>
        </div>

        <div className="col-md-3 cp">
          <div className="single_part text-center">
            <div className="part">
              <img src={require("./part.png")} />
              <h6>Tube cutting</h6>
            </div>
          </div>
        </div>

        <div className="col-md-3 cp">
          <div className="single_part text-center">
            <div className="part">
              <img src={require("./part.png")} />
              <h6>CNC Machine</h6>
            </div>
          </div>
        </div>

        <div className="col-md-3 cp">
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
