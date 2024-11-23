import logo from "../image/logo/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
const mobile_no = `9911223199`;
const mobile_no_2 = `8700644730`;

function showmenu(){
    let navhead=document.getElementById("navhead"); 
    let hamburger=document.getElementById("hamburger");
    let crossburger=document.getElementById("crossburger");
    navhead.style.display="block";
    hamburger.style.display="none";
    crossburger.style.display="block";

  }
  function hidemenu(){
    let navhead=document.getElementById("navhead");
    let large_screen_number=document.getElementById("large_screen_number");
    large_screen_number.style.display="none";
    navhead.style.display="none";
    let hamburger=document.getElementById("hamburger");
    hamburger.style.display="block";
    let crossburger=document.getElementById("crossburger");
    crossburger.style.display="none";
  }
  

const Header =() =>{
    return(
        <>
            <header>
                <a id="header_logo" >
                    <Link  to="/"><img src={logo}  width="100px" height="100px" alt="mylogo"/></Link>
                    <i onClick={showmenu} id="hamburger" className="fa-solid fa-bars "></i>
                    <i onClick={hidemenu} id="crossburger" className="fa-solid fa-xmark "></i>
                    <Link className="headerRatelistButton" to="./ratecard/ironitems">Rate List</Link>
                    <Link className="headerHomeButton" to="/">Home</Link>
                    <div id="header_mobile_phone">
                        <i className="fa-solid fa-mobile-screen" ><a href={"tel:" + mobile_no}>&nbsp;&nbsp;&nbsp;{mobile_no}</a></i>
                        <i className="fa-solid fa-mobile-screen" ><a href={"tel:" + mobile_no_2}>&nbsp;{mobile_no_2}</a></i>
                    </div>
                </a>
                <nav id="navhead" onClick={hidemenu}>
                    <ul id="navbar">
                        <li><Link className="active" to="/">Home</Link></li>
                        <li><Link to="./ratecard">Rate List</Link></li>
                        <li><Link to="./pickuprequest">Pickup Request</Link></li>
                        <li><Link to="./about">About Us</Link></li>
                        <li><Link to="./contact">Contact Us</Link></li>
                        <li id="large_screen_number" ><Link><i className="fa-solid fa-phone">&nbsp;{mobile_no}</i></Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;

export {mobile_no};
export { mobile_no_2 };