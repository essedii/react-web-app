import React from 'react'

import Button from '../../components/Button';
import { useState, useEffect, useRef } from 'react';
import Interface from '../../components/Interface';
import NavBar from '../../components/NavBar';
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
  const homeToSide = () => {
    setDataHome();
  }
  // const sideToHome = (sidedata) => {
  //   setButtonPressed(sidedata);
  // }

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
    <div>
     <NavBar navToHome={navToHome}/>
     <SideBar sideToHome={sideToHome} homeToSide={dataHome} />

    </div>
  )
}

export default Home