import React from "react";
import PieChart from "./PieChart";
import { Card } from "@mui/material";
import { LineChart } from "./SparkLineChart";
import { AiOutlineArrowUp } from "react-icons/ai";
import "./dashboard.css";
export const DashboardPage = () => {
  return (
    <div className="mt-4  p-3">
      <div className="row h-100">
        <div className="col-md-4 h-220">
          <Card className="h-100">
            <div className="row pt-3 pb-3">
              <div className="col-md-6">
                <div className="pie_holder">
                  <PieChart />
                  <span>60%</span>
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
                  <h1>18 Jobs</h1>
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
      </div>
      <div className="p-3">
        <div className=" mt-4">
          <Card className="h-100">
            <div className="st_title">
              <h3>Current Jobs Percent Complete</h3>
              <span>See more</span>
            </div>
            <div className="row">
              <div className="col-md-4 h-220">
                <div className="row pt-3 pb-3">
                  <div className="col-md-6">
                    <div className="pie_holder">
                      <PieChart />
                      <span>30%</span>
                    </div>
                  </div>
                  <div className="col-md-6 y_center">
                    <h3>My first Job</h3>
                    <h5>
                      250 <span className="hrs">hrs</span> / 300
                      <span className="hrs">hrs</span>
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-md-4 h-220">
                <div className="row pt-3 pb-3">
                  <div className="col-md-6">
                    <div className="pie_holder">
                      <PieChart />
                      <span>60%</span>
                    </div>
                  </div>
                  <div className="col-md-6 y_center">
                    <h3>My second Job</h3>
                    <h5>
                      250 <span className="hrs">hrs</span> / 300
                      <span className="hrs">hrs</span>
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-md-4 h-220">
                <div className="row pt-3 pb-3">
                  <div className="col-md-6">
                    <div className="pie_holder">
                      <PieChart />
                      <span>60%</span>
                    </div>
                  </div>
                  <div className="col-md-6 y_center">
                    <h3>My third Job</h3>
                    <h5>
                      250 <span className="hrs">hrs</span> / 300
                      <span className="hrs">hrs</span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
