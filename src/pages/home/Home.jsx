import React from 'react'

import Button from '../../components/Button';
import { useState, useEffect, useRef } from 'react';
import Interface from '../../components/Interface';
import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';

const Home = () => {

  const isInitialMount = useRef(true);

  const [data, setData] = useState('');

  const childToParent = (childdata) => {
    setData(childdata);
  }

  const [dataParent, setDataParent] = useState(false);
  
  const parentToChild = () => {
    setDataParent();
  }

  useEffect(() => {
    if (isInitialMount.current) {
       isInitialMount.current = false;
    } else {
    console.log('NavBar updated')}
    setDataParent(data)
    return () => {
      console.log('NavBar finished update')
    
    }
  }, [childToParent])
  

  return (
    <div>
     <NavBar childToParent={childToParent}/>
     {`Button now  ${data}`}
     <SideBar parentToChild={dataParent}/>

    </div>
  )
}

export default Home