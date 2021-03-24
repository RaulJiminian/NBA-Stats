import axios from "axios";
import TeamRoster from "../components/TeamRoster";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Divider, makeStyles } from "@material-ui/core";
import { API_KEY } from "../config/base";
import TeamCardFull from "../components/TeamCardFull";
import VenueCard from "../components/VenueCard";
import SeasonStatsCard from "../components/SeasonStatsCard";
import { TeamContext } from "../utilities/TeamContext";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    margin: "35px auto",
    display: "grid",
    gridGap: "5px",
    gridTemplateColumns: "repeat(auto-fit, 342px)",
    justifyContent: "center",
  },
  divider: {
    width: "95%",
    margin: `${theme.spacing(4)}px auto`,
  },
}));

function TeamPage() {
  const [teamProfile, setTeamProfile] = useState({});
  const [teamStandings, setTeamStandings] = useState({})
  const [teamSeasonStats, setTeamSeasonStats] = useState({})
  const { teamId } = useParams();
  const allTeamsInfo = useContext(TeamContext);
  const classes = useStyles();
  const year = "2020";

  const currentTeam = allTeamsInfo?.find((team) => team.id === teamId)
  const { conferenceId, divisionId } = currentTeam
  
  useEffect(() => {
    const fetchTeamProfile = async () => {
      const urlTeamProfile = `http://api.sportradar.us/nba/trial/v7/en/teams/${teamId}/profile.json?api_key=${API_KEY}`;
      
      const responseProfile = await axios(urlTeamProfile);
      setTeamProfile(responseProfile.data);
    };
    
    fetchTeamProfile();
  }, [teamId]);
  
  useEffect(() => {
    const fetchTeamStandings = async () => {
      const urlStandings = `https://api.sportradar.us/nba/trial/v7/en/seasons/${year}/REG/standings.json?api_key=${API_KEY}`
      
      const responseStandings = await axios(urlStandings);
      setTeamStandings(responseStandings.data)
    };

    setTimeout(() => fetchTeamStandings(), 1000);
  }, [teamId]);

  useEffect(() => {
    const fetchTeamSeasonStats = async () => {
      const urlSeasonStats = `https://api.sportradar.us/nba/trial/v7/en/seasons/${year}/REG/teams/${teamId}/statistics.json?api_key=${API_KEY}`
      
      const responseSeasonStats = await axios(urlSeasonStats);
      setTeamSeasonStats(responseSeasonStats.data)
    };

    setTimeout(() => fetchTeamSeasonStats(), 2000);
  }, [teamId]);

  return (
    <div>
      <div className={classes.root}>
        {teamProfile &&
          <VenueCard teamProfile={teamProfile} />
        }
        {teamProfile && teamStandings &&
          <>
            <TeamCardFull teamId={teamId} conferenceId={conferenceId} divisionId={divisionId} teamStandings={teamStandings}/>
            <SeasonStatsCard teamId={teamId} conferenceId={conferenceId} divisionId={divisionId} teamStandings={teamStandings} />
          </>
        }
      </div>
      <Divider className={classes.divider} />
      {teamSeasonStats && 
        <TeamRoster teamSeasonStats={teamSeasonStats}/>
      }
    </div>
  );
}

export default TeamPage;
