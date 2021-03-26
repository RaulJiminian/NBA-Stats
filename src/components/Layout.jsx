import { Grid, makeStyles } from "@material-ui/core";
import Nav from "./Nav";
import Footer from "./Footer";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
    gridTemplateColumns: "100%",
  },
  mainContainer: {
    overflow: "hidden",
    marginBottom: "25px",
  }
})

function Layout(props) {
  const classes = useStyles();

  return (
    <div className="App">
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Nav />
        </Grid>
        <Grid item className={classes.mainContainer} xs={12}>
          {props.children}
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  )
}

export default Layout
