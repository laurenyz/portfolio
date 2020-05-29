import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton'
import { withRouter } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    background: "#666666",
    position: "absolute",
    bottom: 0,
    width: "100%"
  },
  white: {
    color: "#F8F8F8"
  }
}));

const Footer = (props) => {
  const classes = useStyles();
    return (
      <div style={{margin: "auto", textAlign: "center", paddingBottom: 15 }} className={classes.root}>
        <Grid container justify={"center"} spacing={2} style={{paddingTop: 10}}>
          <Grid item>
              <IconButton href="mailto:laurenkyu@gmail.com" className={classes.white}>
                <MailOutlineIcon fontSize="small" />
              </IconButton>
          </Grid>
          <Grid item >
            <IconButton onClick={handleOnClickLinkedIn} size="medium" className={classes.white}>
                <LinkedInIcon fontSize="small" />
            </IconButton>
          </Grid>
          <Grid item>
              <IconButton onClick={handleOnClickGithub} className={classes.white}>
                <GitHubIcon fontSize="small"/>
              </IconButton>
          </Grid>
          <Grid item>
              <IconButton onClick={handleOnClickMedium} >
                    <img src={require(`../assets/images/icons/mediumIcon.svg`)} alt="medium icon" style={{height: "18px", width: "18px"}}  />
              </IconButton>
          
          </Grid>
          <Grid item>
              <IconButton onClick={handleOnClickPowerToFly}>
                    <img src={require(`../assets/images/icons/powerToFlyIcon.svg`)} alt="medium icon" style={{height: "18px", width: "18px"}}  />
              </IconButton>
          </Grid>
        </Grid>
        <Divider style={{ margin: "5px auto", width: 60, backgroundColor: "#F8F8F8"}} />
        <Typography variant="caption" align={"center"} className={classes.white}>
          © {new Date().getFullYear()} Lauren Yu
        </Typography>
      </div>
    )
  
  function handleOnClickLinkedIn(){
    window.open('https://www.linkedin.com/in/laurenkyu/')
  }

  function handleOnClickGithub(){
    window.open('https://github.com/laurenyz')
  }
  
  function handleOnClickMedium(){
    window.open('https://medium.com/@laurenkyu')
  }

  function handleOnClickPowerToFly(){
    window.open('https://powertofly.com/talents/laurenyu')
  }
};

export default withRouter(Footer);
