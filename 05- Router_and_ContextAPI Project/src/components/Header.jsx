import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
  <nav>
    <div id="navimg">
        <img   src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" alt="image1"/>
    </div>
    <div id="navlinks">
        <ul>
          <li><NavLink className={(e)=>{return e.isActive?"red": "" }} to="/">Home</NavLink></li>
          <li><NavLink className={(e)=>{return e.isActive?"red": "" }} to="/about">About</NavLink></li>
          <li><NavLink className={(e)=>{return e.isActive?"red": "" }} to="/contact">Contact</NavLink></li>
          <li><NavLink className={(e)=>{return e.isActive?"red": "" }} to="/github">Github</NavLink></li>
          <li><NavLink className={(e)=>{return e.isActive?"red": "" }} to="/contactdata">ContactData</NavLink></li>
        </ul>
    </div>
    <div id="navbtn">
        <button>Log In</button>
        <button id="navbtnstarted">Get started</button>
    </div>
  </nav>
        <hr/>
    </>
  );
}
