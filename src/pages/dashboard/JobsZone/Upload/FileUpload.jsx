import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useParams ,useHistory} from "react-router-dom";
import { BASE_URL, authTokenInHeader }from "../../../../utils/constant";
import axios from "axios";

const FileUpload = () => {
  const [uploadedFile, setUploadedFile] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const { jobId } = useParams();
const history= useHistory()
  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await axios.post(
        `${BASE_URL}/api/parts/upload-material`,
        formData,
        {headers:authTokenInHeader()}
      );
      toast("File uploaded");
      console.log(response?.data?.filename);
      setUploadedFile(response?.data?.filename);
      window.localStorage.setItem("fileName", response?.data?.filename);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  const handleDragEnter = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = () => {
    // setIsDragging(false);
  };
  const maxFileSize = 125 * 1024 * 1024; // 125 MB in bytes
  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    // Handle dropped file here
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      if (droppedFile.size <= maxFileSize) {
        setSelectedFile(droppedFile);
      } else {
        toast("Invalid file format or file size exceeds the limit.");
      }
    }
    setSelectedFile(droppedFile);
    console.log("Dropped file:", droppedFile);
    handleFileUpload(droppedFile);
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size <= maxFileSize) {
        setSelectedFile(file);
      } else {
        toast("Invalid file format or file size exceeds the limit.");
      }
    }
    handleFileUpload(file);
  };
  const createParts = async () => {
    const serviceName = window.localStorage.getItem("service");
    const partsJobID = jobId;
    const data = {
      serviceName: serviceName,
      materialFile: uploadedFile,
      jobID: partsJobID,
    };
    try {
      const response = await axios.post(`${BASE_URL}/api/parts`, data,{headers:authTokenInHeader()});
      console.log(response.data);
      toast.success("Parts created successfully");
      history.push("/jobs")
    } catch (error) {
      console.log(error);
      console.log(error.response?.data);
      toast.error("Parts creation faield");
    }
  };
  return (
    <div>
      <div id="file_upload_box">
        <input
          type="file"
          id="handle_click_CAD"
          accept=".stl,.step,.stp,.sldprt,.igs,.iges"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <div className="container">
          <h3 className="text-center mt-5">Upload your CAD Files</h3>
          {uploadedFile ? (
            <div className="file_upload_box">
              <p className="text-center">File Uploaded: {uploadedFile} </p>
            </div>
          ) : (
            <div
              className={`text-center file_upload_box mt-4 mb-4 ${
                isDragging ? "dragging" : ""
              }`}
              onDragEnter={handleDragEnter}
              onDragOver={(event) => event.preventDefault()}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div
                className={`mt-4 ${isDragging ? "dragging" : ""}`}
                onDragEnter={handleDragEnter}
                onDragOver={(event) => event.preventDefault()}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <img
                  id="uploadImage"
                  src={require("./upload.png")}
                  className={`mb-4 ${isDragging ? "dragging" : ""}`}
                  style={{ cursor: "pointer" }}
                  alt="Upload"
                />
                <h4>
                  Drag-and-drop your 3D Printing files anywhere, or{" "}
                  <span
                    style={{ color: "blue", cursor: "pointer" }}
                    onClick={(e) =>
                      document.getElementById("handle_click_CAD").click()
                    }
                  >
                    browse files
                  </span>
                </h4>
                <p>
                  We accept the following CAD files for 3D printing: MESH
                  (.stl), STEP (.stp/.step), SOLIDWORKS (.sldprt), or IGES
                  (.igs/.iges).
                </p>
                <p>Maximum File Size: 125 MB</p>
              </div>
            </div>
          )}
          <div className="text-center">
            {uploadedFile ? (
              <button
                onClick={(e) => createParts()}
                className="btn btn-cont common_button"
              >
                Continue
              </button>
            ) : (
              <button
                onClick={(e) => toast("Please Select a valid file  ")}
                className="btn btn-cont common_button"
              >
                Continue
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
