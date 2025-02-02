import React from 'react';
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div id="footercontainer">
        <div id="footerimg">
          <img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" alt="imgfooter" />
        </div>
        <div id="footercontent">
          <div>
            <h2>RESOURCES</h2>
            <ul>
              <li><NavLink className={(e)=>{return e.isActive?"red": "" }} to="/">Home</NavLink></li>
              <li><NavLink className={(e)=>{return e.isActive?"red": "" }} to="/about">About</NavLink></li>
            </ul>
          </div>
          <div>
            <h2>FOLLOW US</h2>
            <ul>
              <li><NavLink className={(e)=>{return e.isActive?"red": "" }} to="/Github">Github</NavLink></li>
              <li><NavLink className={(e)=>{return e.isActive?"red": "" }} to="/discord">Discord</NavLink></li>
            </ul>
          </div>
          <div>
            <h2>LEGAL</h2>
            <ul>
              <li><NavLink className={(e)=>{return e.isActive?"red": "" }} to="/Privacy Policy">Privacy Policy</NavLink></li>
              <li><NavLink className={(e)=>{return e.isActive?"red": "" }} to="/Terms & Conditions">Terms & Conditions</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
      <div id="footerend">
        <div style={{fontWeight: 'bold'}}><p>&copy;MianLuqman. All Right Reserved</p></div>
        <div id="socialmediaicons">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-discord"></i>
          <i className="fa-brands fa-x-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
      </div>
    </>
  );
};

export default Footer;
