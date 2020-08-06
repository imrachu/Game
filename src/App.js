import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

import startingpage from "./components/startingpageComponent";
import dashboard from "./components/dashboardComponent";

function App() {
  return (
    <Router>
      <div className="container sky">
      <br/>
      <Route path="/" exact component={startingpage} />
      <Route path="/dashboard" component={dashboard} />
      </div>
    </Router>
  );
}

export default App;