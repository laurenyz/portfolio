import React from 'react'
import ProjectCard from '../components/ProjectCard'
import projectData from '../projectData.json'
import Grid from '@material-ui/core/Grid'

const ProjectsContainer = () => {

    return(
        <div>
            <Grid container>
            {projectData.projects.map(project => <Grid item><ProjectCard key={project.id} project={project} /></Grid>)}
            </Grid>
            
        </div>
    )
}

export default ProjectsContainer