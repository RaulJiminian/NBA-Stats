import TeamCard from "../components/TeamCard";
import SearchInput from "../components/SearchInput";
import { useContext, useState, useEffect } from "react";
import { TeamContext } from "../utilities/TeamContext";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    margin: 0,
  },
});

function Home() {
  const teamInfo = useContext(TeamContext);
  const classes = useStyles();

  const [name, setName] = useState("");

  useEffect(() => {
    setName(localStorage.getItem("team") || "");
  }, []);

  useEffect(() => {
    localStorage.setItem("team", name);
  }, [name]);

  const filteredTeams = teamInfo.filter((item) =>
    item.name.toLowerCase().includes(name.toLowerCase())
  );

  return (
    <>
      <SearchInput name={name} setName={setName} />
      <Grid
        container
        className={classes.root}
        spacing={3}
        justify="space-around"
      >
        {filteredTeams?.map((team) => (
          <Grid key={team.id} item xs={12} sm={5} md={4} lg={3} xl={2}>
            <TeamCard
              id={team.id}
              teamName={team.name}
              teamBanner={team.banner}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Home;
