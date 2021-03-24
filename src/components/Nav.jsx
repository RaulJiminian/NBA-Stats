import {
  AppBar,
  CssBaseline,
  IconButton,
  makeStyles,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@material-ui/core";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import { NavLink } from "react-router-dom";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  basketButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    textAlign: "center",
    marginRight: "5%",
    flexGrow: 1,
  },
  navBar: {
    background: "black",
    color: "white",
  }
}));

function Nav(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar position="fixed" className={classes.navBar}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.basketButton}
              color="inherit"
              aria-label="home"
            >
              <SportsBasketballIcon fontSize="large"/>
            </IconButton>
            <Typography
              variant="h4"
              className={classes.title}
              component={NavLink}
              to="/"
            >
              NBA STATS
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </div>
  );
}

export default Nav;
