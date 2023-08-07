import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Card } from "@mui/material";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ProfileTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", marginTop: "30px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <div className="job_tab_wrap">
          <h4>Fabricio Guardia</h4>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Profile" {...a11yProps(0)} />
            <Tab label="Password" {...a11yProps(1)} />
            <Tab label="Billing" {...a11yProps(2)} />
            <Tab label="Address" {...a11yProps(3)} />
            <Tab label="Materials" {...a11yProps(4)} />
          </Tabs>
        </div>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="p-5">
          <div className="row">
            <div className="col-md-6">
              <Card className="p-4">
                <div className=" mb-4">
                  <h4>Profile Details</h4>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label className=" m-0">First Name</label>
                    <input className="form-control" placeholder="" />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label className=" m-0">Last Name</label>
                    <input className="form-control" placeholder="" />
                  </div>
                  <div className="col-md-12 mb-4">
                    <label className=" m-0">Company</label>
                    <input className="form-control" placeholder="" />
                  </div>
                  <div className="col-md-12 mb-4">
                    <label className=" m-0">Country</label>
                    <select className="form-control">
                      <option>United States of America</option>
                      <option>United States of America</option>
                      <option>United States of America</option>
                    </select>
                  </div>
                  <div className="col-md-12 mb-4">
                    <label className=" m-0">Phone Number</label>
                    <input className="form-control" placeholder="" />
                  </div>
                  <div className="col-md-12 mb-4">
                    <label className=" m-0">Postal Code</label>
                    <input className="form-control" placeholder="First Name" />
                  </div>
                </div>
                <div className=" text-right update_profile">
                  <button className="btn btn">Update Profile</button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="p-5">
          <div className="row">
            <div className="col-md-6">
              <Card className="p-4">
                <div className=" mb-4">
                  <h4>Change Password</h4>
                </div>
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <label className=" m-0">Old Password</label>
                    <input className="form-control" placeholder="" />
                  </div>
                  <div className="col-md-12 mb-4">
                    <label className=" m-0">New Password (8+ characters)</label>
                    <input className="form-control" placeholder="" />
                  </div>
                  <div className="col-md-12 mb-4">
                    <label className=" m-0">Confirm New Password</label>
                    <input className="form-control" placeholder="First Name" />
                  </div>
                </div>
                <div className=" text-right update_profile">
                  <button className="btn btn">Change</button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className="p-4">
          <div className="row mt-5">
            <div className="col-md-4 cp">
              <div className="sc_job">
                <Link to={"/scedule-job"}>
                  <div className="sc_jobs_content tex-center">
                    <AiOutlinePlus style={{ color: "gray" }} />
                    <br />
                    <span style={{ color: "gray" }}>New Card</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <div className="p-4">
          <div className="row mt-5">
            <div className="col-md-4 cp">
              <div className="sc_job">
                <Link to={"/scedule-job"}>
                  <div className="sc_jobs_content tex-center">
                    <AiOutlinePlus style={{ color: "gray" }} />
                    <br />
                    <span style={{ color: "gray" }}>New Address</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <div className="p-5">
          <div className="row mt-5">
            <div className="col-md-4 cp">
              <div className="sc_job">
                <Link to={"/upload/material"}>
                  <div className="sc_jobs_content tex-center">
                    <AiOutlinePlus style={{ color: "black" }} />
                    <br />
                    <span style={{ color: "black" }}>
                      Set Up a New Material
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </CustomTabPanel>
    </Box>
  );
}
