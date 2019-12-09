import * as React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "../pages/HomePage";

class App extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
