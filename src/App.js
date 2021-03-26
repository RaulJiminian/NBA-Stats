import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import TeamPage from "./screens/TeamPage";
import PlayerPage from "./screens/PlayerPage";
import Layout from "./components/Layout";
import { teamInfo } from "./utilities/teamInfo";
import { TeamContext } from "./utilities/TeamContext";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./components/shared/Theme";

function App() {
  return (
    <TeamContext.Provider value={teamInfo}>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </TeamContext.Provider>
  );
}

export default App;
