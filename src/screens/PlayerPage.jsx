import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../config/base";
import { Divider, makeStyles } from "@material-ui/core";
import PlayerScrollTab from "../components/PlayerScrollTab";

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

function PlayerPage() {
  const [playerProfile, setPlayerProfile] = useState({});
  const { playerId } = useParams();
  const classes = useStyles();

  useEffect(() => {
    const fetchPlayerProfile = async () => {
      const urlPlayerProfile = `https://api.sportradar.us/nba/trial/v7/en/players/${playerId}/profile.json?api_key=${API_KEY}`;

      const response = await axios(urlPlayerProfile);
      setPlayerProfile(response.data);
    };

    fetchPlayerProfile();
  }, [playerId]);

  // Need Photo

  // playerProfile.full_name
  // playerProfile.height
  // playerProfile.weight
  // playerProfile.position
  // playerProfile.jersey_number
  // playerProfile.experience // Rename to "Yrs in league"
  // playerProfile.birthdate // convert to age ("1988-03-14")

  // playerProfile.draft.year
  // playerProfile.draft.round
  // playerProfile.draft.pick

  return (
    <div>
      <div className={classes.root}></div>
      <Divider className={classes.divider} />
      {playerProfile && <PlayerScrollTab playerProfile={playerProfile} />}
    </div>
  );
}

export default PlayerPage;
