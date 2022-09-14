import React from 'react'
import './Folder.css'
import r1 from '../images/r1.png'
import r2 from '../images/r2.png'
import r3 from '../images/r3.png'
import r4 from '../images/r4.png'

export default function Folder() {
  return (
    <div className='back'>
        <h1>Try our other free products.</h1>
        <div className='folder-content'>
           <div className='folder-files'>
              <img src={r1} alt=""/>
              <h4>Privacy Policy Generator</h4>
              <p>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
           </div>
           <div className='folder-files'>
             <img src={r2} alt=""/>
             <h4>Terms and conditions generator</h4>
             <p>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
           </div>
           <div className='folder-files'>
             <img src={r3} alt=""/>
             <h4>Domain name generator</h4>
            < p>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
           </div>
           <div className='folder-files'>
            <img src={r4} alt=""/>
            <h4>Invoice Generator</h4>
            <p>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
           </div>
        </div>
    </div>
  )
}
