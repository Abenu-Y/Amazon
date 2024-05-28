import React, { useState } from 'react';
import offcanvasStyle from './offcanvas.module.css';
import { SlMenu } from "react-icons/sl";
import { MdPersonPin } from "react-icons/md";
import { Link } from 'react-router-dom';
import { RiCloseLine } from "react-icons/ri";

function OffCanvas() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffCanvas = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add(`${offcanvasStyle.no_scroll}`);
    } else {
      document.body.classList.remove(`${offcanvasStyle.no_scroll}`);
    }
  };

  const closeOffCanvas = () => {
    setIsOpen(false);
    document.body.classList.remove(`${offcanvasStyle.no_scroll}`);
  };

  return (
    <div className={offcanvasStyle.offcanvas_container}>
      <button onClick={toggleOffCanvas} className={offcanvasStyle.menu}>
        <SlMenu size={22} /> <p>All</p>
      </button>
      <div className={`${offcanvasStyle.offcanvas}  ${isOpen ? `${offcanvasStyle.show}` : ''}`}>
        <div className={offcanvasStyle.canvas_container}>
          <div className={offcanvasStyle.canvas_header} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <MdPersonPin size={30} /><span>Hello, Sign in</span>
            </div>
            <div onClick={closeOffCanvas} style={{ cursor: 'pointer' }}>
              <RiCloseLine size={30} />
            </div>
          </div>

          <div>
            <h4>Digital Contents & Devices</h4>
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
              <li><Link to="/">Arts & Crafts</Link></li>
              <li className={offcanvasStyle.c_all}><Link to="/" >See all</Link></li>
            </ul>
          </div>

          <div>
            <h4>Programs & Feature</h4>
            <ul>
              <li><Link to="/">Gift Cards</Link></li>
              <li><Link to="/">Shop By Interest</Link></li>
              <li><Link to="/">Amazon Live</Link></li>
              <li><Link to="/">International Shopping</Link></li>
              <li className={offcanvasStyle.c_all}><Link to="/">See all</Link></li>
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
        </div>
      </div>
      {isOpen && <div className={offcanvasStyle.backdrop} onClick={closeOffCanvas}></div>}
    </div>
  );
}

export default OffCanvas;
