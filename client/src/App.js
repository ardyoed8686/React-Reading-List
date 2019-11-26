import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    
    <Router>
      <div>
      <Nav />
      <Switch>
        <Route exact path="/" ><Books /></Route>
        <Route exact path="/home" ><Books /></Route>
        <Route exact path="/books:id" ><Detail /></Route>
        <Route component={NoMatch} />
      </Switch>
      </div>
    </Router>

  );
}

export default App;
