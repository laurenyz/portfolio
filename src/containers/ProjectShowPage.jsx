import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link'
import Divider from '@material-ui/core/Divider'
import YouTubeIcon from '@material-ui/icons/YouTube';
import LanguageIcon from '@material-ui/icons/Language';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: "#eeeeee",
    minHeight: 600
  },
  avatar: {
    width: "100%",
    height: "100%",
}
}));

const ProjectShowPage = ({project}) => {
  const classes = useStyles()
    return(
        <div className={classes.root}>
            <Grid container spacing={2} justify="center" alignItems="flex-start" style={{ marginTop:"25px", marginBottom:"20px"}}> 
                <Grid item xs= {4} style={{width: "50%", height: "auto", minWidth: 450, maxWidth: 500}}>
                    <Avatar 
                      className={classes.avatar} 
                      variant="square" 
                      src={require(`../assets/images/projects/${project.name}.jpg`)} 
                      alt={project.display_name} />
                </Grid> 
                <Grid item xs={5}> 
                    <div style={{float:"right", marginRight:"20px"}}> 
                      {project.github.frontend?
                      <div > 
                          <IconButton onClick={handleOnClickFrontend} size="small">
                              <GitHubIcon fontSize="small"/> 
                          </IconButton>
                          <Link href="#" onClick={handleOnClickFrontendLink}>Frontend</Link> {" | "} 
                          <IconButton onClick={handleOnClickBackend} size="small">
                              <GitHubIcon fontSize="small"/> 
                          </IconButton>
                          <Link href="#" onClick={handleOnClickBackendLink}>Backend</Link>
                          {project.demo_url? 
                          <span>
                            {" | "}
                              <IconButton onClick={handleOnClickDemo} size="small">
                                <YouTubeIcon fontSize="small"/> 
                              </IconButton>
                              <Link href="#" onClick={handleOnClickDemoLink}>Demo</Link>
                          </span> : null}
                          {project.live_site? 
                          <span>
                            {" | "}
                              <IconButton onClick={handleOnClickLiveSite} size="small">
                                  <LanguageIcon fontSize="small"/> 
                              </IconButton>
                              <Link href="#" onClick={handleOnClickLiveSiteLink}>Live Site</Link>
                          </span>: null} 
                      </div>:
                      <div >
                          <IconButton onClick={handleOnClickGithub} size="small">
                              <GitHubIcon fontSize="small"/> 
                          </IconButton>
                          <Link href="#" onClick={handleOnClickGithubLink}>Github</Link>
                          {project.demo_url? 
                          <span>
                          {" | "}
                          <IconButton onClick={handleOnClickDemo} size="small">
                              <YouTubeIcon fontSize="small"/> 
                          </IconButton>
                          <Link href="#" onClick={handleOnClickDemoLink}>Demo</Link>
                          </span> : null}
                          {project.live_site? 
                          <span>
                            {" | "}
                              <IconButton onClick={handleOnClickLiveSite} size="small">
                                  <LanguageIcon fontSize="small"/> 
                              </IconButton>
                              <Link href="#" onClick={handleOnClickLiveSiteLink}>Live Site</Link>
                          </span>: null} 
                      </div>}
                    </div>
                    {project.live_site? 
                      <Typography onClick = {handleOnClickLiveSite} variant="h3" style={{fontFamily: "Montserrat, sans-serif", marginTop: "30px", cursor:"pointer"}}>{project.name}</Typography>
                      :
                      <Typography variant="h3" style={{fontFamily: "Montserrat, sans-serif", marginTop: "30px"}}>{project.name}</Typography>
                    }
                    <Typography align="justify" variant="body2">{project.description}</Typography>
                    <Divider style={{marginTop:"10px", marginBottom: "10px"}} variant="middle"/>
                    <Typography variant="subtitle1">Language(s): {project.languages.join(",")}</Typography>
                    <Typography variant="subtitle1">Libraries: {project.libraries.join(", ")}</Typography>
                    {project.frontend? <Typography variant="subtitle1">Frontend: {project.frontend}</Typography> : null}
                    {project.backend? <Typography variant="subtitle1">Backend: {project.backend}</Typography> : null}
                </Grid>
            </Grid>            
        </div>
    )

    function handleOnClickLiveSiteLink(event){
      event.preventDefault()
      window.open(project.live_site)
    }
    
    function handleOnClickLiveSite(){
      window.open(project.live_site)
    }

    function handleOnClickDemoLink(event){
      event.preventDefault()
      window.open(project.demo_url)
    }

    function handleOnClickDemo(){
      window.open(project.demo_url)
    }

    function handleOnClickFrontendLink(event){
      event.preventDefault()
      window.open(`${project.github.frontend}`)
  }

    function handleOnClickFrontend(){
        window.open(`${project.github.frontend}`)
    }

    function handleOnClickBackendLink(event){
      event.preventDefault()
      window.open(`${project.github.backend}`)
  }

    function handleOnClickBackend(){
        window.open(`${project.github.backend}`)
    }
    
    function handleOnClickGithubLink(event){
      event.preventDefault()
      window.open(`${project.github}`)
  }

    function handleOnClickGithub(){
        window.open(`${project.github}`)
    }
}

export default ProjectShowPage

// {/* <div
//       className="video"
//       style={{
//         position: "relative",
//         paddingBottom: "56.25%" /* 16:9 */,
//         paddingTop: 25,
//         height: 0
//       }}
//     >
//       <iframe
//       title="video"
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "46.25%",
//           height: "50%"
//         }}
//         src={`https://www.youtube.com/embed/86oJGqlPe60`}
//         frameBorder="1"
//         allowFullScreen
//       />
//   </div> */}