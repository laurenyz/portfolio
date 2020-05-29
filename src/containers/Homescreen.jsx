import React from 'react'
import Typography from '@material-ui/core/Typography'

const Homescreen = () => {
    return(
        <div>
            <img src={require(`../assets/images/washingtonDc.jpg`)} style={{width: "100%", height: "auto"}} alt="Washington, DC" />
            <Typography variant = "h4" style={{marginTop: "30px", fontFamily: "Montserrat, sans-serif"}}align="center">Full Stack Developer | Musician</Typography>
            <Typography align="center" style={{marginBottom: "20px", fontFamily: "Montserrat, sans-serif"}}>Washington, DC</Typography>
        </div>
    )
}

export default Homescreen