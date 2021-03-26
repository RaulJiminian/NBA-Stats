import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BarGraphPoints from './BarGraphPoints';
import BarGraphRebounds from './BarGraphRebounds';
import BarGraphAssists from './BarGraphAssists';
import BarGraphSteals from './BarGraphSteals';
import BarGraphBlocks from './BarGraphBlocks';
import BarGraphTurnovers from './BarGraphTurnovers';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '90%',
    margin: '0 auto',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function PlayerScrollTab({playerProfile}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const playerAverages = playerProfile?.seasons?.map(season => {
    let seasonYear = season?.year
    let seasonStats = season?.teams?.map(team => {
      return ({
        points: team?.average?.points,
        rebounds: team?.average?.rebounds,
        assists: team?.average?.assists,
        steals: team?.average?.steals,
        blocks: team?.average?.blocks,
        turnovers: team?.average?.turnovers,
      })
    })
  
    return ({
      year: seasonYear,
      stats: seasonStats,
    })
  })

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Points" {...a11yProps(0)} />
          <Tab label="Rebounds" {...a11yProps(1)} />
          <Tab label="Assists" {...a11yProps(2)} />
          <Tab label="Steals" {...a11yProps(3)} />
          <Tab label="Blocks" {...a11yProps(4)} />
          <Tab label="Turnovers" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {playerAverages &&
          <BarGraphPoints playerAverages={playerAverages}/>
        }
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BarGraphRebounds playerAverages={playerAverages}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <BarGraphAssists playerAverages={playerAverages}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <BarGraphSteals playerAverages={playerAverages}/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <BarGraphBlocks playerAverages={playerAverages}/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <BarGraphTurnovers playerAverages={playerAverages}/>
      </TabPanel>
    </div>
  );
}