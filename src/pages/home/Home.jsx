import React from 'react'

import { NavBar } from '../../components/NavBar';
import SideBar from '../../components/SideBar';



function Home() {

  const linkName = 'about-us';

  return (
    <div className='flex-column'>
      <SideBar></SideBar>
       

      <NavBar linkName={linkName}></NavBar>
      <div>

      <div className='d-flex'>

     

        <div>
         <h1>Home</h1>
        </div>

      </div>
  
    </div>
    </div>
  )
}

export default Home