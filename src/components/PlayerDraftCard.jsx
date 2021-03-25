import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import MiniDraftTable from "./MiniDraftTable";


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

export default function PlayerDraftCard(props) {
  const classes = useStyles();

  const { draft } = props.playerProfile

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
    </Card>
  );
}
