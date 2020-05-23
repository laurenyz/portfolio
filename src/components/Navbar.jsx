import React from 'react'
import { withRouter } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const Navbar = (props) => {

    return(
        <div>
            <AppBar position="static" style={{background: 'transparent', boxShadow: 'none'}}> 
                    <Toolbar>
                        <Grid container justify="space-between" alignItems="center">
                            <Grid item>
                                <Typography onClick={handleOnClickHomepage} style={{cursor: "pointer", color:"#000000"}}>Lauren Yu</Typography>
                            </Grid>
                            <Grid item>
                                <Grid container>
                                    <Grid item>
                                        <Button onClick={handleOnClickProjects}>Projects</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button onClick={handleOnClickResume}>Resume</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button onClick={handleOnClickAbout}>About</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button onClick={handleOnClickBlog}>Blog</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button onClick={handleOnClickContact}>Contact</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Toolbar>
            </AppBar>
        </div>
    )
    
    function handleOnClickHomepage() {
        props.history.push('/')
    }

    function handleOnClickProjects() {
        props.history.push('/projects')
    }

    function handleOnClickResume() {
        window.open('https://drive.google.com/file/d/1kCROPzJHOUWOik_1X9pKm5d1gNGbXHl7/view?usp=sharing')
    }

    function handleOnClickAbout() {
        props.history.push('/about')
    }

    function handleOnClickBlog() {
        window.open(`https://medium.com/@laurenkyu`)
    }

    function handleOnClickContact() {
        props.history.push('/contact')
    }
}



export default withRouter(Navbar)