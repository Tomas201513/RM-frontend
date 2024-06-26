import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel'; 
import Senario from './Senario/Senario';
import Procurementdashbord from './Procurementdashbord'

function ProcGeneral() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
    <>
    <Box sx={{ width: '100%', typography: 'body1', ml: 5 }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Dashboard" value="1" />
          <Tab label="senario" value="2" />
            {/* <Tab label="Sub-catagory" value="3" />
            <Tab label="Catagory" value="4" /> */}
          </TabList>
        </Box>
        <TabPanel value="1"><Procurementdashbord /></TabPanel>
        <TabPanel value="2"><Senario /></TabPanel>
        {/* <TabPanel value="3"><SubCatagory /></TabPanel>
        <TabPanel value="4"><Catagory /></TabPanel> */}
      </TabContext>
    </Box>
    </>
    )
}

export default ProcGeneral
