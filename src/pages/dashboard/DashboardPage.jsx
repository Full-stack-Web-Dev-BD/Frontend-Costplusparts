import React, { useEffect, useState } from "react";
import PieChart from "./PieChart";
import { Card } from "@mui/material";
import { LineChart } from "./SparkLineChart";
import { AiOutlineArrowUp } from "react-icons/ai";
import "./dashboard.css";
import { BASE_URL, authTokenInHeader, getUserID } from "../../utils/constant";
import axios from "axios";
import { Link } from "react-router-dom";
import PartsPreloader from "../../components/SinglePartsPreloader/PartsPreloader";
import { connect } from "react-redux";

const DashboardPage = ({ auth }) => {
  const [myJobs, setMyJobs] = useState([]);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchJob = async () => {
      const userID = getUserID();
      const response = await axios.get(`${BASE_URL}/api/job/user/${userID}`, {
        headers: authTokenInHeader(),
      });
      setMyJobs(response.data);
      setLoading(false);
    };
    fetchJob();
  }, []);
  const calculatePercentage = (usedTime, totalTime) => {
    var result =
      (usedTime ? parseInt(usedTime) / totalTime : 0 / totalTime) * 100;
    return result.toFixed(1);
  };
  return (
    <div className="mt-4  p-3">
      <div className="row h-100">
        {Loading ? (
          <div className="col-12">
            <PartsPreloader />
          </div>
        ) : (
          <>
            <div className="col-md-4 h-220">
              <Card className="h-100">
                <div className="row pt-3 pb-3">
                  <div className="col-md-6">
                    <div className="pie_holder">
                      <PieChart spended={0.1}  />
                      <span>  </span>
                    </div>
                  </div>
                  <div className="col-md-6 y_center">
                    <h3>Available hours this month</h3>
                    <h5>
                      250 <span className="hrs">hrs</span> / 300
                      <span className="hrs">hrs</span>
                    </h5>
                  </div>
                </div>
              </Card>
            </div>

            <div className="col-md-4 h-220">
              <Card className="h-100">
                <div className="row pt-3 pb-3">
                  <div className="col-md-6  ">
                    <div className="p-4 pb-1">
                      <h1>$ 18.6K</h1>
                    </div>
                    <div className="pie_holder">
                      <LineChart
                        series={[
                          [25, 16, 6, 29, 10, 48, 11],
                          [42, 7, 20, 3, 16, 36, 23, 17],
                        ]}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 y_center _up">
                    <h4>Total Material Expense</h4>
                    <h6>
                      <AiOutlineArrowUp /> <span>15%</span>
                    </h6>
                  </div>
                </div>
              </Card>
            </div>
            <div className="col-md-4 h-220">
              <Card className="h-100">
                <div className="row pt-3 pb-3">
                  <div className="col-md-6  ">
                    <div className="p-4 pb-1">
                      <h1> {myJobs.length} Jobs</h1>
                    </div>
                    <div className="pie_holder">
                      <LineChart
                        series={[
                          [7, 49, 14, 23, 8, 363, 44],
                          [29, 46, 37, 45, 41, 12, 19, 22],
                        ]}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 y_center _up">
                    <h4>Total Job Created</h4>
                    <h6>
                      <AiOutlineArrowUp /> <span>15%</span>
                    </h6>
                  </div>
                </div>
              </Card>
            </div>
          </>
        )}
      </div>
      <div className="p-3">
        <div className=" mt-4">
          <Card className="h-100">
            <div className="st_title">
              <h3>Current Jobs Percent Complete</h3>
              <Link to="/jobs">
                <span>See more</span>
              </Link>
            </div>
            <div className="row">
              {Loading ? (
                <div className="col-12">
                  <PartsPreloader />
                </div>
              ) : (
                <>
                  {myJobs.slice(0, 3).map((job, id) => (
                    <div className="col-md-4 h-220" key={id}>
                      <div className="row pt-3 pb-3">
                        <div className="col-md-6">
                          <div className="pie_holder">
                            <PieChart spended={calculatePercentage()} />
                            <span>
                              {calculatePercentage(
                                job.timeSpended,
                                (auth.user?.subscription?.features?.[0].split(
                                  " "
                                ))[0]
                              )}
                              %
                            </span>
                          </div>
                        </div>
                        <div className="col-md-6 y_center">
                          <h3> {job.jobTitle} </h3>
                          <h5>
                            {job.timeSpended ? job.timeSpended : 0}
                            <span className="hrs">hrs</span> /
                            {
                              (auth.user?.subscription?.features?.[0].split(
                                " "
                              ))[0]
                            }
                            <span className="hrs">hrs</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
              <div></div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, null)(DashboardPage);
