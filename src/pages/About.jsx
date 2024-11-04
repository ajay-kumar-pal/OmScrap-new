import './About.css';
import { mobile_no } from '../Master/Header';


const About = () => {
    return(
        <>
            <section id="aboutsection">
                We are working on this.<br/>
                Feel free to call us. <br/><br/><br/>
                Thankyou<br/>
                Om Scrap Team.<br/>
                Contact Person : Mr Vinod <br/>
                Mobile no. {mobile_no}

            </section>
        </>
    );
};

export default About;