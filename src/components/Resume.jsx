import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import Divider from '@material-ui/core/Divider'
import Link from '@material-ui/core/Link'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    // backgroundColor: "#e4e8f4",
    backgroundColor: "#eeeeee",
  },
  avatar: {
    width: 70,
    height: 70,
}
}));

function Resume(props) {
  const classes = useStyles()

  return (
    <div className={classes.root} >
          <Card variant="outlined" style={{backgroundColor:"#F8F8F8", margin: "auto", marginTop: "25px", marginBottom: "25px", width:"80%", minWidth: "400px", maxWidth: "800px"}}>   
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<OpenInBrowserIcon />}
              onClick={handleOnClickPDF}
              style={{float: "right", margin: "10px"}}
            >
              PDF
            </Button>     
                <CardContent>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                       <Typography variant="h4">SKILLS</Typography>
                    </Grid>
                    <Grid item>
                        <Typography align="justify" variant="body2">Javascript • Ruby • React • Redux • Ruby on Rails • Material-UI • HTML • CSS • Git • SQL • Postgres • Bootstrap</Typography>
                    </Grid>
                    <Grid item>
                        <Divider style={{ margin: "5px auto", backgroundColor: "#666666"}} />
                    </Grid>
                    <Grid item>
                        <Typography variant="h4">EDUCATION</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" style={{fontWeight: "bold"}}>Flatiron School</Typography>
                        <Typography variant="body2">Washington, DC</Typography>
                        <Typography variant="body2">01/2020 - 05/2020</Typography>
                        <Typography variant="body2" style={{fontWeight: "bold"}}>Software Engineering Program</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" style={{fontWeight: "bold"}}>Yale University | School of Music</Typography>
                        <Typography variant="body2">New Haven, CT</Typography>
                        <Typography variant="body2">08/2011 - 05/2013</Typography>
                        <Typography variant="body2" style={{fontWeight: "bold"}}>Master of Music - Bassoon Performance</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" style={{fontWeight: "bold"}}>University of Rochester | Eastman School of Music</Typography>
                        <Typography variant="body2">Rochester, NY</Typography>
                        <Typography variant="body2">08/2006 - 05/2011</Typography>
                        <Typography variant="body2" style={{fontWeight: "bold"}}>Bachelor of Arts - Mathematics</Typography>
                        <Typography variant="body2" style={{fontWeight: "bold"}}>Bachelor of Music - Bassoon Performance & Music Education</Typography>
                    </Grid>
                    <Grid item>
                        <Divider style={{ margin: "5px auto", backgroundColor: "#666666"}} />
                    </Grid>
                    <Grid item>
                       <Typography variant="h4">PROJECTS</Typography>
                       <Typography variant="body2">*Please see <Link href="#" style={{color: "#1a75d2"}} onClick={handleOnClickProjects}>PROJECTS</Link> page</Typography>
                    </Grid>
                    <Grid item>
                        <Divider style={{ margin: "5px auto", backgroundColor: "#666666"}} />
                    </Grid>
                    <Grid item>
                        <Typography variant="h4">EMPLOYMENT HISTORY</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" style={{fontWeight: "bold"}}>PrepMatters - Professional Tutor</Typography>
                        <Typography variant="body2">Bethesda, MD</Typography>
                        <Typography variant="body2">07/2018 - Present</Typography>
                        <Typography variant="body2" style={{fontWeight: "bold"}}>• Work with middle school and high school students on standardized test prep (ACT, SAT, math subject)</Typography>
                        <Typography variant="body2" style={{fontWeight: "bold"}}>• Analyze students’ practice tests and plan the best course of action</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" style={{fontWeight: "bold"}}>The Breaking Winds Bassoon Quartet - Founding Member</Typography>
                        <Typography variant="body2">Rochester, NY | Remote</Typography>
                        <Typography variant="body2">07/2008 - Present</Typography>
                        <Typography variant="body2" style={{fontWeight: "bold"}}>• Help organize logistics, handle contracts and book accommodations for domestic and international tours</Typography>
                        <Typography variant="body2" style={{fontWeight: "bold"}}>• Transcribed over twenty pieces and obtained licensing for publication</Typography>
                        <Typography variant="body2" style={{fontWeight: "bold"}}>• Presented performances and masterclasses throughout the continental US and abroad</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" style={{fontWeight: "bold"}}>American Institutes for Research - Temporary Employee with Test Development</Typography>
                        <Typography variant="body2">Washington, DC</Typography>
                        <Typography variant="body2">05/2018 - 08/2018</Typography>
                        <Typography variant="body2" style={{fontWeight: "bold"}}>• Developed test questions and test specifications for state assessments</Typography>
                    </Grid>
                    <Grid item>
                        <Divider style={{ margin: "5px auto", backgroundColor: "#666666"}} />
                    </Grid>
                    <Grid item>
                        <Typography variant="h4">RECOMMENDATIONS</Typography>
                        <Typography variant="body2">*Recommendations can be seen on <Link href="#" style={{color: "#1a75d2"}} onClick={handleOnClickLinkedIn}>LinkedIn</Link></Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" style={{fontWeight: "bold"}}>Jennifer Ingram</Typography>
                        <Typography variant="body2">Full Stack Web Developer</Typography>
                        <Typography variant="body2">Relationship: Coached Lauren at Flatiron School</Typography>
                        <Typography align = "justify" style={{fontWeight: "bold", marginBottom:"10px", marginTop:"10px"}} variant="body2">I had the pleasure of coaching Lauren Yu during her time as a student in Flatiron School’s Software Engineering Immersive Program (from Jan. through May, 2020). During her time in this highly strenuous program, Lauren developed and proved her skills as a full-stack developer. She not only completed the program successfully, she excelled at it.</Typography>
                        <Typography align = "justify" style={{fontWeight: "bold", marginBottom:"10px", marginTop:"10px"}} variant="body2">Lauren’s ability to ‘think like a programmer’ is highly evident - she internalizes often difficult and complex concepts, implements them in code, and goes above and beyond to build on top of the things she learned in class, using more advanced methods or different libraries to build out additional features or functionality. Lauren also digs deep into programming methods, asking relevant questions that result in a more complete understanding.</Typography>
                        <Typography align = "justify" style={{fontWeight: "bold", marginBottom:"10px", marginTop:"10px"}} variant="body2">Early on in the program, while most of her peers worked in pairs, Lauren, because of odd student numbers, was given a solo project. She took on the challenge, and produced an amazing application. She demonstrates a lot of grit, is a skilled planner, can work independently, and manages her time well. She is an exceptional problem solver.</Typography>
                        <Typography align = "justify" style={{fontWeight: "bold", marginBottom:"10px", marginTop:"10px"}} variant="body2">Though Lauren can be depended upon to complete any task on her own, among her many strengths are her personality and her communication skills, making her a valuable member of the team. Lauren is simply a pleasure to be around - she goes out of her way to help others feel welcome, listens to her teammates, and is cognizant of those around her. While collaborating with others on a lab, or an entire project, Lauren shows patience, taking the time to explain her approaches, and accepts feedback and input from others just as easily.</Typography>
                        <Typography align = "justify" style={{fontWeight: "bold", marginBottom:"10px", marginTop:"10px"}} variant="body2">Lauren learns quickly, learns deeply, and is a very diligent programmer. She would be an asset to any team. I wholeheartedly recommend Lauren Yu to any company considering her for employment!</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" style={{fontWeight: "bold"}}>Roshi Matewere</Typography>
                        <Typography variant="body2">Current Role: Chief Executive Officer at Nyasa Foods</Typography>
                        <Typography variant="body2">Past Role: Mathematics Test Development Specialist</Typography>
                        <Typography variant="body2">Relationship: Managed Lauren at American Institutes for Research</Typography>
                        <Typography align = "justify" style={{fontWeight: "bold", marginBottom:"10px", marginTop:"10px"}} variant="body2">I really enjoyed working with Lauren at AIR. She is smart and professional and a quick learner. Her attention to detail and math content knowledge enabled her to write test questions that were being promoted to the client without a single edit within months of working there, which was something that took people there years to accomplish. Lauren took initiative and didn't wait for me to ask her to do things, she is intuitive and always produced excellent work never missing a deadline.</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" style={{fontWeight: "bold"}}>Cherie Boyles</Typography>
                        <Typography variant="body2">Current Role: Chief Operation Officer at Political Media</Typography>
                        <Typography variant="body2">Past Role: Director of Operations at PrepMatters</Typography>
                        <Typography variant="body2">Relationship: Coworker at PrepMatters</Typography>
                        <Typography align = "justify" style={{fontWeight: "bold", marginTop:"10px"}} variant="body2">I had the pleasure of working with Lauren at PrepMatters for two years. Lauren was not only a delightful, brilliant and experienced instructor, she was a consummate professional. She has an impeccable work ethic, and I can only hope that we have the opportunity to work together again.</Typography>
                    </Grid>
                  </Grid>
              </CardContent>
          </Card>
    </div>
  );

  function handleOnClickProjects(event) {
    event.preventDefault()
    props.history.push('/projects')
}

  function handleOnClickLinkedIn(event) {
    event.preventDefault()
    window.open('https://www.linkedin.com/in/laurenkyu/')
  }

  function handleOnClickPDF() {
    window.open('https://drive.google.com/file/d/1kCROPzJHOUWOik_1X9pKm5d1gNGbXHl7/view?usp=sharing')
  }
}
export default Resume