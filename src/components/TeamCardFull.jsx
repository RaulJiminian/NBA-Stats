import { useContext } from "react";
import { TeamContext } from "../utilities/TeamContext";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import MiniRankTable from "./MiniRankTable";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  imgFit: {
    objectFit: "contain",
  },
});

export default function TeamCardFull( props ) {
  const { teamId, teamStandings, conferenceId, divisionId } = props;
  const teamInfo = useContext(TeamContext);
  const classes = useStyles();

  const { banner, name } = teamInfo.filter((team) => team.id === teamId)[0];
  
  const currentTeamStanding = teamStandings?.conferences?.find((conference) => conference.id === conferenceId)?.divisions?.find((division) => division.id === divisionId)?.teams?.find((team) => team.id === teamId)

  const wins = currentTeamStanding?.wins;
  const losses = currentTeamStanding?.losses;
  const rankings = currentTeamStanding?.calc_rank;

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="Team Name"
        height="140"
        image={banner}
        className={classes.imgFit}
        title="Team Name"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {wins} Wins - {losses} Losses
        </Typography>
        <MiniRankTable rankings={rankings} />
      </CardContent>
    </Card>
  );
}
