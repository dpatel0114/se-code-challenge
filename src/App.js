import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Containers/Home";
import Search from "./Containers/Search";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <nav class="navbar navbar-expand" style={{fontSize:"2em", margin:"0.5em"}}>
        <a class="latest" href="/" style={{margin:"1em"}}> Latest </a> 
        <a class="search" href="/search" > Search </a> 
      </nav>

      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/search" component={Search}/>
          
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
