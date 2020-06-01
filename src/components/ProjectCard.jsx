import React from 'react'
// import React, { useRef } from 'react'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/core/styles'
import { withRouter } from "react-router-dom"
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'

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
  //   overlay: {
  //     position: 'absolute',
  //     top: '20px',
  //     left: '20px',
  //     color: 'black',
  //     backgroundColor: 'white'
  //  },
   avatar: {
    width: 300,
    height: 300,
}
  }));

const ProjectCard = (props) => {
  // const overlay = useRef()
    const classes = useStyles();
    return(
               <Button>
                    <Avatar onClick={() => handleOnClickProject(props.project.id)} variant="square" className={classes.avatar} src={require(`../assets/images/${props.project.name}.jpg`)} alt={props.project.name} />
                </Button>
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