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
import { BASE_URL, authTokenInHeader } from "../../../utils/constant";
import toast from "react-hot-toast";
import MaterialManagement from "./MaterialManagement/MaterialManagement";



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
  const [firstname, setfirstname] = useState(auth.user?.firstname);
  const [lastname, setlastname] = useState(auth.user?.lastname);
  const [company, setcompany] = useState(auth.user?.company);
  const [country, setcountry] = useState(auth.user?.country);
  const [phone, setphone] = useState(auth.user?.phone);
  const [postalCode, setpostalCode] = useState(auth.user?.postalCode);
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
        { headers: authTokenInHeader() }
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
          { headers: authTokenInHeader() }
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
    <Box sx={{ width: "100%"}}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <div className="job_tab_wrap">
          <h4 onClick={(e) => console.log(auth)}>Admin Panel</h4>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Materials" {...a11yProps(0)} />
          </Tabs>
        </div>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <MaterialManagement/>
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
