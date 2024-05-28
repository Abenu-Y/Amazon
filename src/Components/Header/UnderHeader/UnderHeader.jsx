import React, { useRef } from 'react'
import underheaderStyle from './underheader.module.css'
import { SlMenu } from "react-icons/sl";
import {Link} from 'react-router-dom'
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { MdPersonPin } from "react-icons/md";
import { RiCloseLargeLine } from "react-icons/ri";
import OffCanvas from '../../offCanvas/OffCanvas';


const UnderHeader = () => {

// const canva = useRef(null)

// const openCanva = () =>{
//   canva.current.style.width ='400px'
// }

// const closeCanva = () =>{
//   canva.current.style.width = '0px'
// }
  
  return (
    <div className={underheaderStyle.lower__container}>
{/* 
            <div className={underheaderStyle.canva_container} ref={canva}>

                    
                 <div style={{display:'flex'}} className={underheaderStyle.canvas_header}>
                       <div>
                          <MdPersonPin size={30}/><span>Hello , Sign in</span>
                       </div>

                         <div onClick={closeCanva} >
                               <RiCloseLargeLine />
                        </div>
                  </div>

                  

                  <div>
                      <h4 onClick={closeCanva}> Digital Contents & Devices</h4>
                      <ul>
                        <li><Link to="/">Amazon Music</Link></li>
                        <li><Link to="/">Kindle E-readers & Books</Link></li>
                        <li><Link to="/">Amazon Appstore</Link></li>
                      </ul>
                      
                  </div>

                  <div>
                      <h4>Shop by Department</h4>
                      <ul>
                        <li><Link to="/">Electronics</Link></li>
                        <li><Link to="/">Computers</Link></li>
                        <li><Link to="/">Smart Home</Link></li>
                        <li><Link to="/">Arts & Cradts</Link></li>
                        <li><Link to="/">see all</Link></li>
                      </ul>
                      
                  </div>

                  <div>
                      <h4>Programs & Feature</h4>
                      <ul>
                        <li><Link to="/">Gift Cards</Link></li>
                        <li><Link to="/">Shop By Interest</Link></li>
                        <li><Link to="/">Amazon Live</Link></li>
                        <li><Link to="/">International Shopping</Link></li>
                        <li><Link to="/">See all</Link></li>
                      </ul>
                      
                  </div>

                  <div>
                      <h4>Help & Settings</h4>
                      <ul>
                        <li><Link to="/">Your Account</Link></li>
                        <li><Link to="/">English</Link></li>
                        <li><Link to="/">United States</Link></li>
                        <li><Link to="/">Customer Service</Link></li>
                        <li><Link to="/auth">Sign In</Link></li>
                      </ul>
                      
                  </div>
                  
            </div> */}

              
        
            <ul>
                    <li ><OffCanvas /></li>
                    <li >Today's Deall</li>
                    <li>Customer Sercvice</li>
                    <li>Registry</li>
                    <li>Gift Cards</li>
                    <li>Sell</li>
            </ul>

    </div>
  )
}

export default UnderHeader