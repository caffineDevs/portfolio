import React from "react";
import { Switch, Route } from 'react-router-dom'
import Home from "../Home/Home";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import AboutMe from "../AboutMe/AboutMe";

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/skills" component={Skills} />
      <Route path="/projects" component={Projects} />
      <Route path="/about-me" component={AboutMe} />
      <Route exact path="*" component={Home} />
    </Switch>
  );
}

export default Router;
