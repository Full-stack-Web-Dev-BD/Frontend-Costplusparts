import React, { useState } from "react";
import { Link } from "react-router-dom";

const FileUpload = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleFileSelect = () => {
    // ... (same as before)
  };

  const handleFileUpload = (event) => {
    // ... (same as before)
  };

  const handleDragEnter = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    // setIsDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    // Handle dropped file here
    const droppedFile = event.dataTransfer.files[0];
    console.log("Dropped file:", droppedFile);
  };

  return (
    <div id="file_upload_box">
    <div className="container">
      <h3 className="text-center mt-5">Upload your CAD Files</h3>
      <div
        className={`text-center file_upload_box mt-4 mb-4 ${isDragging ? "dragging" : ""}`}
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
            src={require('./upload.png')}
            className={`mb-4 ${isDragging ? "dragging" : ""}`}
            onClick={handleFileSelect}
            style={{ cursor: "pointer" }}
            alt="Upload"
          />
          <h4>Drag-and-drop your 3D Printing files anywhere, or browse files</h4>
          <p>
            We accept the following CAD files for 3D printing: MESH (.stl), STEP
            (.stp/.step), SOLIDWORKS (.sldprt), or IGES (.igs/.iges).
          </p>
          <p>Maximum File Size: 125 MB</p>
        </div>
      </div>
      <div className="text-center">
        <Link to="/material-and-questions/title/upload_ID">
        <button className="btn btn-cont common_button">Continue</button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default FileUpload;
