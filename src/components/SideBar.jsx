import React from 'react'
import { useState, useEffect } from 'react'
import { Offcanvas} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function SideBar({ homeToSide, sideToHome }) {
  const [show, setShow] = useState(homeToSide);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  useEffect(() => {
    console.log('sideUpdate')
    // setShow(homeToSide)
  
    return () => {
      console.log('sideEndUpdate')
 
    }
  }, [] )

  return (
    <>
      <Offcanvas show={homeToSide} onHide={handleClose}>
        <Offcanvas.Header  >
          <div className='d-flex flex-start align-items-center'>
          <button  className='btn' style={{ 'border':'none', 'cursor': 'hover', 'padding':'0px'}}   onClick={() => sideToHome(false)}> <FontAwesomeIcon  className='fa-fw 'icon="grip-lines"  /></button>
          <p className='m-0 ms-5'>SideBar</p>
          </div>

          <Offcanvas.Title>{homeToSide}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
     Hello Visitor!< br/>  <br/> Benvenuto  in <br/> React Web App... <br/> <br/> 
     Il progetto è ancora in corso... <br /> < br/> 
    DONE: < br/> 
    Components  &#10003; <br/>
    Pages &#10003; < br/> < br/> 
    TODO:  <br/> 
    
    Routing   <br/> 
    Fecth Data<br/> 
    
     <br/> 
     <br/> 

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
  
  export default SideBar
   
