import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Jobs = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-4 cp">
          <div className="sc_job">
            <div className="sc_jobs_content tex-center">
              <AiOutlinePlus />
              <br />
              <span>Scedule A Job</span>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="sc_job">
            <div className="sc_jobs_content  sc_my_job tex-center">
              <span>My First Job</span>
              <img src={require("./job.png")} />
              <span>4 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
