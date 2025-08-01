import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Products from "./Components/Products/Products";
import TopProducts from "./Components/TopProducts/TopProducts";
import Subscribe from "./Components/Subscribe/Subscribe";
import Testimonials from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";
// import AuthForm from "./AuthForm";
// import Header from "./Components/Header/Header";
// import CartModel from "./Components/CartModel";
// import { CartProvider } from './CartContext';



function App() {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () =>{
    setOrderPopup(!orderPopup);
  };
  useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    });
    AOS.refresh();
  },[]);
  return (
    <>
     <div className="bg-white dark:bg-gray-900  dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup}/>
      <Subscribe />
      <Testimonials />
      <Footer/>
      {/* <Header/> */}
      {/* <CartModel/> */}
      {/* <CartContext/> */}
      {/* <AuthForm/> */}
     </div>
     
    </>
  )
}

export default App;




