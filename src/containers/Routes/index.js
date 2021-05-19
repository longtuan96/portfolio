import React from "react";
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import Footer from "../../components/Footer";

import NavBarHeader from "../../components/NavBarHeader";
import Contact from "./Contact";
import HomePage from "./HomePage";
import Projects from "./Projects";
import Resume from "./Resume";

const Routes = () => {
  return (
    <>
      <NavBarHeader />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/project" component={Projects} />
        <Route exact path="/Contact" component={Contact} />
      </Switch>
      <Footer />
    </>
  );
};

export default Routes;
