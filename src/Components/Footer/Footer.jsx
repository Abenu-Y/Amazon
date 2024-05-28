import React, { useContext,useState,useEffect } from 'react'
import { DataContext } from '../Data/DataProvider'
import footerStyle from './footer.module.css'
import { Link } from 'react-router-dom'
import { TbWorld } from "react-icons/tb";

import { useNavigate } from 'react-router-dom';
const Footer = () => {

    const [{user},dispatch] =useContext(DataContext)
    const navigate = useNavigate()
    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

    const navig =()=>{
          navigate('/auth')
    }


    const scrollToTop = () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth', // This makes the scroll smooth
          });
      };



    useEffect(() => {
          const handleResize = () => {
            setIsMobile(window.innerWidth < 800);
          };
  
            window.addEventListener('resize', handleResize);
            
            // Cleanup event listener on component unmount
            return () => window.removeEventListener('resize', handleResize);
    }, []);

    
  return (


    <footer id='footer'>
         
            {
                !user && (<div className={footerStyle.footer_signIn_btn}> 
                         <div> See Personalised recommendations</div>                    
                        <button onClick={navig}> Sign In</button>
                        <div>New Customer ? <span>start here</span></div>
                </div>)
            }

          <div className={footerStyle.backT_top} onClick={scrollToTop}>Back to Top </div>

          <div className={footerStyle.footer_links_container}>

                <div className={footerStyle.footer_links}>
                      
                      <div>
                        {
                          isMobile ? <>
                                          <h3>Get to Know Us</h3>
                                          <ul>
                                                <li><Link to="https://www.amazon.com/">Amazon.com</Link></li>
                                                <li><Link to="/orders">Your Lists</Link></li>
                                                <li><Link to="">Find a Gift</Link></li>
                                                <li><Link to="">Browsing History</Link></li>
                                                <li><Link to="#header">Returns</Link></li>
                                          </ul>
                                     </> :
                                     
                                     <> 
                                          <h3>Get to Know Us</h3>
                                          <ul>
                                                <li><Link to="">Careers</Link></li>
                                                <li><Link to="">Blog</Link></li>
                                                <li><Link to="">About Amazon</Link></li>
                                                <li><Link to="">Investor Relations</Link></li>
                                                <li><Link to="#cat">Amazon Devices</Link></li>
                                                <li><a href="#cat">Amazon Science</a></li>
                                          </ul>
                                     </>
                            }
                      </div>

                      <div>
                     {
                      isMobile ? <> 
                                      <h3>Make Money with Us</h3>
                                      <ul>
                                            <li><Link to="/orders">Your Orders</Link></li>
                                            <li><Link to="">Gift Cards and Registry</Link></li>
                                            <li><Link to="">Your Account</Link></li>
                                            <li><Link to="">Sell products on Amazon</Link></li>
                                            <li><Link to="">Avertise Your Products</Link></li>
                                            <li><Link to=""> Security Alerts</Link></li>
                                            <li><Link to="">Recalls and Products</Link></li>
                                            <li><Link to=""> Customer Service</Link></li>
                                      </ul>
                               </>:

                               <> 
                                      <h3>Make Money with Us</h3>
                                        <ul>
                                              <li><Link to="">Sell products on Amazon</Link></li>
                                              <li><Link to="">Sell on Amazon Business</Link></li>
                                              <li><Link to="">Sell apps on Amazon</Link></li>
                                              <li><Link to="">Become an Affilate</Link></li>
                                              <li><Link to="">Avertise Your Products</Link></li>
                                              <li><Link to="">Self Publish with Us</Link></li>
                                              <li><Link to="">Host an Amazon Hub</Link></li>
                                              <li><Link to=""> See More Make Money with Us</Link></li>
                                        </ul>
                               </>
                     }

                      </div>

                      <div>
                      <h3>Amazon Payement Products</h3>
                            <ul>
                              <li><Link to="">Amazon Business Card</Link></li>
                              <li><Link to="">Shop with Points</Link></li>
                              <li><Link to="">About Amazon</Link></li>
                              <li><Link to="">Reload Your Balance</Link></li>
                              <li><Link to="">Amazon Currency Converter</Link></li>
                          
                            </ul>
                      </div>

                      <div>

                      <h3>Let Us Help You</h3>
                            <ul>
                              <li><Link to="">Amazon and COVID-19</Link></li>
                              <li><Link to="">Your Account</Link></li>
                              <li><Link to="">Your Orders</Link></li>
                              <li><Link to="">Shipping Rates & Policies</Link></li>
                              <li><Link to="">Returns & Replacements</Link></li>
                              <li><Link to="">Manage Your Content and Devices</Link></li>
                              <li><Link to="">Amazon Assitant</Link></li>
                              <li><Link to=""> Help</Link></li>
                            </ul>

                      </div>
                        

                </div>    

         </div>

         <div className={footerStyle.footer}>

                  <div className={footerStyle.img_container}>
                      <Link to="">
                              <img src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png" alt="" />
                        </Link>
                  </div>

                  <div className={footerStyle.select}>
                        <select name="" id="" className={footerStyle.selecton}>
                              <option value="" hidden>  English</option>
                              <option value="">  France</option>
                              <option value="">  Protugues</option>
                              <option value=""> Spanish</option>
                        </select>
                        
                        {/* <progress value='70' max='100'></progress> */}

                        <select name="" id=""   className={footerStyle.select_no_arrow}>
                              <option value={<TbWorld />}>$ USD- U.S Dollar</option>
                        </select>
                  
                        <select name="" id="us" className={footerStyle.select_no_arrow}>
                              <option value="">United States</option>
                        </select>


                  </div>

          </div>

          <div className={footerStyle.amazon}>

                  <div className={footerStyle.amz_links}>
                        <ul>
                              <li><Link to='/'>Condition of Use</Link></li>
                              <li><Link to='/'>Privacy Notice</Link></li>
                              <li><Link to='/'>Cosumer Health Data Privacy Disclosure</Link></li>
                              <li><Link to='/'>Yours Ads Privacy Choices</Link></li>
                        </ul>
                  </div>

                  <div>
                         &copy; 1996-2024,Amazon ,Inc or . its affilates
                  </div>

          </div>

            
    </footer>

  )
}

export default Footer