import { mobile_no } from '../Master/Header';
import { mobile_no_2 } from '../Master/Header';
import './Contact.css';
import contactus from '../image/logo/contact-us.jpg';
const Contact = () => {
    return(
        <section id="contactus">
            <div class="contactusimg">
                <img src={contactus} alt="contactus"/>
                <h1>Feel free to contact us.</h1>
            </div>
            <div class="contactperson-wrapper">
                <div class="contactperson">
                    <div class="left-contactperson contactus-left-right">
                        <div>
                            <i class="fa-solid fa-phone phoneicon"></i>
                            <h3>Mr. Vinod</h3>
                            <a>{ mobile_no }</a>
                        </div>
                    </div>
                    <div class="right-contactperson contactus-left-right">
                        <div>
                            <i class="fa-solid fa-phone phoneicon"></i>
                            <h3>Mr. Vinay</h3>
                            <a>{ mobile_no_2 }</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contactus-wrapper">
                <div class="contactus-location-container">
                    <div class="contactus-location">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d437.86273684256054!2d77.07094464304754!3d28.602719799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b319d64e475%3A0xfc07785856b5cfa1!2sOm%20scrap%20Store%20(kabadiwala)!5e0!3m2!1sen!2sin!4v1673383812770!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div class="contactus-address">
                        <h3>Address</h3>
                        <p>Rz C2/254, Street No-6,<br/>
                            Mahavir Enclave Part -1,<br/>
                            Near power house,<br/>
                            New Delhi - 110045.<br/>
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Contact;