import React from "react"; 
const FileUpload = () => {
  return (
    <div className="container">
      <h3 className="text-center mt-5">Upload your CAD Files</h3>
      <div className="text-center file_upload_box mt-4 mb-4">
        <div className="mt-4">
          <img src={require('./upload.png')} className="mb-4" />
          <h4>
            Drag-and-drop your 3D Printing files anywhere, or browse files
          </h4>
          <p>
            We accept the following CAD files for 3D printing: MESH (.stl), STEP
            (.stp/.step), SOLIDWORKS (.sldprt), or IGES (.igs/.iges).
          </p>
          <p>Maximum File Size: 125 MB</p>
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-cont common_button">Continue</button>
      </div>
    </div>
  );
};

export default FileUpload;
