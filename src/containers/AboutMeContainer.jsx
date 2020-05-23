// import React from 'react'
// import Typography from '@material-ui/core/Typography'
// import Grid from '@material-ui/core/Grid'

// const AboutMeContainer = () => {

//     return(
//         <div>
//             <Grid container>
//                 <Grid item xs={2} />
//                 <Grid item xs={8}>
//                     <Grid container direction="column" spacing={1}>
//                         <Grid item>
//                             <Typography>music music music music music music music music music music music music music music music music music music music music music </Typography>
//                         </Grid>
//                         <Grid item>
//                             <Typography>math teaching math teaching math teaching math teaching math teaching math teaching math teaching math teaching math teaching </Typography>
//                         </Grid>
//                         <Grid item>
//                             <Typography>code code code code code code code code code code code code code code code code code code code code code code code code code code </Typography>
//                         </Grid>
//                         <Grid item>
//                             <Typography>cats lord of the rings travel sudoku cats lord of the rings travel sudoku </Typography>
//                         </Grid>
//                     </Grid>
//                 </Grid>
//                 <Grid item xs={2} />
//             </Grid> 
//         </div>
//     )
// }

// export default AboutMeContainer

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from '../tileData';

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
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={6}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1} rows={tile.rows || 1}>
            <img src={require(`../assets/images/tiles/${tile.imgName}`)} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}