import React from 'react'
import Button from './Button'
import { useState, useEffect, useRef } from 'react';



const NavBar = ({childToParent}) => {

  const [sideBarState, setSideBarState] = useState(false)
  // const [navBarState, setNaveBarState] = useState(false)
  // const isInitialMount = useRef(true);

  // const data = true

  // useEffect(() => {
  //   if (isInitialMount.current) {
  //      isInitialMount.current = false;
  //   } else {
  //     setSideBarState(true)
        
  
  //   }
  // });
  // useEffect(() => {
  //   console.log(`Button now pressed ${SideBarState}`)
  // });
   return(
   
    <div>
      <nav className="nav border-0 " >
        {/* <button  onClick={() => setSideBarState(!sideBarState), childToParent(data)}></button> */}
        <button  onClick={() => childToParent(true)}></button>
        <p>NAVBAR</p> 
      </nav>
    </div>
   )


  }


export default NavBar


