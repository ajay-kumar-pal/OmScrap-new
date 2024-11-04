import './Footer.css';
import { mobile_no } from './Header';
import { Link } from "react-router-dom";
import logo from "../image/logo/logo.png";

import recycle_earth from "../image/logo/recycle-earth.png";


const Footer =()=>{
    return(
        <>
        <section>
        <footer id="footer-section">
            <div class="footer-row">
                <div class="footer-col">
                    <h4>quick links</h4>
                    <ul>
               
                        <li><Link  to="/">Home</Link></li>
                        <li><Link to="./ratecard/ironitems">Rate List</Link></li>
                        <li><Link to="./pickuprequest">Pickup Request</Link></li>
                        <li><Link to="./about">About Us</Link></li>
                        <li><Link to="./contact">Contact Us</Link></li>
                        
                    </ul>
                </div>
                <div class="footer-col">
                    <div class="footer-social-links">
                        <h4>social links</h4>
                        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                        <a href="#"><i class="fa-brands fa-youtube"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
                <div class="footer-col">
                    <h4>Company Info</h4>
                    <div class="footer-address">
                        <h6>address</h6>
                        <p>
                            <i class="fa-regular fa-address-card"></i> rz c2/254 street no-6 <br/>
                            mahavir enclave part -1 <br/>
                            new delhi - 110045 
                            </p>
                    </div>
                    <div class="footer-phone">
                        <h6>phone</h6>
                        <a href="#"><i class="fa-solid fa-phone"></i> { mobile_no }</a>
                    </div>
                </div>
                <div class="footer-col hello">
                    <div class="footer-logo">
                        <img src={logo  } alt=""/>
                        <img id="footer-recycle" src={recycle_earth} alt=""/>
                    </div>
                </div>
                <div class="copy-right" style={{width: "100%"}}>
                    <p style={{textAlign: "center", paddingRight: "5px", width: "100%", color: "#eee", fontSize:"10px"}}>&#169; 2023 Om Scrap. All right reserved. @ajay kumar pal</p>
                </div>
            </div>

        </footer>
    </section>
        </>
    );
};


export default Footer;