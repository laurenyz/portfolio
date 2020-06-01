import React from 'react'
import ProjectCard from '../components/ProjectCard'
import projectData from '../projectData.json'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { uuid } from 'uuidv4';

class ProjectsContainer extends React.Component {

    constructor(){
        super()
        this.state = {
            searchTerm:""
        }
    }

    // handleOnClick = (skill) => {
    //     this.setState({searchTerm: skill})
    // }

    render(){
        return(
            <div>
                <Grid container>
                    {projectData.map(project => <Grid item key={uuid()}> <ProjectCard key={project.id} project={project} /></Grid>)}
                </Grid>
            </div>
        )
    }
    
}

export default ProjectsContainer