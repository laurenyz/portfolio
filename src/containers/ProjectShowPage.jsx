import React from 'react'
import ReactPlayer from "react-player"

const ProjectShowPage = ({project}) => {

    return(
        <div>
            <ReactPlayer
                url={project.demo_url}
            />
            <h1>{project.name}</h1>
            <h4>{project.description}</h4>
            {project.github.frontend? 
            <div>
                <h2 onClick = {handleOnClickFrontend}>Github Frontend</h2> | <h2 onClick = {handleOnClickBackend}>Github Backend</h2>
            </div>:
            <h2 onClick = {handleOnClickGithub}>Github</h2>}
            <h3>Languages: {project.languages.join(",")}</h3>
            <h3>Libraries: {project.libraries.join(", ")}</h3>
            <h3>Frontend: {project.frontend}</h3>
            <h3>Backend: {project.backend}</h3>
           
        </div>
    )

    function handleOnClickFrontend(){
        window.open(`${project.github.frontend}`)
    }

    function handleOnClickBackend(){
        window.open(`${project.github.backend}`)
    }
    
    function handleOnClickGithub(){
        window.open(`${project.github}`)
    }
}

export default ProjectShowPage

// "github": {
//     "frontend": "https://github.com/laurenyz/mathLab-frontend",
//     "backend": "https://github.com/laurenyz/mathLab-backend"
// },
// "languages": ["Ruby, Javascript"],
// "backend": "Ruby on Rails",
// "frontend": "React",
// "libraries": ["Redux", "Thunk", "Action Cable", "Active Storage", "Material-Ui", "React-to-Print", "bcrypt", "JWT token"],
// "description":