import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import UpcomingMovies from './MovieComponents/UpcomingMovies';
import PopularMovies from './MovieComponents/PopularMovies';
import TopRated from './MovieComponents/TopRated';
import NowPlaying from './MovieComponents/NowPlaying';


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
        <Box sx={{ p: 0 }}>
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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function MovieTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Box sx={{ width: '100%'  }} className="mb-12">
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}} className="mb-20 lg:overflow-hidden overflow-scroll no-scrollbar md:overflow-scroll md:no-scrollbar relative">
        <Tabs 
        value={value} 
        onChange={handleChange} 
        TabIndicatorProps={{sx:{backgroundColor:"#facc15"}}}
        sx={{
          "& button": {color: 'white', borderRadius: 1},
          "& button.Mui-selected":{color: '#facc15'}
        }}
        aria-label="basic tabs example"
        className='w-[200%] flex items-center md:w-[117%] lg:w-[100%]'
        >
          <Tab label="Now Playing" {...a11yProps(0)} />
          <Tab label="Upcoming Movies" {...a11yProps(1)}/>
          <Tab label="Popular Downloads" {...a11yProps(2)} />
          <Tab label="Top Rated" {...a11yProps(3)} />
        
          <div className='flex justify-end w-full lg:items-center font-sans lg:w-full text-black md:w-screen md:justify-end md:items-center'>
            <button className='h-full transition ease-in-out w-28 rounded text-white border-2 border-white bg-transparent hover:border-yellow-1 hover:text-yellow-1 md:h-11 md:w-32'>View All</button>
          </div>
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <NowPlaying/>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <UpcomingMovies/>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <PopularMovies/>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={3}>
        <TopRated/>
      </CustomTabPanel>
    </Box>
  );
}
