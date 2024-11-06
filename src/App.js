import Header from "./Master/Header";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Ratecard from "./RateList/Ratecard";
import Ironitems from "./RateList/Ironitems";
import Plasticitems from './RateList/Plasticitems';
import Metalitems from './RateList/Metalitems';
import Electronicitems from './RateList/Electronicitems';
import Glassitems from './RateList/Glassitems';
import Wooditems from './RateList/Wooditems';
import Footer from "./Master/Footer";
import Pickuprequest from "./pages/Pickuprequest";
import Whatsapp from "./Master/Whatsapp";
import Paperitems from "./RateList/Paperitems";
import Vehicleitems from "./RateList/Vehicleitems";

const App =() =>{
    return(
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}>
                    
                </Route>
                <Route path="ratecard" element={<Ratecard/>}>
                    <Route path="ironitems" element={<Ironitems/>}/>
                    <Route path="plasticitem" element={<Plasticitems/>}/>
                    <Route path="metalitem" element={<Metalitems/>}/>
                    <Route path="electronicitem" element={<Electronicitems/>}/>
                    <Route path="glassitem" element={<Glassitems/>}/>
                    <Route path="wooditem" element={<Wooditems/>}/>
                    <Route path="paperitem" element={<Paperitems/>}/>
                    <Route path="vehicleitem" element={<Vehicleitems/>}/>
                </Route>
                <Route path="pickuprequest" element={<Pickuprequest/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="contact" element={<Contact/>}/>
                
            </Routes>
            <Whatsapp/>
            <Footer/>   
            
        </>
    );
};

export default App;