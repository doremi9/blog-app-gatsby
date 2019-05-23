import React from "react"


const FutureProjects = () => (
<div
    style = {{
        // background: '#f4f4f4',
        paddingTop: '10px',
        width:'100%',
    }}> 
    <p>This section is dedicated to brainstorming and presenting my future development ideas and projects which I am planning to work on.</p>
    
    <ul 
        style = {{
            // listStyle:'none' , 
            display: 'flex' , 
            justifyContent: 'space-evenly',
            color: '#0000FF',
            // alignContent: ''
        }}>
        
        <li style = {{color : '#925FCF'}} > 
            A collaborative Text Editor 
        </li>
        <li style = {{color : '#925FCF'}}> 
            A project in tribute to Feynman !!
        </li>
        <li style = {{color : '#925FCF'}} > 
            Big Men Speak
        </li>
        <li style = {{color : '#925FCF'}} > 
            A Native App
        </li>
      
    </ul>

</div>
)


export default FutureProjects ; 