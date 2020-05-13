import React from 'react'
import HUE from '@material-ui/core/colors/green';
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 300
    },
    greenUpvoteButton: {
      color: HUE[400]
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
    deleteBtn: {
      marginLeft: 'auto'
    },
  }));

const ProjectCard = (props) => {
    const classes = useStyles();
    return(
        <Card className={classes.root} variant = "outlined" >
            <CardMedia
                className={classes.media}
                image={require(`../assets/images/${props.project.name}.png`)}
                title="mathLab"
            />
            ProjectCard
            {props.project.name}
        </Card>
    )
}

export default ProjectCard