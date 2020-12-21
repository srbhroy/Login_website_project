import React from "react";
import Home from "./Home.js";
import About from "./About.js";
import Sign_in from "./Sign_in.js";
import Error from "./Error.js";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Sign_in} exact />
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
        <Route component={Error} />
      </Switch>
    </main>
  );
}
export default App;
