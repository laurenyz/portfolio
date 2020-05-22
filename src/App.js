import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Route, Switch } from "react-router-dom"
import Navbar from './components/Navbar'
import ProjectsContainer from './containers/ProjectsContainer'
import AboutMeContainer from './containers/AboutMeContainer'
import ContactContainer from './containers/ContactContainer'
import ProjectShowPage from './containers/ProjectShowPage'
import Homescreen from './containers/Homescreen'
import Footer from './components/Footer'
import projectData from './projectData.json'
import Container from '@material-ui/core/Container'
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 480,
  },
}));

function App(props){
  const classes = useStyles()
  return (
    <div>
      <Navbar />
      <Container className={classes.root}>
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
      </Container>
     
      <Footer />
    </div>
   )
}

export default App;
