import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

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

export default function JobTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", marginTop: "30px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }} >
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
        Profile
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Password
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Billing
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Address
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <div className="p-5">
          <div className="row mt-5">
            <div className="col-md-4 cp">
              <div className="sc_job">
                <Link to={"/upload/material"}>
                  <div className="sc_jobs_content tex-center">
                    <AiOutlinePlus style={{color:'black'}} />
                    <br />
                    <span style={{color:'black'}}>Set Up a New Material</span>
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
