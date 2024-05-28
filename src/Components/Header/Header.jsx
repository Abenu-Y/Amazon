import React,{useState,useEffect, useContext} from 'react'
import classes from './header.module.css'
import { GrLocation } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";
// import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { BiCartDownload } from "react-icons/bi"
import {auth} from '../../Utility/firebase'
import {Link,useNavigate} from'react-router-dom'
import {DataContext} from '../Data/DataProvider'
import logo from './amazon_PNG11.png'
import UnderHeader from './UnderHeader/UnderHeader'

import { IoMdRadioButtonOn } from "react-icons/io";


function Header() {

    const [locationName, setLocationName] = useState('');
    const [{basket,user},dispatch] =useContext(DataContext)
 
        const totalItem = basket?.reduce((amount,item)=>{
            return item.amount + amount
        },0)

  const  navigate = useNavigate()

   const navig =()=>{
    navigate('/auth')
   }


   
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
                   setLocationName(' ');
                 }
               );

             } else {
               console.error('Geolocation is not supported by this browser.');
               setLocationName(' ');
             }
           } catch (error) {
             console.error('Error fetching location:', error);
             setLocationName(' ');
           }
         };
     
         fetchLocation();
       }, []); 

     
       const fetchLocationName = async (latitude, longitude) => {
         try {
           const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
           const data = await response.json();
           return data.city || data.locality || data.region || data.countryName; // Check for specific location names
         } catch (error) {
           console.error('Error fetching location name:', error);
           return ' ';
         }
       };

  return (
    <div className={classes.sticky}>
    
    <div className={classes.header_outer_container}>
          

          <div className={classes.header_inner_container}>
               
               <div className={classes.header_left}>
                     <div>
                          <Link to="/">
                               <img src={logo} alt="amazon logo" />
                          </Link>
                     </div>

                     <div className={classes.location_container}>
                            
                            <span><GrLocation size={20}/></span>
                            <div className={classes.location}>
                                 <p>Deliver to </p>
                                 <p>{locationName}</p>
                            </div>
                     </div>
               </div>

               <div className={classes.header_middle}>
                    <select name="" id="">
                          <option value="">All</option>
                    </select>

                    <input type="search" name="" id="" placeholder='Search Amazon'/>
                    <BsSearch size={38} />

               </div>

               <div className={classes.header_right}>
                  <Link to=""  className={classes.first_link}>
                        <img src="https://image.shutterstock.com/image-vector/vector-image-american-flag-260nw-157626554.jpg" alt="" />
                        <select name="" id="">   
                                <option value="">EN</option>
                        </select>
                   </Link>

                   <>
                   
         
                <div
             
                  // onMouseLeave={() => setShowdetail(false)}
                  className={classes.language_detail_container}
                >
                  <div className={`${classes.language_link} ${classes.gap1}`}>
                    <div>Change language </div>
                    <span>
                      <a href="">Learn more</a>
                    </span>
                  </div>
                  <div className={classes.language_list}>
                    <ul>
                      <li  className={classes.english}>
                        {/* <IoMdRadioButtonOn />{" "} */}
                        <span>
                          <a href="">English-EN</a>
                        </span>
                      </li>
                      <li>
                        <IoMdRadioButtonOn />
                        <span>
                          <a href="">español - ES</a> <a href=""></a>
                        </span>
                      </li>
                      <li>
                        <IoMdRadioButtonOn />
                        <span>
                          {" "}
                          <a href="">لعربيةا- AR</a>{" "}
                        </span>
                      </li>
                      <li>
                        <IoMdRadioButtonOn />
                        <span>
                          <a href="">Deuch - DE</a>{" "}
                        </span>
                      </li>
                      <li>
                        <IoMdRadioButtonOn />
                        <span>
                          <a href="">עברית - HE</a>{" "}
                        </span>
                      </li>
                      <li>
                        <IoMdRadioButtonOn />
                        <span>
                          <a href="">한국어 - KO</a>{" "}
                        </span>
                      </li>
                      <li>
                        <IoMdRadioButtonOn />
                        <span>
                          <a href="">português - PT</a>{" "}
                        </span>
                      </li>
                      <li>
                        <IoMdRadioButtonOn />
                        <span>
                          <a href="">中文 (简体) - ZH </a>
                        </span>
                      </li>
                      <li>
                        <IoMdRadioButtonOn />
                        <span>
                          <a href="">中文 (繁體) - ZH</a>{" "}
                        </span>
                      </li>
                      <br />
                    </ul>
                  </div>
                  <div className={`${classes.language_link} ${classes.gap}`}>
                    <p>Change Currency </p>
                    <span>
                      <a href="">Learn more</a>
                    </span>
                  </div>
                  <div className={classes.language_change}>
                    <p>$ USD - U.S.Dollar</p>
                    <span>
                      {" "}
                      <a href="">change</a>
                    </span>
                  </div>
                  <div>
                    <div className={classes.amzonshopping}>
                      <img
                        src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
                        width={15}
                        alt=""
                      />{" "}
                      <span> Your are shopping on Amazon.com</span>
                      <br />
                      <br />
                      <a href="" className={classes.change_country}>Change country/region</a>
                    </div>
                  </div>
                </div>
            
                   
                   </>



                  {/*<Link to="/auth">Hello, Sign In</Link> */}

                   <Link to={!user && "/auth"}  className={classes.userLink} >
                                        <div>
                                            {
                                                user?
                                            (<>
                                                    <p>Hello,{user?.email?.split('@')[0]}</p>
                                                    <span onClick={()=>auth.signOut()}> Sign Out</span>
                                            </>):
                                             (<>
                                                  <p>Hello,sign in</p>
                                                  <p>Accounts & Lists</p>
                                                                                          
                                              </>)
                                            }
                                        </div>
                                         
                  </Link> 

                 <div className={classes.accAndLists} >
                            {
                              <div className={classes.header_signIn_btn}> 
                                                        
                                     { !user &&( <div className={classes.text_center}>
                                          <button onClick={navig}> Sign In</button>
                                          <div className={classes.sign_here}>
                                              New Customer ? <span>start here</span>
                                          </div>
                                      </div>)
                                     }

                                      <div className={classes.signAcc_lists}>

                                        <div>
                                                <h4>Your Lists</h4>
                                                <ul>
                                                  <li><a href="">Create a List</a></li>
                                                  <li><a href="">Find a List or Registry</a></li>
                                                </ul>
                                        </div>

                                        <div className={classes.vertical}>
                                                  <h4>Your Accounts</h4>
                                                  <ul>
                                                      <li><a href="">Account</a></li>
                                                      <li><a href="">Orders</a></li>
                                                      <li><a href="">Recommendations</a></li>
                                                      <li><a href="">Browsing Hsitory</a></li>
                                                      <li><a href="">Watch Lists</a></li>
                                                      <li><a href="">Video Purchases & Rentals</a></li>
                                                      <li><a href="">Kindle Unlimted</a></li>
                                                      <li><a href="">Content & Devices</a></li>
                                                      <li><a href="">subscribe & Save items</a></li>
                                                      <li><a href="">Memberships & Subscriptions</a></li>
                                                      <li><a href="">Music Library</a></li>
                                                  </ul>
                                        </div>

                                      </div>
                                </div>
                              }
                 </div>      

                  <Link to="/orders">
                       <p className={classes.returns}>Returns</p>
                       <p className={classes.orders}>& Orders</p>
                  </Link>

              
                  <Link to="/cart" className={classes.cart}><BiCartDownload size={36}/> <span>{totalItem}</span></Link>



               </div>

          </div>


    </div>

    
    <UnderHeader />
    
    </div>
  )
}

export default Header