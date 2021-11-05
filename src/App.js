import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../src/components/home/Home";
import { Login } from "../src/components/login/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
