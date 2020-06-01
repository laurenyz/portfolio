import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button'
import tileData from '../tileData.json'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: "#eeeeee",
    // backgroundColor: "#e4e8f4",
  },
  avatar: {
    width: 70,
    height: 70,
}
}));

function AboutMeContainer() {
  const classes = useStyles()
  const [mainTile, setMainTile] = useState(tileData[0])

  const handleClickTile = (tile) => {
    setMainTile(tile)
}
  return (
    <div className={classes.root} >
      <Grid container justify="center" alignItems="flex-start" style={{marginTop:"20px", marginBottom:"20px"}}>
      <Grid item xs={6}>
          <Card variant="outlined" style={{backgroundColor:"#F8F8F8", marginTop: "5px", maxWidth: "700px", minHeight: "485px"}}>
              <CardMedia
                    className = {classes.headerImage}
                    component="img"
                    alt={mainTile.title}
                    height="auto"
                    width = "240"
                    image = {require(`../assets/images/headers/${mainTile.header}`)}
                    title={mainTile.title}
                    />
                <CardContent>
                  <Grid container spacing={1}>
                    <Grid item>
                      <Typography variant="h6" style={{fontWeight: "bold"}}>{mainTile.title.toUpperCase()}</Typography>
                    </Grid>
                    {mainTile.blurb.split("\n").map((text, i) => {
                    return  <Grid item><Typography align="justify" variant="body2" key={i} >{text}</Typography></Grid>
                    })}
                  </Grid>
              </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Grid container justify="center">
            {tileData.map((t) => (
              <Grid item>
                <Button>
                    <Avatar onClick={() => handleClickTile(t)} variant="square" className={classes.avatar} src={require(`../assets/images/tiles/${t.tile}`)} alt={t.title} />
                </Button>        
              </Grid>
        ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
export default AboutMeContainer