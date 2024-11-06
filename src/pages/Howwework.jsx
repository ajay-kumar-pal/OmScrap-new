import './Howwework.css';
import hww1 from '../image/hww/hww-1.png';
import hww2 from '../image/hww/hww-2.png';
import hww3 from '../image/hww/hww-3.png';

let count = 0;

var w = document.documentElement.clientWidth || window.innerWidth;
if (w <= 480) {
    slideShow();  
      
} 

function slideShow(){
    let i ;
    let hoverBox = document.getElementsByClassName("mobile-box");
    let hwwdot = document.getElementsByClassName("hwwdot");
    for ( i = 0; i < hoverBox.length; i++) {
        hoverBox[i].style.display= "none";
    }
    count++;

    if(count>hoverBox.length){
        count=1;
    }
    for ( i = 0; i < hwwdot.length; i++) {
        hwwdot[i].className = hwwdot[i].className.replace(" hwwActive", "");

    }
    // ye do lineyo ki vajhe se ho rhi thi problem but dekhna hoga ki galat kya.
    // hoverBox[count-1].style.display="block";
    // hwwdot[count-1].className += " hwwActive";

    setTimeout(slideShow, 2000);
}
const Howwework=()=>{
    return(
        <>
            <section className="how-we-works">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="heading">How we works</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p style={{textAlign:"center"}}>How It Works content will display here.</p>
                        </div>
                    </div>
                    <div className="row hoverBoxContainer">
                        <div id="chngBoxRadius" className="col-md-3 mt-3 hover-box mobile-box">
                            <div className="hww-box">
                                <img className="chngImgRadius" src={hww1} alt="" />
                                <h4>Book a Pickup</h4>
                                <p>From our Website.</p>
                            </div>
                        </div>
                        <div className="col-md-3 mt-3 hover-box mobile-box">
                            <div className="hww-box">
                                <img className="chngImgRadius" src={hww2} alt="" / >
                                <h4>Visit & Inspection</h4>
                                <p>Executive will reach at your doorstep on date and time designated by you.</p>
                            </div>
                        </div>
                        <div className="col-md-3 mt-3 hover-box mobile-box">
                            <div className="hww-box">
                                <img className="chngImgRadius" src={hww3} alt="" / >
                                <h4>Get Money</h4>
                                <p>Get paid with multiple payment.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="hwwdots">
                        <span className="hwwdot"></span>
                        <span className="hwwdot"></span>
                        <span className="hwwdot"></span>
                    </div>
            </section>
        </>
    );
};

export default Howwework;