import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import ArtPage from "./Pages/Art";

export default () => (
  <Router>
    <Switch
    //   atEnter={{ opacity: 0 }}
    //   atLeave={{ opacity: 0 }}
    //   atActive={{ opacity: 1 }}
    //   className="switch-wrapper"
    >
      <Route exact path="/" component={ArtPage} />
      <Route path="/art/" component={ArtPage} />
    </Switch>
  </Router>
);
