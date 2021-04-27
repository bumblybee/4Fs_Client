import LandingPage from "./pages/landing/LandingPage";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import SignupForm from "./pages/signup/SignupForm";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <SignupForm />
          <Route path="/home">
            <LandingPage />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
