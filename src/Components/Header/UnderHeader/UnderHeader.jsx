import React from 'react'
import underheaderStyle from './underheader.module.css'
import { SlMenu } from "react-icons/sl";


const UnderHeader = () => {
  return (
    <div className={underheaderStyle.lower__container}>
         
         <ul>
                <li>
                    <SlMenu />
                    <p>All</p>
                </li>
                <li>Today's Deall</li>
                <li>Customer Sercvice</li>
                <li>Registry</li>
                <li>Gift Cards</li>
                <li>Sell</li>
         </ul>

    </div>
  )
}

export default UnderHeader