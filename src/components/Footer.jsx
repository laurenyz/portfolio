import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton'

const Footer = () => (
  <div style={{ maxWidth: 700, margin: "auto", textAlign: "center", paddingBottom: 20 }}>
    <Grid container justify={"center"} spacing={2}>
      <Grid item>
          <IconButton>
          <MailOutlineIcon />
          </IconButton>
      </Grid>
      <Grid item >
        <IconButton>
            <LinkedInIcon />
        </IconButton>
      </Grid>
      <Grid item>
          <IconButton>
          <GitHubIcon />
          </IconButton>
      </Grid>
      {/* <Grid item xs={12} sm={6} md={3}>
        <Typography align={"center"} gutterBottom color={"textSecondary"}>
          Contact us
        </Typography>
      </Grid> */}
       <Grid item>
           <IconButton >
                <img src={require(`../assets/images/icons/mediumIcon.svg`)} alt="medium icon" style={{height: "22px", width: "22px"}}  />
           </IconButton>
       
      </Grid>
      <Grid item>
          <IconButton>
                <img src={require(`../assets/images/icons/powerToFlyIcon.svg`)} alt="medium icon" style={{height: "22px", width: "22px"}}  />
          </IconButton>
           
       
      </Grid>
    </Grid>
    <Divider style={{ margin: "10px auto", width: 60 }} />
    <Typography variant="caption" align={"center"}>
      © {new Date().getFullYear()} Lauren Yu
    </Typography>
  </div>
);

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;


