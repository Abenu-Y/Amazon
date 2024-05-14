import React, { useContext } from 'react'
import headerStyle from './header.module.css'

import { IoLocationOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import UnderHeader from './UnderHeader/UnderHeader';
import {Link } from 'react-router-dom'
import {auth} from '../../Utility/firebase'

import {DataContext} from '../Data/DataProvider'

const Header = () => {
   
       const [{basket,user},dispatch] =useContext(DataContext)
       //console.log(basket.length)
        const totalItem = basket?.reduce((amount,item)=>{
            return item.amount + amount
        },0)

    return (
            <div className={headerStyle.sticky}>
                
                    <div className={headerStyle.header__container}>

                            <div className={headerStyle.logo__container}>
                                <Link to="">
                                    <img src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png" alt="" />
                                </Link>

                                <div className={headerStyle.delivery}>
                                    <span><IoLocationOutline /></span>
                                    <p>Delivered to</p>
                                    <span>...</span>
                                </div>
                            </div>

                            <div className={headerStyle.search}>
                                <select name="" >
                                    <option value="">All</option>
                                </select>
                                <input type="text" placeholder='Search Amazon'/>
                                <BsSearch size={38}/>
                            </div>

                            <div className={headerStyle.order__container}>
                                <a href='' className={headerStyle.language}>
                                    <img src="https://image.shutterstock.com/image-vector/vector-image-american-flag-260nw-157626554.jpg" alt="" />
                                    <select name="" id="">
                                        <option value="">EN</option>
                                    </select>
                                </a>

                                <Link to={!user && "/auth"}>
                                        <div>
                                            {
                                                user?
                                            (<>
                                                    <p>Hello,{user?.email?.split('@')[0].at(0).toUpperCase()}</p>
                                                    <span className={headerStyle.spn} onClick={()=>auth.signOut()}> Sign Out</span>
                                            </>): (<p>Hello,sign in</p>)
                                            }
                                        </div>
                                            {/* <span >Account & Lists</span> */}
                                </Link>

                                <Link to="/orders">
                                        <div>
                                            <p>Returns</p>
                                            <span>& Orders</span>
                                        </div>
                                </Link>

                                <Link to="/cart" className={headerStyle.cart}>
                                        <div>
                                            <BsCart />
                                            <span>{totalItem}</span>
                                        </div>
                                </Link>
                            </div>

                    </div>

                    <UnderHeader />

            </div>
    )
}

export default Header