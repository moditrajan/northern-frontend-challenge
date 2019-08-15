import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import ThankYouMessage from "./components/ThankYouMessage";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Form} />
          <Route exact path="/thankyou" component={ThankYouMessage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
