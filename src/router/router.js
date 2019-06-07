import React from 'react';
import { BrowserRouter as Router ,Route} from "react-router-dom";
import HomePageComponent from "../components/homepage";
import LogInPageComponent from "../components/loginpage";
import AboutUsPageComponent from "../components/aboutpage";
import TestPagePageComponent from "../components/testpage";

class RouterComponent extends React.Component {



  render() {
    return (
      <Router>

        <div className="container">
        <Route path="/" exact strict component={HomePageComponent} />
        <Route path="/LogIn/" exact strict component={LogInPageComponent} />
        <Route path="/About/" exact strict component={AboutUsPageComponent} />
        <Route path="/TestPage/" exact strict component={TestPagePageComponent} />
        </div>


      </Router>
    );
  }
}

export default RouterComponent;