import { useContext } from 'react';
import { TeamContext } from "../utilities/TeamContext";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from '@material-ui/core/Hidden';
import Typography from "@material-ui/core/Typography";
import MiniDraftTable from "./MiniDraftTable";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  headingMargin: {
    borderBottom: "2px solid #EA15DC",
    width: "90%",
    margin: "25px auto 0",
  },
  contentPadding: {
    paddingTop: 20,
  },
  imgFit: {
    objectFit: "contain",
  },
}));

export default function PlayerDraftCard(props) {
  const classes = useStyles();
  const teamInfo = useContext(TeamContext);

  const { draft, team } = props.playerProfile
  const currentTeam = teamInfo?.find((teams) => teams?.id === team?.id);

  return (
    <Card className={classes.root}>
      <Typography className={classes.headingMargin} variant="h5" component="h2">
        Draft Information
      </Typography>
      <CardContent className={classes.contentPadding}>
        {draft && 
          <MiniDraftTable draft={draft}/>
        }
      </CardContent>
      <Hidden smDown>
        <CardMedia
          component="img"
          alt="Team Name"
          height="140"
          image={currentTeam?.banner}
          className={classes.imgFit}
          title="Team Name"
        />
      </Hidden>
    </Card>
  );
}
