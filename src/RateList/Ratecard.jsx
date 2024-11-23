import './RateList.css';
import { Link, Outlet } from 'react-router-dom';
import './RateList.css';
import Scrapitembox from './Scrapitembox';
import  Rateitemsdata, {heading}  from "./Rateitemsdata";

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
                <div class="rightSide_section">
                <div id="rateList_heading" class="rateList_heading">
                    rate list
                </div>
                    <div>
                        <Link to="ironitems">iron items</Link>
                    </div>
                        <Outlet/>
                </div>
            </section>
        </>
    );
};


export default Ratecard;