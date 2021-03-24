import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import TeamPage from "./screens/TeamPage";
import PlayerPage from "./screens/PlayerPage";
import Layout from "./components/Layout";
import { teamInfo } from "./utilities/teamInfo";
import { TeamContext } from "./utilities/TeamContext";

function App() {
  return (
    <TeamContext.Provider value={teamInfo}>
      <Layout>
        <Switch>
          <Route path="/teams/:teamId">
            <TeamPage />
          </Route>
          <Route path="/players/:playerId">
            <PlayerPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </TeamContext.Provider>
  );
}

export default App;
