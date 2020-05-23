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

    handleOnClick = (skill) => {
        this.setState({searchTerm: skill})
    }

    render(){
        return(
            <div>
                <Grid container justify="center" spacing={2}>
                    <Grid item>
                        <Typography onClick={() => this.handleOnClick("JavaScript")}>JavaScript</Typography>
                    </Grid>
                    <Grid item>
                        <Typography onClick={() => this.handleOnClick("Material-UI")}>Material-UI</Typography>
                    </Grid>
                    <Grid item>
                        <Typography onClick={() => this.handleOnClick("React")}>React</Typography>
                    </Grid>
                    <Grid item>
                        <Typography onClick={() => this.handleOnClick("Redux")}>Redux</Typography>
                    </Grid>
                    <Grid item>
                        <Typography onClick={() => this.handleOnClick("Ruby")}>Ruby</Typography>
                    </Grid>
                    <Grid item>
                        <Typography onClick={() => this.handleOnClick("Ruby on Rails")}>Ruby on Rails</Typography>
                    </Grid>
                    <Grid item>
                        <Typography onClick={() => this.handleOnClick("Postgres")}>Postgres</Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    {projectData.projects.filter(p => p.libraries.join("").includes(this.state.searchTerm)||p.frontend.includes(this.state.searchTerm)||p.backend.includes(this.state.searchTerm)||p.languages.join("").includes(this.state.searchTerm)).map(project => <Grid key={uuid()} item xs={4}><ProjectCard key={project.id} project={project} /></Grid>)}
                </Grid>
                
            </div>
        )
    }
    
}

export default ProjectsContainer