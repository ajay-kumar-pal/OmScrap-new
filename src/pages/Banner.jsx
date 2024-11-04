import  banner_0  from "../image/banner/banner_0.jpg";
import  banner_1  from "../image/banner/banner_1.jpg";
import  banner_2  from "../image/banner/banner_2.jpg";
import "./Banner.css";


// let count = 0;
// bannerSlide();
// function bannerSlide(){
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("dot");
//     for(i=0; i<slides.length;i++)
//     {
//         slides[i].style.display="none";

        
//     }
//     count++;
//     if(count>slides.length)
//     {
//         count=1;
//     }
//     for(i=0;i<dots.length;i++)
//     {
//         dots[i].className = dots[i].className.replace(" bannerActive", "");
//     }
//     slides[count-1].style.display="block";
//     dots[count-1].className += " bannerActive";
//     setTimeout(bannerSlide, 2000);
// }





const Banner = () =>{
    return(
        <>
        <section >
            <div className="banner-container">
                <div className="banner-row">
                    <div className="imageBox mySlides">
                        <img src={banner_0} alt="banner_0"/>
                        <div className="image-text banner_text">
                            <h2>Don't through your waste</h2> 
                            <h4>
                                Sell it to us<br/> 
                                <span style={{paddingLeft: "100px"}}>&</span>
                                <br/> 
                                Make Money
                            </h4>
                        </div>
                    </div>
                    <div className="imageBox mySlides">
                        <img src={banner_1} alt="banner_0"/>
                        <div className="image-text banner_text">
                            <h2>1</h2> 
                            
                        </div>
                    </div>
                    <div className="imageBox mySlides">
                        <img src={banner_2} alt="banner_0"/>
                        <div className="image-text banner_text">
                            <h2>2</h2> 
                            
                        </div>
                    </div>
                    
                    <div className="dots">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
                </div>
                
        </section>


                            
        </>
    );
};

export default Banner;