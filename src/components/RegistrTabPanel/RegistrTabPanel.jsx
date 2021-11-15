import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import RegistrationForm from "../Pages/logIn/RegistrationForm";
import LogInForm from "../Pages/logIn/LogInForm";
import { Paper } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

function RegistrTabPanel() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        maxWidth: 500,
        position: "relative",
        minHeight: 200,
      }}
    >
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="Log In Form" {...a11yProps(0)} />
          <Tab label="Registration Form" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <Paper>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <LogInForm />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <RegistrationForm />
        </TabPanel>
      </Paper>
    </Box>
  );
}

export default RegistrTabPanel;
