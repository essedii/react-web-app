import React from 'react'
import SideBar from './SideBar'
import NavBar from './NavBar'
 import { useState } from 'react'
const Interface = () => {

  const [data, setData] = useState(false);
  


  const setSide = (data) => {
   setData(data)

  }
  return (
   <>
   <NavBar setSide={setSide}/>
   <SideBar open={data}/>
   </>
  )
}

export default Interface