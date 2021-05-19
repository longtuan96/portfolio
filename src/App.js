import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Routes from "./containers/Routes";
function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
