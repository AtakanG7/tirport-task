import * as React from 'react';
import MuiTabs from '@mui/material/Tabs'; // Renamed the import to MuiTabs
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Profile from './Profile';
import Follows from './Follows';
import Coupon from './Coupon';

import "./Tabs.css"

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className={`tab-container mt-5 `}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function CustomTabs() { // Renamed the functional component to CustomTabs
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className="tabs-container">
      <Box className="row justify-content-center" sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
        <div className="d-flex justify-content-center col-xl-10">
          <MuiTabs  value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab className='font' label="Profil Bilgilerim" {...a11yProps(0)} />
            <Tab className='font' label="Taşıyıcılar" {...a11yProps(1)} />
            <Tab className='font' label="Kuponlar" {...a11yProps(2)} />
          </MuiTabs>
        </div>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Profile/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Follows/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Coupon/>
      </CustomTabPanel>
    </Box>
  );
}
