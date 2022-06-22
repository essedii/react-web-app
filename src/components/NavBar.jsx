import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavBar = ({navToHome}) => {
   return(
    <div>
      <nav className="nav border-0  border-bottom " style={{'minHeight': '3rem'}} >
<div className='d-flex flex-start align-items-center' style={{'padding': '1rem 1rem'   }}>
  
          <button 
            className='btn' 
            style={{ 'border':'none', 'cursor': 'hover', 'padding':'0px'}}  
            onClick={() => navToHome(true)}>
            <FontAwesomeIcon  className='fa-fw 'icon="grip-lines"  />
          </button>
        
        <p className='m-0 ms-5'>React Web App</p>
   
</div>
     

      </nav>
    </div>
   )
  }

export default NavBar


