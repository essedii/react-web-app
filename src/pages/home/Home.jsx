import React from 'react'
import { useState, useEffect, useRef } from 'react';
import NavBar from '../../components/NavBar';
import Posts from '../../components/Posts';
import SideBar from '../../components/SideBar';

const Home = () => {

  const isInitialMount = useRef(true);

  const [sideButton, setSideButton] = useState('');
  const [dataHome, setDataHome] = useState(false);

  const navToHome = (navdata) => {
    setSideButton(navdata);
  }
  const sideToHome = (sidedata) => {
    setSideButton(sidedata);
  }
  
  useEffect(() => {
    if (isInitialMount.current) {
       isInitialMount.current = false;
    } else {
    console.log('NavBar updated')}
    setDataHome(sideButton)
    return () => {
      console.log('NavBar finished update')
    
    }
  }, [sideButton] )
  

  return (
   
    <div className='w-100'>
    <NavBar navToHome={navToHome}/>
     <SideBar sideToHome={sideToHome} homeToSide={dataHome} />
     <Posts/>
    </div>
  
 
  )
}

export default Home