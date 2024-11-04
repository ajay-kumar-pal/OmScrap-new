import './RateList.css';
import { Link, Outlet } from 'react-router-dom';

// function opensidebarmenu(){
//     let sidebarmenu = document.getElementById("sidebarmenu");
//     let xmark = document.getElementById("xmark");
//     let burger = document.getElementById("burger");
  
//     sidebarmenu.style.display="block";
//     burger.style.display="none";
//     xmark.style.display="block";
//   }
//   function closesidebarmenu(){
//     let xmark = document.getElementById("xmark");
//     let sidebarmenu = document.getElementById("sidebarmenu");
//     let burger = document.getElementById("burger");
  
//     sidebarmenu.style.display="none";
//     burger.style.display="block";
//     xmark.style.display="none";
  
//   }


const Ratecard = () => {
    return(
        <>
            <section  id="ratecard_section">
                <nav class="sidebar">
                    <div class="text">
                        Rate list category 
                        {/* <i id="xmark" onClick={closesidebarmenu} class="fa-solid fa-circle-xmark"></i>
                        <i id="burger" onClick={opensidebarmenu} class="fa-solid fa-circle-chevron-down"></i> */}
                    </div>

                    <div id="sidebarmenu">
                        <ul >
                            <li><Link to="ironitems">iron items</Link></li>
                            <li><Link to="plasticitem">plastic items</Link></li>
                            <li><Link to="metalitem">metal items</Link></li>
                            <li><Link to="electronicitem">electronic items</Link></li>
                            <li><Link to="glassitem">glass items</Link></li>
                            <li><Link to="wooditem">wood items</Link></li>
                            <li><Link to="paperitem">paper items</Link></li>
                            <li><Link to="vehicleitem">vehicle items</Link></li>
                        </ul>
                    </div>
                </nav>
                <div class="rightSide_section">
                <div id="rateList_heading" class="rateList_heading">
                    rate list
                </div>
                        <Outlet/>
                </div>
            </section>
        </>
    );
};


export default Ratecard;