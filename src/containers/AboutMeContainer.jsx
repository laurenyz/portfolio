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
  },
  gridList: {
    width: 900,
    height: 500,
  },
  avatar: {
    width: 75,
    height: 75,
}
}));

function AboutMeContainer() {
  const classes = useStyles()
  const [mainTile, setMainTile] = useState(tileData[0])

  const handleClickTile = (tile) => {
    setMainTile(tile)
    console.log(tile)
}
  return (
    <div className={classes.root} >
      <Grid container justify="center" alignItems="center" style={{paddingTop:"20px", paddingBottom:"20px"}}>
      <Grid item xs={6}>
          <Card variant="outlined" style={{backgroundColor:"#F8F8F8", maxWidth: "700px", minHeight: "450px"}}>
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
                  {mainTile.blurb.split("\n").map(text => {
                   return  <Typography style={{marginBottom:"10px"}}>{text}</Typography>
                  })}
                  
              </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
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


      
      {/* <GridList cellHeight={160} className={classes.gridList} cols={6}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1} rows={tile.rows || 1}>
            <img src={require(`../assets/images/tiles/${tile.imgName}`)} alt={tile.title} />
          </GridListTile>        
        ))}
      </GridList>
      <Grid container direction="column" spacing={1}>
                              <Grid item>
                                  <Typography>music music music music music music music music music music music music music music music music music music music music music </Typography>
                              </Grid>
                              <Grid item>
                                  <Typography>math teaching math teaching math teaching math teaching math teaching math teaching math teaching math teaching math teaching </Typography>
                              </Grid>
                              <Grid item>
                                  <Typography>code code code code code code code code code code code code code code code code code code code code code code code code code code </Typography>
                              </Grid>
                              <Grid item>
                                  <Typography>cats lord of the rings travel sudoku cats lord of the rings travel sudoku </Typography>
                              </Grid>
                          </Grid> */}
    </div>
  );
}
export default AboutMeContainer