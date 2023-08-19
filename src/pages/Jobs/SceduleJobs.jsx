import React, { useState } from "react";
import "./sceduleJob.css";
import toast from "react-hot-toast";
import { BASE_URL, getHeader, getUserID } from "../../utils/constant";
import axios from "axios";
import { useHistory } from "react-router-dom";

const SceduleJobs = () => {
  const [title, settitle] = useState("");
  const history = useHistory()
  const createJob = async () => {
    try {
      if (!title) {
        toast.error("Title Required");
        return;
      }
      const response = await axios.post(`${BASE_URL}/api/job`, {
        jobTitle: title,
        userID: getUserID(),
      },{headers:getHeader()}); 
      if (response.status === 200) {
        toast.success("Job created successfully");
        history.push("/jobs")
      } else {
        toast.error("Failed to create job");
      }
    } catch (error) {
      console.log(error)
      if (error.response) {
        toast.error(error.response.data.errors[0].msg);
      } else {
        toast.error("An error occurred while creating the job");
      }
    }
  };
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
          <button onClick={(e) => createJob()} className="btn">
            Create Job
          </button>
        ) : (
          <button
            className="btn "
            onClick={(e) => toast.error("Title Required")}
            title="Title Requried"
          >
            Create Job
          </button>
        )}
      </div>
    </div>
  );
};

export default SceduleJobs;
