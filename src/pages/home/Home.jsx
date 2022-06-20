import React from 'react'

import { NavBar } from '../../components/NavBar';


const linkName = 'about-us'
function Home()
{
  return (
    <div>
      <NavBar linkName={linkName}></NavBar>
      <h1>Home</h1>
    </div>
  
  )
}

export default Home