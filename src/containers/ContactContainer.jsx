import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
    avatar: {
        width: 150,
        height: 150,
    }}))

const ContactContainer = () => {
    const classes = useStyles()
    return(
        <div>
            <img src={require(`../assets/images/mailbox.jpg`)} style={{width: "100%", height: "auto"}} alt="Washington, DC" />
            <Grid container justify="center" style={{marginBottom: "20px", marginTop: "10px"}}>
                <Grid item>
                    <IconButton href="mailto:laurenkyu@gmail.com">
                        <Avatar className={classes.avatar} src={require(`../assets/images/icons/mailIcon.svg`)} alt="Email" />
                    </IconButton>  
                </Grid>
                <Grid item>
                    <IconButton onClick={handleOnClickGithub}>
                        <Avatar className={classes.avatar} src={require(`../assets/images/icons/githubIcon.svg`)} alt="GitHub" />
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton onClick={handleOnClickLinkedIn}>
                        <Avatar className={classes.avatar} src={require(`../assets/images/icons/linkedinIcon.svg`)} alt="LinkedIn" />
                    </IconButton>  
                </Grid>
            </Grid>
        </div>
    )

    function handleOnClickLinkedIn(){
        window.open('https://www.linkedin.com/in/laurenkyu/')
    }
    
    function handleOnClickGithub(){
        window.open('https://github.com/laurenyz')
    }
}

export default ContactContainer