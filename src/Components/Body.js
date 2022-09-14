import React from 'react'
import './body.css'
import {BiChevronRight} from  "react-icons/bi"
import {FiX} from  "react-icons/fi"

export default function Body() {
  return (
   <div className='body-background'>
      <div className='body-content'>
                <div className='content-p1'>
                  <h1>Free slogan maker</h1>
                  <p className='p1'>Simply enter a term that describes your business, and get up to 1,000 relevant slogans for free.</p>
                  <h4 className='p2'>Word for your slogan</h4>
                  <div className='form'>
                    <input className='input-f' type="text" placeholder="cozy"/>
                    <FiX className='fix'/>
                  </div>
                  <button className='btn1'>Generate slogans</button>
                  <hr className='line1'></hr>
              </div>
            <div className='result'>
              <h3>We have generated 1,023 slogans for “cozy”</h3>
              <button className='btn2'>Download all</button>
            </div>
          <div className='grid'>
              <div className='list'>
                  <p className='list1'>There is no Sore it will Not Heal, No cool it will not Subdue.</p>
                  <p className='list1'>There is no Sore it will Not Heal, No cool it will not Subdue.</p>
                  <li className='list11'><p>Review the facts cool is the best.</p></li>
                  <p className='list1'>There is no Sore it will Not Heal, No cool it will not Subdue.</p>
                  <p className='list1'>There is no Sore it will Not Heal, No cool it will not Subdue.</p>
                  <p className='list1'>There is no Sore it will Not Heal, No cool it will not Subdue.</p>
                  <p className='list1'>There is no Sore it will Not Heal, No cool it will not Subdue.</p>
                  <p className='list1'>There is no Sore it will Not Heal, No cool it will not Subdue.</p>
                  <p className='list1'>There is no Sore it will Not Heal, No cool it will not Subdue.</p>
              </div>
                  <div className='list'>
                  <li className='list11'><p>coziness building for tomorrow</p></li>
                  <li className='list11'><p>Review the facts cool is the best.</p></li>
                  <li className='list11'><p>coziness building for tomorrow</p></li>
                  <li className='list11'><p>coziness building for tomorrow.</p></li>
                  <li className='list11'><p>coziness building for tomorrow.</p></li>
                  <li className='list11'><p>coziness building for tomorrow</p></li>
                  <li className='list11'><p>coziness building for tomorrow.</p></li>
                  <li className='list11'><p>coziness building for tomorrow</p></li>
                  <li className='list11'><p>coziness building for tomorrow</p></li>
              </div>
          </div>
           <hr className='line1'></hr>
            <div className='page-number'>
              <div className='numbers'>
                <li className='num1' style={{borderRadius:'100%',background:"#146EB4",color:'white',paddingtop:'2px',paddingleft:'2px',paddingright: '2px',paddingbottom:'2px',width:'24px',height:'24px'}}>1</li>
                <li className='num1'>2</li>
                <li className='num1'>3</li>
                <li className='num1'>...</li>
                <li className='num1'>21</li>
              </div>
              <div className='next-design'>
               <a href='jjj'>Next </a>
               <BiChevronRight className='icon'/>
              </div>
            </div>
      </div>
        <btn className="btn3">Click to copy</btn>
        <btn className="btn4">Copied!</btn>
   </div>
  )
}
