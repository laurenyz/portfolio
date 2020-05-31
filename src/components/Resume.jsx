import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button'
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: "#eeeeee",
  },
  avatar: {
    width: 70,
    height: 70,
}
}));

function Resume() {
  const classes = useStyles()

  return (
    <div className={classes.root} >
          <Card variant="outlined" style={{backgroundColor:"#F8F8F8", margin: "auto", marginTop: "25px", marginBottom: "25px", width:"60%", minWidth: "400px", maxWidth: "700px"}}>
               
                <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<OpenInBrowserIcon />}
        onClick={handleOnClick}
      >
        PDF
      </Button>
                
                <CardContent>
                  <Grid container>
                    <Grid item>
                      <Typography variant="h2" style={{fontWeight: "bold"}}>Skills</Typography>
                    </Grid>
                  </Grid>
              </CardContent>
          </Card>
    </div>
  );
  function handleOnClick() {
    window.open('https://drive.google.com/file/d/1kCROPzJHOUWOik_1X9pKm5d1gNGbXHl7/view?usp=sharing')
  }
}
export default Resume