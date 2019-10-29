import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Containers/Home";

function App() {
  return (
    <div>
      <nav class="navbar navbar-expand" style={{fontSize:"2em", margin:"1em"}}>
        <a class="latest" href="/" style={{margin:"1em"}}> Latest </a> 
        <a class="search" href="/search" > Search </a> 
      </nav>

      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
