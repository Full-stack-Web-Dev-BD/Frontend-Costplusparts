import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";
import toast from "react-hot-toast";
import axios from "axios";
import { BASE_URL, getHeader } from "../../utils/constant";
const MyAllParts = () => {
  const [myAllParts, setmyAllParts] = useState([]);
  useEffect(() => {
    fetchAllParts();
  }, []);
  const fetchAllParts = async () => {
    const response = await axios.get(`${BASE_URL}/api/parts`,{headers:getHeader()});
    setmyAllParts(response.data);
  };
  return (
    <div className="p-4 mt-4">
      {myAllParts.reverse().map((parts, i) => (
        <Card className="p-4 mb-4" key={i}>
          <div className="d-flex" style={{ gap: "20px" }}>
            <div className="material_box">
              <img src={require("./material.png")} />
            </div>
            <div style={{ width: "100%" }}>
              <h2> {parts.serviceName} </h2>
              <p className="m-0">Pump Manifold v3.step</p>
              <div
                className="d-flex"
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>1174-4226-001</span>
                <div
                  style={{ display: "flex", gap: "20px", alignItems: "center" }}
                >
                  <span>Quantity 1</span>
                  <button className="btn border-btn">Configure Parts</button>
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
      ))}
    </div>
  );
};

export default MyAllParts;
