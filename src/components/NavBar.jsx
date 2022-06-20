import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export const NavBar = ({linkName}) => {
  const [page, setPage] = useState(linkName)


  return (
    <>
   
    <nav className="nav border-0 " style={{'backgroundColor': 'rgb(36, 36, 36', 'minHeight': '12vh'}}>
      <p>NAVBAR</p>

      <button style={{'backgroundColor':'rgb(20, 20, 20)', 'border':'none', 'cursor': 'hover', 'padding':'0px'}} >
       
      </button>
    
    </nav>
    </>
   
  )
}

