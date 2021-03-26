import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    borderBottom: "2px solid #EA15DC",
  },
  imgFit: {
    objectFit: "contain",
    marginTop: 25,
  },
});

export default function PlayerImageCard({ playerProfile, playerPhotoId }) {
  const classes = useStyles();

  const currentPlayer = playerPhotoId.find((player) => player.firstName === playerProfile?.first_name && player.lastName === playerProfile?.last_name)
  const imgUrl = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${currentPlayer.personId}.png`

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="player profile"
        height="350"
        image={imgUrl}
        className={classes.imgFit}
        title="player profile"
      />
    </Card>
  );
}
