import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { useContext } from 'react';
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
}));

export default function PlayerProfileCard({ playerProfile }) {
  const teamInfo = useContext(TeamContext);
  const classes = useStyles();

  const currentTeam = teamInfo.find((team) => team.id === playerProfile?.team?.id)

  return (
    <Card className={classes.root}>
      <Typography className={classes.headingMargin} variant="h5" component="h2">
      {playerProfile?.full_name}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        { currentTeam?.name} <span>&#183;</span> #{playerProfile?.jersey_number} <span>&#183;</span> {playerProfile?.position}
      </Typography>
      <CardContent className={classes.contentPadding}>
        <List
          className={classes.root}
          aria-label="Player Profile Information"
        >
          <Divider light />
          <ListItem button className={classes.listHeight}>
            <ListItemText primary="Height:" />
            <ListItemText
              className={classes.listValue}
              primary={`${playerProfile?.height} in`}
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
            <ListItemText
              className={classes.listValue}
              primary={playerProfile?.birthdate}
            />
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
