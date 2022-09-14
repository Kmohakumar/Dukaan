import React from 'react'
import vv from '../images/vv.png'
import './footer.css'
import flag from '../images/flag.png'

function Footer() {
  return (
    <div className='footer-background'>
       <div className='Footer-content'>
            <div className='logo'>
                <div className='image1'>
                    <img className='ig1' src={vv} />
                </div>
                <h2>dukaan<h4 className='re'>&reg;</h4></h2>
            </div>
            <ul>
                <li>Contact</li>
                <li>FAQ's</li>
            </ul>
            <ul>
                <li>Tutorial</li>
                <li>Blogs</li>
            </ul>
            <ul>
                <li>Privacy</li>
                <li>Banned items</li>
            </ul>
            <ul>
                <li>About</li>
                <div className='l5'>
                    <p className='sp'>Jobs</p> 
                    <p className='cir'>3</p>
                </div>
            </ul>
            <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Linkedin</li>
            </ul>
        </div>
       <hr className='footer-line'></hr>
       <div className='Footer-end'>
            <div>
                <p>Dukaan 2020, All rights reserved.</p>
            </div>
            <div className='flag-content'>
                <p>Made in</p>
                <img src={flag}></img>
            </div>
       </div>
      
    </div>
  )
}

export default Footer
