import React, { useState } from "react";
import "./sceduleJob.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const SceduleJobs = () => {
  const [title, settitle] = useState("");
  return (
    <div className="container">
      <div className="scedule_jobs">
        <h3>Schedule your job</h3>
        <span>
          <input
            placeholder="Enter Job Title"
            onChange={(e) => {
              settitle(e.target.value);
              window.localStorage.setItem("jobTitle", e.target.value);
            }}
            className="form-control job_input"
          />
        </span>
        {title ? (
          <Link to={`/upload-file`}>
            <button className="btn">Continue</button>
          </Link>
        ) : (
          <button
            className="btn "
            onClick={(e) => toast.error("Title Required")}
            title="Title Requried"
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
};

export default SceduleJobs;
