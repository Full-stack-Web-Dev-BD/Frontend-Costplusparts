import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BASE_URL, getUserID } from "../../utils/constant";
import moment from "moment"; 
const Jobs = () => {
  const [myJobs, setMyJobs] = useState([]);
  useEffect(() => {
    const fetchJob = async () => {
      const userID = getUserID();
      const response = await axios.get(`${BASE_URL}/api/job/${userID}`);
      setMyJobs(response.data);
    };
    fetchJob();
  }, []);
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-4 mb-4 cp">
          <Link to={"/scedule-job"}>
            <div className="sc_job">
              <div className="sc_jobs_content tex-center">
                <AiOutlinePlus />
                <br />
                <span>Scedule A Job</span>
              </div>
            </div>
          </Link>
        </div> 
        {myJobs.reverse().map((el) => (
          <div className="col-md-4 mb-4">
            <div className="sc_job">
              <div className="sc_jobs_content  sc_my_job tex-center">
                <span style={{ textTransform: "capitalize" }}>
                  {el.jobTitle}
                </span>
                <img src={require("./job.png")} />
                <span> {moment(el.createdAt).fromNow()} </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
