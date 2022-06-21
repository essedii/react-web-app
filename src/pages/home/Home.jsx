import React from 'react'

import Button from '../../components/Button';
import { useState } from 'react';

import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';



const Home = () => {

  const [isOpen, setOpen] = useState(false)

  const setSide = () => {
    alert('home')
  }

  

  return (
   
    <div >
 
      <Button btnFunc = {() => setSide()}/>
      {/* <SideBar isOpen={isOpen}/> */}
    
    

       
    </div>
   
    // <div className='flex-column'>
    //   <SideBar isOpen={isOpen} ></SideBar>
    //   <NavBar linkName={linkName}>
    //   </NavBar>
    //   <div>
    //   <Button >vds</Button>


    //   <div className='d-flex'>

     

    //     <div>
    //      <h1>Home</h1>
    //     </div>

    //   </div>
  
    // </div>
    // </div>
  )
}

export default Home