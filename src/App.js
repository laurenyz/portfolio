import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Route, Switch, withRouter, Redirect} from "react-router-dom"
import Navbar from './components/Navbar'
import ProjectsContainer from './containers/ProjectsContainer'
import AboutMeContainer from './containers/AboutMeContainer'
import ContactContainer from './containers/ContactContainer'
import ProjectShowPage from './containers/ProjectShowPage'
import Homescreen from './containers/Homescreen'


function App() {
  return (
    <div>
      This is my app
      <Navbar />
      <Switch>
          <Route exact path = '/' component = {Homescreen} />  
          <Route exact path = '/projects/:id' component = {ProjectShowPage} />  
          <Route exact path = '/projects' component = {ProjectsContainer} />  
          <Route exact path = '/about' component = {AboutMeContainer} /> 
          <Route exact path = '/contact' component = {ContactContainer} /> 
      </Switch>
    </div>
   )
}

export default App;
