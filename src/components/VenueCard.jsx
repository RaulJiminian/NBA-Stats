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
    margin: "25px auto 0 auto",
    borderBottom: "2px solid #EA15DC",
    paddingBottom: 5,
    width: "90%",
  },
  contentPadding: {
    paddingTop: 20,
  },
}));

export default function VenueCard({teamProfile}) {
  const classes = useStyles();

  const coaches = teamProfile?.coaches?.map((coach)=> coach.full_name)

  return (
    <Card className={classes.root}>
      <Typography className={classes.headingMargin} variant="h5" component="h2">
        Venue Information
      </Typography>
      <CardContent className={classes.contentPadding}>
        <List
          className={classes.root}
          aria-label="Venue Information"
        >
          <Divider light />
          <ListItem button className={classes.listHeight}>
            <ListItemText primary="Venue:" />
            <ListItemText
              className={classes.listValue}
              primary={teamProfile?.venue?.name}
            />
          </ListItem>
          <Divider light />
          <ListItem button className={classes.listHeight}>
            <ListItemText primary="Market:" />
            <ListItemText
              className={classes.listValue}
              primary={teamProfile?.market}
            />
          </ListItem>
          <Divider light />
          <ListItem button className={classes.listHeight}>
            <ListItemText primary="Founded:" />
            <ListItemText
              className={classes.listValue}
              primary={teamProfile?.founded}
            />
          </ListItem>
          <Divider light />
          <ListItem button className={classes.listHeight}>
            <ListItemText primary="Capacity:" />
            <ListItemText
              className={classes.listValue}
              primary={teamProfile?.venue?.capacity}
            />
          </ListItem>
          <Divider light />
          <ListItem button className={classes.listHeight}>
            <ListItemText primary="Address:" />
            <ListItemText
              className={classes.listValue}
              primary={teamProfile?.venue?.address}
            />
          </ListItem>
          <Divider light />
          <ListItem button className={classes.listHeight}>
            <ListItemText primary="State:" />
            <ListItemText
              className={classes.listValue}
              primary={teamProfile?.venue?.state}
            />
          </ListItem>
          <Divider light />
          <ListItem button className={classes.listHeight}>
            <ListItemText primary="Head Coach:" />
            <ListItemText
              className={classes.listValue}
              primary={coaches && coaches[0]}
            />
          </ListItem>
          <Divider light />
        </List>
      </CardContent>
    </Card>
  );
}
