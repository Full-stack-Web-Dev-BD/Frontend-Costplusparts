import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { BASE_URL } from "../../../utils/constant";
import moment from "moment-timezone";

const JobDetails = () => {
  const [allParts, setallParts] = useState([]);

  const { jobId } = useParams();

  useEffect(() => {
    if (jobId) {
      fetchJobDetails(jobId);
    }
  }, [jobId]);

  const fetchJobDetails = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/parts/job/${id}`);
      console.log(response.data);
      setallParts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-5">
      <div className="row mt-5">
        <div className="col-md-4 mb-4 cp">
          <div className="sc_job">
            <Link to={`/choose-service/${jobId}`}>
              <div className="sc_jobs_content tex-center">
                <AiOutlinePlus />
                <br />
                <span>Upload A Part</span>
              </div>
            </Link>
          </div>
        </div>

        {allParts.reverse().map((parts, id) => (
          <div id={id} className="col-md-4 mb-4">
            <div className="sc_job">
              <div className="sc_jobs_content  sc_my_job tex-center">
                <span> {parts.serviceName} </span>
                <img src={require("./job.png")} />
                <span> {moment(parts.createdAt).fromNow()} </span>
                {/* <button className="btn status_btn in_progress">
                  In Progress
                </button> */}
              </div>
            </div>
          </div>
        ))}
        {/* my uploaded parts */}
        {/* <div className="col-md-4 mb-4">
          <div className="sc_job">
            <div className="sc_jobs_content  sc_my_job tex-center">
              <span>My Part</span>
              <img src={require("./job.png")} />
              <span>2/3 hours ago</span>
              <button className="btn status_btn in_progress">
                In Progress
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="sc_job">
            <div className="sc_jobs_content  sc_my_job tex-center">
              <span>My Part 2</span>
              <img src={require("./job.png")} />
              <span>2/3 hours ago</span>
              <button className="btn status_btn in_progress">
                In Progress
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="sc_job">
            <div className="sc_jobs_content  sc_my_job tex-center">
              <span>My Part 3</span>
              <img src={require("./job.png")} />
              <span>2/3 hours ago</span>
              <button className="btn status_btn in_stop">Stopped</button>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="sc_job">
            <div className="sc_jobs_content  sc_my_job tex-center">
              <span>My Part 4</span>
              <img src={require("./job.png")} />
              <span>2/3 hours ago</span>
              <button className="btn status_btn in_completed">Done</button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default JobDetails;
