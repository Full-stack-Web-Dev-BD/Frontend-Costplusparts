import React from "react";
import "./sceduleJob.css"
import { Link } from "react-router-dom";

const SceduleJobs = () => {
  return (
    <div className="container">
      <div className="scedule_jobs">
        <h3>Schedule your job</h3>
        <span>Job</span>
        <Link to={"/material-and-questions"}>
        <button className="btn">Continue</button>
        </Link>
      </div>
    </div>
  );
};

export default SceduleJobs;
