import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import jwtDecode from "jwt-decode";
import toast from "react-hot-toast";
import axios from "axios";
import { BASE_URL } from "../../utils/constant";
const MaterialandQuestions = () => {
  const [materialCount, setmaterialCount] = useState(10);
  const [Resolution, setResolution] = useState("");
  const [Finish, setFinish] = useState("");
  const [Orientation, setOrientation] = useState("");
  const [Material, setMaterial] = useState("");

  const decreaseMaterialCount = () => {
    if (materialCount > 0) {
      setmaterialCount(materialCount - 1);
    }
  };
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    var decodedToken;
    if (token) {
      decodedToken = jwtDecode(token);
    }
    console.log();
  }, []);
  const createJob = async () => {
    var userID;
    const token = window.localStorage.getItem("token");
    var decodedToken;
    if (token) {
      decodedToken = jwtDecode(token);
      userID = decodedToken?.user?.id;
    }

    const jobTitle = window.localStorage.getItem("jobTitle");
    const uploadedFile = window.localStorage.getItem("fileName");
    const data = {
      jobTitle: jobTitle,
      cadFile: uploadedFile,
      materialType: Material,
      resolution: Resolution,
      finish: Finish,
      orientation: Orientation,
      materialQTY: materialCount,
      userID: userID,
    };
    if (!Material || !Resolution || !Finish || !Orientation) {
      toast.error("Please Fill the form and try again");
    }
    try {
      const response = await axios.post(`${BASE_URL}/api/job`, data);
      toast.success("Job  Created Successfully");
      setTimeout(() => {
        window.localStorage.removeItem("jobTitle");
        window.localStorage.removeItem("fileName");
        window.location.href = "/#/jobs";
      }, 2000);
    } catch (error) {
      toast.error("Error occurred while creating job");
      console.log(error);
    }
  };
  return (
    <div className="p-4 mt-4">
      <Card className="p-4">
        <div className="d-flex" style={{ gap: "20px" }}>
          <div className="material_box">
            <img src={require("./material.png")} />
          </div>
          <div style={{ width: "100%" }}>
            <h2>3D Printing</h2>
            <p className="m-0">Pump Manifold v3.step</p>
            <div
              className="d-flex"
              style={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <span>1174-4226-001</span>
              <div
                style={{ display: "flex", gap: "20px", alignItems: "center" }}
              >
                <span>Quantity 1</span>
                <button className="btn border-btn">Rename part</button>
              </div>
            </div>
            <hr className="m-0" />
            <p>
              <span className="mr-3"> X: 4.500in</span>
              <span className="mr-3"> Y: 4.484in</span>
              <span className="mr-3"> Z: 3.274in</span>
            </p>
          </div>
        </div>
      </Card>
      <div className="mt-4">
        <Card className="p-5">
          <h2 className="text-gray">1. Material and Finish</h2>
          <div class="form-group row " style={{ marginBottom: "2rem" }}>
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Material
            </label>
            <div class="col-sm-10">
              <select
                required
                onChange={(e) => setMaterial(e.target.value)}
                className="form-control "
                style={{ borderRadius: "0px" }}
              >
                <option value="">Select Option</option>
                <option value={"Inconel 1 "}> Inconel 1 </option>
                <option value={"Inconel 2 "}> Inconel 2 </option>
                <option value={"Inconel 3 "}> Inconel 3 </option>
                <option value={"Inconel 4 "}> Inconel 4 </option>
              </select>
            </div>
          </div>

          <div class="form-group row " style={{ marginBottom: "2rem" }}>
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Resolution
            </label>
            <div class="col-sm-10">
              <select
                required
                onChange={(e) => setResolution(e.target.value)}
                className="form-control "
                style={{ borderRadius: "0px" }}
              >
                <option value="">Select Option</option>
                <option value={"Normal Res 1"}> Normal Res 1 </option>
                <option value={"Normal Res 2"}> Normal Res 2</option>
                <option value={"Normal Res 3"}> Normal Res 3</option>
                <option value={"Normal Res 4"}> Normal Res 4</option>
              </select>
            </div>
          </div>

          <div class="form-group row " style={{ marginBottom: "2rem" }}>
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Finish
            </label>
            <div class="col-sm-10">
              <select
                required
                onChange={(e) => setFinish(e.target.value)}
                className="form-control "
                style={{ borderRadius: "0px" }}
              >
                <option value="">Select Option</option>
                <option value={"Standard 1"}> Standard 1</option>
                <option value={"Standard 2"}> Standard 2</option>
                <option value={"Standard 3"}> Standard 3</option>
                <option value={"Standard 4"}> Standard 4</option>
              </select>
            </div>
          </div>

          <div class="form-group row " style={{ marginBottom: "2rem" }}>
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Orientation
            </label>
            <div class="col-sm-10">
              <select
                required
                onChange={(e) => setOrientation(e.target.value)}
                className="form-control "
                style={{ borderRadius: "0px" }}
              >
                <option value="">Select Option</option>
                <option value={"Let us decide 1"}> Let us decide 1</option>
                <option value={"Let us decide 2"}> Let us decide 2</option>
                <option value={"Let us decide 3"}> Let us decide 3</option>
                <option value={"Let us decide 4"}> Let us decide 4</option>
              </select>
            </div>
          </div>

          <div class="form-group row " style={{ marginBottom: "2rem" }}>
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Material
            </label>
            <div class="col-sm-2">
              <div className="row" style={{ alignItems: "center" }}>
                <div className="text-center col-md-4">
                  <button
                    className="btn"
                    onClick={(e) => {
                      decreaseMaterialCount();
                    }}
                  >
                    <AiOutlineMinus className="cp" />
                  </button>
                </div>
                <div className=" col-md-4">
                  <input
                    value={materialCount}
                    className="form-control"
                    style={{ borderRadius: "0px", textAlign: "center" }}
                  />
                </div>
                <div className="text-center col-md-4">
                  <button
                    className="btn"
                    onClick={(e) => setmaterialCount(materialCount + 1)}
                  >
                    <AiOutlinePlus className="cp" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-gray"> 2.More Options</h2>
          <div className="text-right">
            <button onClick={(e) => createJob()} className="btn btn_cont">
              Finish
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MaterialandQuestions;
