import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

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

export default function PlayerProfileCard({playerProfile}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Typography className={classes.headingMargin} variant="h5" component="h2">
        Player Information
      </Typography>
      <CardContent className={classes.contentPadding}>
        <List
          className={classes.root}
          aria-label="Player Information"
        >
          <Divider light />
          <ListItem button className={classes.listHeight}>
            <ListItemText primary="Player Name:" />
            <ListItemText
              className={classes.listValue}
              primary={playerProfile?.full_name}
            />
          </ListItem>
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
            <ListItemText primary="Position:" />
            <ListItemText
              className={classes.listValue}
              primary={playerProfile?.position}
            />
          </ListItem>
          <Divider light />
          <ListItem button className={classes.listHeight}>
            <ListItemText primary="Jersey Number:" />
            <ListItemText
              className={classes.listValue}
              primary={playerProfile?.jersey_number}
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
            <ListItemText primary="Birthdate:" />
            <ListItemText
              className={classes.listValue}
              primary={playerProfile?.birthdate}
            />
          </ListItem>
          <Divider light />
        </List>
      </CardContent>
    </Card>
  );
}
