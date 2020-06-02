import React from 'react'
import ProjectCard from '../components/ProjectCard'
import projectData from '../projectData.json'
import Grid from '@material-ui/core/Grid'
import { uuid } from 'uuidv4';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: "#eeeeee",
    }
  }));

const ProjectsContainer =(props) => {
    const classes = useStyles()
    return(
        <div className={classes.root}>
            <Grid container justify="center" spacing = {2} alignItems="flex-start" style={{maxWidth: "1100px", marginTop:"20px", marginBottom:"20px"}}>
                {projectData.map(project => <Grid item style={{marginLeft:"5px", marginRight:"10px"}} key={uuid()}> <ProjectCard key={project.id} project={project} /></Grid>)}
            </Grid>
        </div>
    )    
}

export default ProjectsContainer