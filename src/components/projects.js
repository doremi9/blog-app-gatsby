import React from "react"

const Projects = () => (
<div
    style = {{
        // background: '#f4f4f4',
        paddingTop: '10px',
        width:'100%',
    }}>
    <p> Here are some open source projects which currently I am working on</p>
    <ul 
        style = {{
            // listStyle:'none' , 
            display: 'flex' , 
            justifyContent: 'space-evenly',
            color: '#0000FF',
            // alignContent: ''
        }}>
        <li >
            < a href="#" target="_blank" style = {{color : '#925FCF'}} > Chat-App </a>
        </li>
        <li >
            < a href="#" target="_blank" style = {{color : '#925FCF'}} > Nav-app </a>
        </li>
        <li >
            < a href="#" target="_blank" style = {{color : '#925FCF'}} > Blog-app </a>
        </li>
        <li >
            < a href="#" target="_blank" style = {{color : '#925FCF'}} > Fullstack-app </a>
        </li>
    </ul>

</div>
)

export default Projects;