

import React from 'react'
// import { useState } from 'react'
// import { Link } from 'react-router-dom'
import Button from './Button'

const NavBar = () => {
  // const [page, setPage] = useState(linkName)
  function handleClick()  {console.log('im passefrom nav')}


  return (
   
   
    <nav className="nav border-0 " style={{'backgroundColor': 'rgb(36, 36, 36', 'minHeight': '12vh'}}>
      <p>NAVBAR</p>
      <Button  handleClick={handleClick}/>
    </nav>
  )
  }


export default NavBar


