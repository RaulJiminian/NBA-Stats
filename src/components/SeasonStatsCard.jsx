import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import MiniSeasonTable from "./MiniSeasonTable";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  headingMargin: {
    marginTop: 25,
  },
  contentPadding: {
    paddingTop: 20,
  },
}));

export default function SeasonStatsCard(props) {
  const { teamId, teamStandings, conferenceId, divisionId } = props;
  const classes = useStyles();

  const currentTeamStanding = teamStandings?.conferences?.find((conference) => conference.id === conferenceId)?.divisions?.find((division) => division.id === divisionId)?.teams?.find((team) => team.id === teamId)

  return (
    <Card className={classes.root}>
      <Typography className={classes.headingMargin} variant="h5" component="h2">
        2020-21 Season Statistics
      </Typography>
      <CardContent className={classes.contentPadding}>
        {currentTeamStanding && 
          <MiniSeasonTable currentTeamStanding={currentTeamStanding}/>
        }
      </CardContent>
    </Card>
  );
}
