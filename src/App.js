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
import Footer from './components/Footer'
import projectData from './projectData.json'


function App() {
  return (
    <div>
      <Navbar />
      <Switch>
          <Route exact path='/' component = {Homescreen} />  
          <Route exact path = '/projects/:id' render = {(props)=> {
                let projectId = parseInt(props.match.params.id)
                let project = projectData.projects.find(p => p.id === projectId)
                return <ProjectShowPage project = {project}/> }} />
          <Route exact path='/projects' component = {ProjectsContainer} />  
          <Route exact path = '/about' component = {AboutMeContainer} /> 
          <Route exact path = '/contact' component = {ContactContainer} /> 
      </Switch>
      <Footer />
    </div>
   )
}

export default App;
