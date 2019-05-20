import React from "react"
import { Link } from "gatsby"
import "./menu.css"
const Menu = () => (
<div
    style = {{
        background: '#f4f4f4',
       
        paddingTop: '10px',
        width:'100%',
    }}>
    <ul style = {{
        listStyle:'none' , 
        display: 'flex' , 
        justifyContent: 'space-evenly',
        color: '#0000FF',
    }}>
         <li id ="menu-link"> <Link to ="/">Home </Link> </li>
         <li className = "menu-link"> <Link to ="/blog">Blog </Link> </li>
         <li class="menu-link"> <Link to ="/page-2">Ideas </Link> </li>
         <li class="menu-link"> <Link to ="/about">About </Link> </li>
    </ul>
</div>
)


export default Menu ; 