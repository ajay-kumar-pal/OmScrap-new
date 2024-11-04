import './Whywe.css';
import ww1 from '../image/ww/ww-1.png';
import ww2 from '../image/ww/ww-2.png';
import ww3 from '../image/ww/ww-3.png';
import ww4 from '../image/ww/ww-4.png';

const Whywe = ()=>{
    return(
        <>
        <section class="why-we">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="heading-all">Why we ?</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <p style={{textAlign: "center", paddinBottom: "10px"}}>Smart & Simple web based solution for all type of Scrap.</p>
                </div>
            </div>
            <div class="row">
                <div class="col mt-3">
                    <div class="ww-box">
                        <div class="img-box">
                            <img src={ww1} alt=""/>
                        </div>
                        <div class="img-footer">
                            <p>Free Pick Up</p>
                        </div>
                    </div>
                </div>
                <div class="col mt-3">
                    <div class="ww-box">
                        <div class="img-box">
                            <img src={ww2} alt=""/>
                        </div>
                        <div class="img-footer">
                            <p>Digital Weight Scale</p>
                        </div>
                    </div>
                </div>
                <div class="col mt-3">
                    <div class="ww-box">
                        <div class="img-box">
                            <img src={ww3} alt=""/>
                        </div>
                        <div class="img-footer">
                            <p>Multiple Payment Options</p>
                        </div>
                    </div>
                </div>
                <div class="col mt-3">
                    <div class="ww-box">
                        <div class="img-box">
                            <img src={ww4} alt=""/>
                        </div>
                        <div class="img-footer">
                            <p>Contribution in Swatchh Bharat Abhiyan</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    );
};

export default Whywe;