import React from "react";
import { Card } from "@mui/material";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai"
const MaterialandQuestions = () => {

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
          <form className="mt-4">
            <div class="form-group row " style={{marginBottom:'2rem'}}>
              <label for="inputPassword" class="col-sm-2 col-form-label">
              Material
              </label>
              <div class="col-sm-10">
                <select className="form-control " style={{borderRadius:'0px'}}>
                  <option> Inconel 718 </option>
                  <option> Inconel 718 </option>
                  <option> Inconel 718 </option>
                  <option> Inconel 718 </option>
                </select>
              </div>
            </div>
            
            <div class="form-group row " style={{marginBottom:'2rem'}}>
              <label for="inputPassword" class="col-sm-2 col-form-label">
              Resolution
              </label>
              <div class="col-sm-10">
                <select className="form-control " style={{borderRadius:'0px'}}>
                  <option> Normal Res</option>
                  <option> Normal Res</option>
                  <option> Normal Res</option>
                  <option> Normal Res</option>
                </select>
              </div>
            </div>
            
            <div class="form-group row " style={{marginBottom:'2rem'}}>
              <label for="inputPassword" class="col-sm-2 col-form-label">
              Finish
              </label>
              <div class="col-sm-10">
                <select className="form-control " style={{borderRadius:'0px'}}>
                  <option> Standard </option>
                  <option> Standard </option>
                  <option> Standard </option>
                  <option> Standard </option>
                </select>
              </div>
            </div>
            
            <div class="form-group row " style={{marginBottom:'2rem'}}>
              <label for="inputPassword" class="col-sm-2 col-form-label">
              Orientation
              </label>
              <div class="col-sm-10">
                <select className="form-control " style={{borderRadius:'0px'}}>
                  <option> Let us decide </option>
                  <option> Let us decide </option>
                  <option> Let us decide </option>
                  <option> Let us decide </option>
                </select>
              </div>
            </div>
            
            <div class="form-group row " style={{marginBottom:'2rem'}}>
              <label for="inputPassword" class="col-sm-2 col-form-label">
              Material
              </label>
              <div class="col-sm-2">
                <div className="row" style={{alignItems:'center'}} >
                  <div className="text-center col-md-4"><AiOutlineMinus className="cp"/> </div>
                  <div className=" col-md-4"> <input className="form-control" style={{borderRadius:'0px'}}/> </div>
                  <div className="text-center col-md-4"> <AiOutlinePlus className="cp"/> </div>
                </div>
              </div>
            </div>
          </form>
          <h2 className="text-gray"> 2.More Options</h2>
          <div className="text-right">
            <button className="btn btn_cont">Continue</button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MaterialandQuestions;
