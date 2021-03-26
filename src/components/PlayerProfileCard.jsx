import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { useContext } from "react";
import { TeamContext } from "../utilities/TeamContext";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  listRoot: {
    width: "100%",
    maxWidth: 345,
    backgroundColor: theme.palette.background.paper,
  },
  listValue: {
    textAlign: "end",
  },
  listHeight: {
    height: 40,
  },
  headingMargin: {
    marginTop: 25,
  },
  contentPadding: {
    paddingTop: 20,
  },
  anchorDisplay: {
    color: "#3f51b5",
    fontWeight: 500,
  }
}));

export default function PlayerProfileCard({ playerProfile }) {
  const teamInfo = useContext(TeamContext);
  const classes = useStyles();

  const currentTeam = teamInfo.find(
    (team) => team.id === playerProfile?.team?.id
  );

  function getAge(dateString) {
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  function convertInchesToFeet(totalInches) {
    const feet = Math.floor(totalInches / 12);
    const inches = totalInches % 12;

    return `${feet}'${inches}"`;
  }

  const formattedHeight = convertInchesToFeet(playerProfile?.height);
  const age = getAge(playerProfile?.birthdate);

  return (
    <Card className={classes.root}>
      <Typography className={classes.headingMargin} variant="h5" component="h2">
        {playerProfile?.full_name}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        <Link className={classes.anchorDisplay} to={`/teams/${currentTeam?.id}`}>{currentTeam?.name}</Link>{" "}
        <span>&#183;</span> #{playerProfile?.jersey_number} <span>&#183;</span>{" "}
        {playerProfile?.position}
      </Typography>
      <CardContent className={classes.contentPadding}>
        <List className={classes.root} aria-label="Player Profile Information">
          <Divider light />
          <ListItem button className={classes.listHeight}>
            <ListItemText primary="Height:" />
            <ListItemText
              className={classes.listValue}
              primary={`${formattedHeight}`}
            />
          </ListItem>
          <Divider light />
          <ListItem button className={classes.listHeight}>
            <ListItemText primary="Weight:" />
            <ListItemText
              className={classes.listValue}
              primary={`${playerProfile?.weight} lbs`}
            />
          </ListItem>
          <Divider light />
          <ListItem button className={classes.listHeight}>
            <ListItemText primary="Age:" />
            <ListItemText className={classes.listValue} primary={`${age}`} />
          </ListItem>
          <Divider light />
          <ListItem button className={classes.listHeight}>
            <ListItemText primary="Years in League:" />
            <ListItemText
              className={classes.listValue}
              primary={`${playerProfile?.experience} yrs`}
            />
          </ListItem>
          <Divider light />
          <ListItem button className={classes.listHeight}>
            <ListItemText primary="College:" />
            <ListItemText
              className={classes.listValue}
              primary={playerProfile?.college}
            />
          </ListItem>
          <Divider light />
          <ListItem button className={classes.listHeight}>
            <ListItemText primary="Hometown:" />
            <ListItemText
              className={classes.listValue}
              primary={playerProfile?.birth_place}
            />
          </ListItem>
          <Divider light />
        </List>
      </CardContent>
    </Card>
  );
}
