import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

import { Button, Offcanvas} from 'react-bootstrap';


const SideBar = ({isOpen}) => {
    const [show, setShow] = useState({isOpen});

    const handleClose = () => setShow({isOpen});
    const handleShow = () => setShow({isOpen});

    return (
    
        <>
            <Offcanvas style={{'backgroundColor': 'rgb(35, 35, 35)'}} variant='dark' show={isOpen} onHide={!isOpen} >
                
                <Offcanvas.Header  className='p-0 px-3 pt-4' >

                <div className='d-flex flex-start align-items-center '>   
                    {/* <Button onClick={() => (isOpen === !isOpen)}>

                    </Button> */}

                    <button style={{'backgroundColor':'rgb(35, 35, 35)', 'border':'none', 'cursor': 'hover', 'padding':'0px'}} onClick={handleClose}>
                        <FontAwesomeIcon  className='fa-fw text-white'icon="grip-lines"  />
                    </button>
        
                    <a href=""className='my-auto ms-4 font-weight-bold side-title'>React Web App</a>
                </div>
                {/* <Button variant='deafult' style={{'backgroundColor':'rgb(20, 20, 20)'}} onClick={handleClose}>
                
                </Button> */}

                    {/* <Offcanvas.Title>こんにちは世界</Offcanvas.Title> */}
                </Offcanvas.Header>
                <Offcanvas.Body  className='p-0 pt-3 px-3'>
                    <a href="">
                        <div className='d-flex flex-start align-items-center side-div'>    
                            <FontAwesomeIcon className='fa-fw' icon="gauge" /> 
                            <p className='m-0 side-subtitle ms-4'>  Dashboard</p>
                        </div>
                    </a>
                    <a href="">
                    <div className='d-flex flex-start align-items-center side-div'>    
                            <FontAwesomeIcon className='fa-fw' icon="grip" /> 
                            <p className='m-0 side-subtitle ms-4'>  Products</p>
                        </div>
                    </a>
        
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default SideBar