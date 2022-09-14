import React from 'react'
import './headerstyles.css'
import vv from '../images/vv.png'


function Header() {
  return (
    <div className='header-background'>
      <nav>
        <div className='logo'>
          <div className='header-image'>
          <img className='ig1' alt='dog3' src={vv} />
          </div>
          <h2>dukaan<h4 className='re'>&reg;</h4></h2>
        </div>
       <div className='Header-links'>
         <ul>
         <li className='sign-in'><a href="rrr">Sign in</a></li> 
         <button className='btn'>Dukaan for PC</button>
         </ul>
       </div>
     </nav>
   </div>

  )
}

export default Header
