import React, { useState, useRef } from 'react'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/core/styles'
import { withRouter } from "react-router-dom"
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  //   root: {
  //     minWidth: 300,
  //     position: 'relative',
     
  //   },
  //   media: {
  //       height: 0,
  //       paddingTop: '56.25%', // 16:9
  //     },
  //   deleteBtn: {
  //     marginLeft: 'auto'
  //   },
  container: {
    position: "relative",
    width: 300,
    height: 300,
  },
    overlay: {
      position: 'absolute',
      top: '0',
      left: '0',
      margin:"auto",
      textAlign: "center",
      width: "100%",
      height: "100%",
      color: 'white',
      backgroundColor: 'black',
      opacity: ".8",
      zIndex: "2",
      cursor: "pointer"
   },
  //  hover:{
  //   opacity: ".75",
  //   width: 300,
  //   height: 300,
  //   cursor: "pointer"
  //  },
    avatar: {
    width: "100%",
    height: "100%",
    cursor: "pointer"
}
  }));

const ProjectCard = (props) => {
    const over = useRef()
    const classes = useStyles();

    const handleOnMouseEnter = () => {
      over.current.style.display="block"
  }

  const handleOnMouseLeave = () => {
    over.current.style.display="none"
}

    return( 
      <div className={classes.container}>
            <Avatar 
            onMouseEnter={handleOnMouseEnter} 
            onMouseLeave={handleOnMouseLeave} 
            className={classes.avatar} 
            variant="square" 
            src={require(`../assets/images/projects/${props.project.name}.jpg`)} 
            alt={props.project.display_name} />

            <div 
            className={classes.overlay} 
            onClick={() => handleOnClickProject(props.project.id)} 
            onMouseEnter={handleOnMouseEnter} 
            onMouseLeave={handleOnMouseLeave}
            style={{display: "none"}} 
            ref = {over}
           >
             <Grid container style={{width: "100%", height:"100%"}} justify="center" alignItems="center">
               <Grid item>
                  <Typography variant="h4" style={{fontFamily: "Montserrat, sans-serif"}}>{props.project.display_name.toUpperCase()}</Typography>
               </Grid>
             </Grid>
            </div>
      </div>
           
               
        // <Card className={classes.root} variant = "outlined" >
        //     <CardMedia
        //         // onMouseEnter = {overlay.style.display="block"}
        //         onClick = {() => handleOnClick(props.project.id)}
        //         className={classes.media}
        //         image={require(`../assets/images/${props.project.name}.png`)}
        //         title={props.project.name}
        //         style={{cursor: "pointer"}}
        //     />
        //     <div className={classes.overlay} 
        //     // style={{display: "none"}} ref="overlay"
        //     >
        //       this text should overlay the image
        //      </div>
        //     ProjectCard
        //     {props.project.name}
        // </Card>
    )
function handleOnClickProject(projectId){
  props.history.push(`/projects/${projectId}`)
}
}

export default withRouter(ProjectCard)