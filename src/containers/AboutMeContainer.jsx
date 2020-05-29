import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar';
import CardActionArea from '@material-ui/core/CardActionArea'
import Button from '@material-ui/core/Button'
import tileData from '../tileData.json'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
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
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={3}>
          <Grid container justify="center" spacing={1} style={{paddingTop: "40px"}}>
            <Grid item >
            {tileData.map((tile) => (
              <Grid item>
                <Button>
                  <Avatar variant="rounded" className={classes.avatar} src={require(`../assets/images/tiles/${tile.imgName}`)} alt={tile.title} />
                </Button>        
              </Grid>
        ))}
                  <Button>
                  <Avatar variant="rounded" className={classes.avatar} src={require(`../assets/images/tiles/Bills.jpg`)} alt="Email" />
                  </Button>
            </Grid>
            <Grid item >
              <Card variant="outlined">
                <CardActionArea>
                  <Avatar variant="rounded" className={classes.avatar} src={require(`../assets/images/tiles/Bills.jpg`)} alt="Email" />
                </CardActionArea>
              </Card>  
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Card variant="outlined" style={{backgroundColor:"#eeeeee", maxWidth: "600px", minHeight: "450px", marginBottom: "20px"}}>
              <CardMedia
                    className = {classes.headerImage}
                    component="img"
                    alt="Equation Background"
                    height="auto"
                    width = "240"
                    image = {require(`../assets/images/headers/TheBreakingWindsHeader.jpg`)}
                    title="Equation Background"
                    />
                <CardContent>
                  <Typography>
                    TheBreaki
                  </Typography>
              </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3} />
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