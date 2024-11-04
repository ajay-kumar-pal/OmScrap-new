import './Pickuprequest.css';
import form_side_image from '../image/form_side_image.png';
const Pickuprequest=()=>{
    return(
        <>
        {/*    <!-------------------------------------- Start Request Section------------------------------ -->*/}
        <section id="pickup_request" class="request-section">
        <div class="container">
            <div class="row">
                <div class="col-md-8 ">
                    <div class="all-heading">
                        <div class="col" >
                            <h2>Request for Pickup</h2>
                        </div>
                    </div>
                    <div class="col">
                        <form action="">
                            <div class="card-details">
                                <div class="card-box">
                                    <label for="fname" class="details">Full Name</label>
                                    <input type="text" placeholder="Your full name here" required/>
                                </div>
                                <div class="card-box">
                                    <label for="phone" class="details">Phone/Whatsapp</label>
                                    <input type="text" placeholder="Your number here " required/>
                                </div>
                            </div>
                            <div class="card-details">
                                <div class="card-box">
                                    <label for="email" class="details">Email</label>
                                    <input type="email"  placeholder="Your email here" required/>
                                </div>
                                <div class="card-box">
                                    <label for="address" class="details">Address</label>
                                    <input type="text"  placeholder="Your address here" required/>
                                </div>
                            </div>
                            <button type="button" >Submit</button>
                        </form>
                    </div>
                </div>
                <div class="col-md-4  form-side-image-box ">
                    <div class="form-side-image">
                        <img src={form_side_image} alt="form_side_image"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
{/*<!-------------------------------------- End Request Section------------------------------ -->*/}
        </>
    );
};

export default Pickuprequest;