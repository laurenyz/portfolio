import React from 'react'
import ProjectCard from '../components/ProjectCard'
import projectData from '../projectData.json'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const ProjectsContainer = () => {

    return(
        <div>
            <Grid container justify="center" spacing={2}>
                <Grid item>
                    <Typography>Javascript</Typography>
                </Grid>
                <Grid item>
                    <Typography>Material-UI</Typography>
                </Grid>
                <Grid item>
                    <Typography>React</Typography>
                </Grid>
                <Grid item>
                    <Typography>Redux</Typography>
                </Grid>
                <Grid item>
                    <Typography>Ruby</Typography>
                </Grid>
                <Grid item>
                    <Typography>Ruby on Rails</Typography>
                </Grid>
                <Grid item>
                    <Typography>Postgres</Typography>
                </Grid>
            </Grid>
            
           
           
            
           
           
           


            <Grid container spacing={1}>
            {projectData.projects.map(project => <Grid item xs={4}><ProjectCard key={project.id} project={project} /></Grid>)}
            </Grid>
            
        </div>
    )
}

export default ProjectsContainer