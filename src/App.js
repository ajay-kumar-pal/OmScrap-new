import Header from "./Master/Header";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Footer from "./Master/Footer";
import Pickuprequest from "./pages/Pickuprequest";
import Whatsapp from "./Master/Whatsapp";

const App =() =>{
    return(
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
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