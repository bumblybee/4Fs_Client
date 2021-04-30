import React from "react";

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import SignupForm from "./pages/signup/SignupForm";
import LoginForm from "./pages/login/LoginForm";
import NavBar from "./components/nav/NavBar";
import FTabBar from "./components/fTabBar/FTabBar";
import Milestones from "./components/milestones/Milestones";
import Beliefs from "./components/beliefs/Beliefs";
import System from "./components/system/System";
import SectionTabMenu from "./components/sectionTabMenu/SectionTabMenu";
import TableContainer from "./components/table/TableContainer";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <NavBar />
          <FTabBar />
          <SectionTabMenu />

          <Route path="/home" exact>
            <Redirect to="/home/milestones" />
          </Route>
          <Route path="/home/milestones">
            <TableContainer>
              <Milestones />
            </TableContainer>
          </Route>
          <Route path="/home/beliefs">
            <TableContainer>
              <Beliefs />
            </TableContainer>
          </Route>
          <Route path="/focus" exact>
            <Redirect to="/focus/system" />
          </Route>
          <Route path="/focus/system">
            <TableContainer>
              <System />
            </TableContainer>
          </Route>
          <Route path="/focus/swagger"></Route>
          <Route path="/focus/sleep"></Route>
          <Route path="/focus/habits"></Route>

          <Route path="/fasting">
            <Redirect to="/fasting/window" />
          </Route>
          <Route path="/food">
            <Redirect to="/food/calories" />
          </Route>
          <Route path="/fitness">
            <Redirect to="/fitness/activities" />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/signup">
            <SignupForm />
          </Route>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
