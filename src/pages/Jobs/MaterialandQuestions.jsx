import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";
import { AiOutlineMinus, AiFillDelete, AiOutlinePlus } from "react-icons/ai";
import toast from "react-hot-toast";
import axios from "axios";
import { BASE_URL, authTokenInHeader } from "../../utils/constant";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import PartsPreloader from "../../components/SinglePartsPreloader/PartsPreloader";
import "./materialquestion.css";

const MaterialandQuestions = () => {
  // parts Details form database
  const [partsDetails, setpartsDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const { partsID } = useParams();

  // form data
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
    fetchPartsDetails();
  }, []);
  const fetchPartsDetails = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/parts/find/${partsID}`,
        { headers: authTokenInHeader() }
      );
      setpartsDetails(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const requestForQuots = async () => {
    const data = {
      materialType: Material,
      resolution: Resolution,
      finish: Finish,
      orientation: Orientation,
      materialQTY: materialCount,
    };
    try {
      const response = await axios.put(
        `${BASE_URL}/api/parts/update/${partsID}`,
        data,
        { headers: authTokenInHeader() }
      );
      toast.success("Request Submitted successfully !!!");
      fetchPartsDetails();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mt-4">
      {loading ? (
        <div>
          <PartsPreloader />
        </div>
      ) : (
        <Card className="p-4">
          <div className="d-flex" style={{ gap: "20px" }}>
            <div className="material_box parts_image">
              <img
                src={`${BASE_URL}/uploads/${partsDetails.materialFile}.png`}
              />
            </div>
            <div style={{ width: "100%" }}>
              <h2 className="p_s_name"> {partsDetails.serviceName} </h2> 
              <div
                className="d-flex"
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span className="p_mFile">{partsDetails.materialFile}</span>
                <div
                  style={{ display: "flex", gap: "20px", alignItems: "center" }}
                >
                  <span className="p_qty">
                    Quantity : <b>{materialCount}</b>
                  </span>
                  <button className="btn border-btn">
                    <AiFillDelete /> Remove Parts
                  </button>
                </div>
              </div>
              <hr className="m-0" />
              <p>
                <span className="dir_count mr-3"> X: {partsDetails.dimention[0]}mm </span>
                <span className="dir_count mr-3"> Y: {partsDetails.dimention[1]}mm</span>
                <span className="dir_count mr-3"> Z: {partsDetails.dimention[2]}mm</span>
              </p>
            </div>
          </div>
        </Card>
      )}
      {!loading && !partsDetails.resolution ? (
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
                  <option value="">Select Material Option</option>
                  <option value="" className="optoin_header">
                    Direct Metal Laser Sintering (DMLS)
                  </option>
                  <option value="Aluminum AlSi10Mg">Aluminum AlSi10Mg</option>
                  <option value="Aluminum AlSi10Mg (X Line)">
                    Aluminum AlSi10Mg (X Line)
                  </option>
                  <option value="Cobalt Chrome">Cobalt Chrome</option>
                  <option value="Inconel 718">Inconel 718</option>
                  <option value="Inconel 718 (X Line)">
                    Inconel 718 (X Line)
                  </option>
                  <option value="Stainless Steel 17-4PH">
                    Stainless Steel 17-4PH
                  </option>
                  <option value="Stainless Steel 316L">
                    Stainless Steel 316L
                  </option>
                  <option value="Titanium Ti-6Al-4V">Titanium Ti-6Al-4V</option>
                  <option className="optoin_header" value="">
                    Stereolithography (SLA)
                  </option>
                  <option value="ABS-Like Black (Accura 7820)">
                    ABS-Like Black (Accura 7820)
                  </option>
                  <option value="ABS-Like Gray (Accura Xtreme Gray)">
                    ABS-Like Gray (Accura Xtreme Gray)
                  </option>
                  <option value="ABS-Like Translucent Clear (WaterShed)">
                    ABS-Like Translucent Clear (WaterShed)
                  </option>
                  <option value="ABS-Like White (Accura Xtreme White 200)">
                    ABS-Like White (Accura Xtreme White 200)
                  </option>
                  <option value="Carbon ABS-Like Black Rigid Polyurethane (RPU 70)">
                    Carbon ABS-Like Black Rigid Polyurethane (RPU 70)
                  </option>
                  <option value="Carbon Flame Retardant Black (EPX 86)">
                    Carbon Flame Retardant Black (EPX 86)
                  </option>
                  <option value="Carbon PP-Like Black Flexible Polyurethane (FPU 50)">
                    Carbon PP-Like Black Flexible Polyurethane (FPU 50)
                  </option>
                  <option value="Ceramic-Like Advanced High Temp White (PerFORM)">
                    Ceramic-Like Advanced High Temp White (PerFORM)
                  </option>
                  <option value="Metal Plated Ceramic-Like (PerFORM)">
                    Metal Plated Ceramic-Like (PerFORM)
                  </option>
                  <option value="MicroFine Gray™ (ABS-Like Micro Resolution)">
                    MicroFine Gray™ (ABS-Like Micro Resolution)
                  </option>
                  <option value="MicroFine Green™ (ABS-Like Micro Resolution)">
                    MicroFine Green™ (ABS-Like Micro Resolution)
                  </option>
                  <option value="PC-Like Advanced High Temp Translucent Amber (Accura 5530)">
                    PC-Like Advanced High Temp Translucent Amber (Accura 5530)
                  </option>
                  <option value="PC-Like Translucent Clear (Accura 60)">
                    PC-Like Translucent Clear (Accura 60)
                  </option>
                  <option value="PP-Like Translucent White (Somos 9120)">
                    PP-Like Translucent White (Somos 9120)
                  </option>
                  <option value="True Silicone White (Parts sourced from Europe)">
                    True Silicone White (Parts sourced from Europe)
                  </option>
                  <option value="" className="optoin_header">
                    Multi Jet Fusion (MJF)
                  </option>
                  <option value="PA 12 40% Glass Filled Natural (As Printed)">
                    PA 12 40% Glass Filled Natural (As Printed)
                  </option>
                  <option value="PA 12 40% Glass-Filled Black">
                    PA 12 40% Glass-Filled Black
                  </option>
                  <option value="PA 12 Black">PA 12 Black</option>
                  <option value="PA 12 Black with Vapor Smoothing">
                    PA 12 Black with Vapor Smoothing
                  </option>
                  <option value="PA 12 Natural (As Printed)">
                    PA 12 Natural (As Printed)
                  </option>
                  <option value="" className="optoin_header">
                    Selective Laser Sintering (SLS)
                  </option>
                  <option value="PA 11 Black">PA 11 Black</option>
                  <option value="PA 11 Black with Vapor Smoothing">
                    PA 11 Black with Vapor Smoothing
                  </option>
                  <option value="PA 12 25% Mineral Filled*">
                    PA 12 25% Mineral Filled*
                  </option>
                  <option value="PA 12 40% Glass Filled">
                    PA 12 40% Glass Filled
                  </option>
                  <option value="PA 12 White">PA 12 White</option>
                  <option value="PA 12 White with Vapor Smoothing">
                    PA 12 White with Vapor Smoothing
                  </option>
                  <option value="PP Natural">PP Natural</option>
                  <option value="TPU 70-A Black with Vapor Smoothing">
                    TPU 70-A Black with Vapor Smoothing
                  </option>
                  <option value="TPU 70-A White">TPU 70-A White</option>
                  <option value="TPU 70-A White with Vapor Smoothing">
                    TPU 70-A White with Vapor Smoothing
                  </option>
                  <option value="" className="optoin_header">
                    PolyJet (PLY)
                  </option>
                  <option value="Digital Black">Digital Black</option>
                  <option value="Digital Clear/Translucent">
                    Digital Clear/Translucent
                  </option>
                  <option value="Digital OverMold">Digital OverMold</option>
                  <option value="Digital White">Digital White</option>
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
                  <option value="">Select Resolution Option</option>
                  <option value={"High Res"}>High Res</option>
                  <option value={"Micro Res"}>Micro Res</option>
                  <option value={"Normal Res"}>Normal Res</option>
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
                  <option value="">Select Finish Option</option>
                  <option value={"Standard 1"}> Standard 1</option>
                  <option value={" Custom"}>Custom</option>
                  <option value={" Black Dyed Prototyping"}>
                    Black Dyed Prototyping
                  </option>
                  <option value={" Natural"}>Natural</option>
                  <option
                    value={" Production Dye Black (max. 390 x 390 x 360 mm)"}
                  >
                    Production Dye Black (max. 390 x 390 x 360 mm)
                  </option>
                  <option value={" Standard"}>Standard</option>
                  <option value={" Unfinished"}>Unfinished</option>
                  <option value={" Vapor Smooth"}>Vapor Smooth</option>
                  <option value={" Vapor Smooth Dye Black"}>
                    Vapor Smooth Dye Black
                  </option>
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
                  <option value="">Select Orientation Option</option>
                  <option value={"Custom"}>Custom</option>
                  <option value={"Let Us Decide"}>Let Us Decide</option>
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
              <button
                onClick={(e) => requestForQuots()}
                className="btn btn_cont"
              >
                Request for Quote
              </button>
            </div>
          </Card>
        </div>
      ) : (
        <>
          {!loading && (
            <div className="mt-4">
              <Card className="p-5 m_conf">
                <h2 className="text-gray"> Material Configuration</h2>
                <div class="form-group row " style={{ marginBottom: "2rem" }}>
                  <label for="inputPassword" class="col-sm-2 col-form-label">
                    Material
                  </label>
                  <div class="col-sm-10">
                    <input
                      className="form-control"
                      type="text"
                      disabled
                      value={partsDetails.materialType}
                    />
                  </div>
                </div>

                <div class="form-group row " style={{ marginBottom: "2rem" }}>
                  <label for="inputPassword" class="col-sm-2 col-form-label">
                    Resolution
                  </label>
                  <div class="col-sm-10">
                    <input
                      className="form-control"
                      type="text"
                      disabled
                      value={partsDetails.resolution}
                    />
                  </div>
                </div>
                <div class="form-group row " style={{ marginBottom: "2rem" }}>
                  <label for="inputPassword" class="col-sm-2 col-form-label">
                    Finish
                  </label>
                  <div class="col-sm-10">
                    <input
                      className="form-control"
                      type="text"
                      disabled
                      value={partsDetails.finish}
                    />
                  </div>
                </div>
                <div class="form-group row " style={{ marginBottom: "2rem" }}>
                  <label for="inputPassword" class="col-sm-2 col-form-label">
                    Orientation
                  </label>
                  <div class="col-sm-10">
                    <input
                      className="form-control"
                      type="text"
                      disabled
                      value={partsDetails.resolution}
                    />
                  </div>
                </div>
              </Card>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MaterialandQuestions;
