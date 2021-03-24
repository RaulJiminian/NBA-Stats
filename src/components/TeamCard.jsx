import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function TeamCard({ id, teamName, teamBanner }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={2}>
      <CardActionArea component={Link} to={`/teams/${id}`}>
        <CardMedia
          className={classes.media}
          image={teamBanner}
          title={teamName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {teamName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
