import { useContext } from "react";
import { TeamContext } from "../utilities/TeamContext";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import emptyAvatar from "../assets/empty-avatar.svg"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  imgFit: {
    objectFit: "contain",
  },
});

export default function PlayerImageCard({playerProfile}) {
  const teamInfo = useContext(TeamContext);
  const classes = useStyles();

  const currentTeam = teamInfo.find((team) => team.id === playerProfile?.team?.id);

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="player profile"
        height="350"
        image={emptyAvatar}
        className={classes.imgFit}
        title="player profile"
      />
    </Card>
  );
}
