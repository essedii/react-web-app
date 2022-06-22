import React from 'react'
import { useState, useEffect } from 'react'
import { Button, Offcanvas} from 'react-bootstrap';

function SideBar({ parentToChild }) {
  const [show, setShow] = useState(parentToChild);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={parentToChild} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{parentToChild}</Offcanvas.Title>
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
   
