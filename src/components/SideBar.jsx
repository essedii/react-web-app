import React from 'react'
import { useState, useEffect } from 'react'
import { Button, Offcanvas} from 'react-bootstrap';

function SideBar({ homeToSide, sideToHome }) {
  const [show, setShow] = useState(homeToSide);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    console.log('sideUpdate')
    // setShow(homeToSide)
  
    return () => {
      console.log('sideEndUpdate')
 
    }
  }, [setShow] )
  


  return (
    <>
      <Offcanvas show={homeToSide} onHide={handleClose}>
        <Offcanvas.Header >
          <button  onClick={() => sideToHome(false)}>close</button>
          <Offcanvas.Title>{homeToSide}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
  
  export default SideBar
   
