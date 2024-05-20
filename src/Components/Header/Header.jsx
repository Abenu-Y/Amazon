import React, { useState,useEffect ,useContext } from 'react'
import headerStyle from './header.module.css'

import { IoLocationOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";

import UnderHeader from './UnderHeader/UnderHeader';
import {Link } from 'react-router-dom'
import {auth} from '../../Utility/firebase'
import { BiCartDownload } from "react-icons/bi";
import {DataContext} from '../Data/DataProvider'

const Header = () => {

       const [locationName, setLocationName] = useState('');
       
      
       const [{basket,user},dispatch] =useContext(DataContext)
 
        const totalItem = basket?.reduce((amount,item)=>{
            return item.amount + amount
        },0)


        useEffect(() => {
            const fetchLocation = async () => {
              try {
                // console.log(navigator.geolocation)
                if (navigator.geolocation) {
                   //console.log(navigator.geolocation)

                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                      const { latitude, longitude } = position.coords;
                      const name = await fetchLocationName(latitude, longitude);
                      setLocationName(name);
                    },
                    (error) => {
                      console.error('Error fetching geolocation data:', error);
                      setLocationName('Location not found');
                    }
                  );

                } else {
                  console.error('Geolocation is not supported by this browser.');
                  setLocationName('Location not found');
                }
              } catch (error) {
                console.error('Error fetching location:', error);
                setLocationName('Location not found');
              }
            };
        
            fetchLocation();
          }, []); // Empty dependency array to run effect only once when component mounts
        
          const fetchLocationName = async (latitude, longitude) => {
            try {
              const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
              const data = await response.json();
              return data.city || data.locality || data.region || data.countryName; // Check for specific location names
            } catch (error) {
              console.error('Error fetching location name:', error);
              return 'Location not found';
            }
          };




    return (
            <div className={headerStyle.sticky} id='/header'>
                
                    <div className={headerStyle.header__container}>

                            <div className={headerStyle.logo__container}>
                                <Link to="">
                                    <img src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png" alt="" />
                                </Link>

                                <div className={headerStyle.delivery}>
                                    <span><IoLocationOutline size={22} /></span>
                                    <div>
                                        <p>Deliver to  </p>
                                    
                                        <span>{locationName}</span>
                                    </div>
                                </div>
                            </div>

                            <div className={headerStyle.search}>

                                <select name="" >
                                        <option value="" hidden>All</option>   
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
                                            </>): (<><p>Hello,sign in</p></>)
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
                                            <BiCartDownload  size={40}/>
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