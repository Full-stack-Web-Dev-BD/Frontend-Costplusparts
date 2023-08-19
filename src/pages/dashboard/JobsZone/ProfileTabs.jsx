import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Card } from "@mui/material";
import { connect } from "react-redux";
import axios from "axios";
import { BASE_URL, getHeader } from "../../../utils/constant";
import toast from "react-hot-toast";

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

const ProfileTab = ({ auth }) => {
  const [firstname, setfirstname] = useState(auth.user.firstname);
  const [lastname, setlastname] = useState(auth.user.lastname);
  const [company, setcompany] = useState(auth.user.company);
  const [country, setcountry] = useState(auth.user.country);
  const [phone, setphone] = useState(auth.user.phone);
  const [postalCode, setpostalCode] = useState(auth.user.postalCode);
  // password update
  const [password, setpassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const updateUserProfile = async () => {
    const data = {
      firstname,
      lastname,
      company,
      country,
      phone,
      postalCode,
    };
    try {
      const response = await axios.put(
        `${BASE_URL}/api/users/${auth.user._id}`,
        data,
        {headers:getHeader()}
      );
      console.log(response);
      toast.success("User profile updated successfully !!!");
    } catch (error) {
      console.log(error);
      toast.error("Error while updating user profile");
    }
  };

  const updatePassword = async () => {
    if ((!password, !newPassword, !confirmPassword)) {
      toast.error("Please Fill the form and try again");
    } else if (newPassword.length < 8) {
      toast.error("Please enter at least 8 characters");
    } else if (newPassword !== confirmPassword) {
      toast.error(
        "Both password are not similar (New password/Confirm Password"
      );
    } else {
      const data = {
        currentPassword: password,
        newPassword: newPassword,
      };
      try {
        const response = await axios.put(
          `${BASE_URL}/api/auth/update-password/${auth.user._id}`,
          data,
          {headers:getHeader()}
        );
        toast.success("Password updated successfully");
      } catch (error) {
        const allError = error.response?.data;
        allError.errors.forEach((error) => {
          toast.error(error.msg);
        });
      }
    }
  };

  return (
    <Box sx={{ width: "100%", marginTop: "30px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <div className="job_tab_wrap">
          <h4 onClick={(e) => console.log(auth)}>Fabricio Guardia</h4>
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
                <p>
                  <div className=" mb-4">
                    <Typography variant="h4">Profile Details</Typography>
                  </div>
                </p>
                <p>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label className=" m-0">First Name</label>
                      <input
                        value={firstname}
                        onChange={(e) => setfirstname(e.target.value)}
                        style={{ textTransform: "capitalize" }}
                        className="form-control"
                        placeholder=""
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label className=" m-0">Last Name</label>
                      <input
                        value={lastname}
                        onChange={(e) => setlastname(e.target.value)}
                        style={{ textTransform: "capitalize" }}
                        className="form-control"
                        placeholder=""
                      />
                    </div>
                    <div className="col-md-12 mb-4">
                      <label className=" m-0">Company</label>
                      <input
                        value={company}
                        onChange={(e) => setcompany(e.target.value)}
                        style={{ textTransform: "capitalize" }}
                        className="form-control"
                        placeholder=""
                      />
                    </div>
                    <div className="col-md-12 mb-4">
                      <label className=" m-0">Country</label>
                      <select
                        onChange={(e) => setcountry(e.target.value)}
                        style={{ textTransform: "capitalize" }}
                        className="form-control"
                      >
                        <option value={country}> {auth.user.country} </option>
                        <option>Bangladesh</option>
                        <option>India</option>
                        <option>United States of America</option>
                      </select>
                    </div>
                    <div className="col-md-12 mb-4">
                      <label className=" m-0">Phone Number</label>
                      <input
                        type="number"
                        value={phone}
                        onChange={(e) => setphone(e.target.value)}
                        style={{ textTransform: "capitalize" }}
                        className="form-control"
                        placeholder=""
                      />
                    </div>
                    <div className="col-md-12 mb-4">
                      <label className=" m-0">Postal Code</label>
                      <input
                        value={postalCode}
                        onChange={(e) => setpostalCode(e.target.value)}
                        style={{ textTransform: "capitalize" }}
                        className="form-control"
                        type="number"
                        placeholder="Polstal Code"
                      />
                    </div>
                  </div>
                </p>
                <div className=" text-right update_profile">
                  <button
                    className="btn btn"
                    onClick={(e) => updateUserProfile()}
                  >
                    Update Profile
                  </button>
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
                    <input
                      type="password"
                      onChange={(e) => setpassword(e.target.value)}
                      name="password"
                      className="form-control"
                      placeholder="Old Password"
                    />
                  </div>
                  <div className="col-md-12 mb-4">
                    <label className=" m-0">New Password (8+ characters)</label>
                    <input
                      onChange={(e) => setnewPassword(e.target.value)}
                      type="password"
                      className="form-control"
                      placeholder="New Password"
                    />
                  </div>
                  <div className="col-md-12 mb-4">
                    <label className=" m-0">Confirm New Password</label>
                    <input
                      onChange={(e) => setconfirmPassword(e.target.value)}
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>
                <div className=" text-right update_profile">
                  <button className="btn btn" onClick={(e) => updatePassword()}>
                    Change
                  </button>
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
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, null)(ProfileTab);
