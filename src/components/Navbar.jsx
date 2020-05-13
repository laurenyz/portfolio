import React from 'react'
import { withRouter } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

const Navbar = (props) => {

    return(
        <div>
            <AppBar position="static"> 
                    <Toolbar>
                        <Button onClick={handleOnClickProjects}>Projects</Button>
                        <Button onClick={handleOnClickResume}>Resume</Button>
                        <Button onClick={handleOnClickAbout}>About</Button>
                        <Button onClick={handleOnClickBlog}>Blog</Button>
                        <Button onClick={handleOnClickContact}>Contact</Button>
                    </Toolbar>
            </AppBar>
        </div>
    )

    function handleOnClickProjects() {
        props.history.push('/projects')
    }

    function handleOnClickResume() {
       
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