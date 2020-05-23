import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton'
import { withRouter } from 'react-router-dom'

const Footer = (props) => {
    return (
<div style={{ maxWidth: 700, margin: "auto", textAlign: "center", paddingBottom: 20 }}>
    <Grid container justify={"center"} spacing={2} style={{paddingTop: 20}}>
      <Grid item>
          <IconButton href="mailto:laurenkyu@gmail.com">
          <MailOutlineIcon />
          </IconButton>
      </Grid>
      <Grid item >
        <IconButton onClick={handleOnClickLinkedIn}>
            <LinkedInIcon />
        </IconButton>
      </Grid>
      <Grid item>
          <IconButton onClick={handleOnClickGithub}>
            <GitHubIcon />
          </IconButton>
      </Grid>
       <Grid item>
           <IconButton onClick={handleOnClickMedium} >
                <img src={require(`../assets/images/icons/mediumIcon.svg`)} alt="medium icon" style={{height: "22px", width: "22px"}}  />
           </IconButton>
       
      </Grid>
      <Grid item>
          <IconButton onClick={handleOnClickPowerToFly}>
                <img src={require(`../assets/images/icons/powerToFlyIcon.svg`)} alt="medium icon" style={{height: "22px", width: "22px"}}  />
          </IconButton>
           
       
      </Grid>
    </Grid>
    <Divider style={{ margin: "5px auto", width: 60 }} />
    <Typography variant="caption" align={"center"}>
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
