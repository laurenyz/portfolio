import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const AboutMeContainer = () => {

    return(
        <div>
            <Grid container>
                <Grid item xs={2} />
                <Grid item xs={8}>
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
                    </Grid>
                </Grid>
                <Grid item xs={2} />
            </Grid> 
        </div>
    )
}

export default AboutMeContainer