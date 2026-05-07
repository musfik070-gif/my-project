import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Products from "./components/Products";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  // ✅ FIX: cart state moved here from Products.jsx
  const [cart, setCart] = useState([]);

  return (
    <>
      {/* ✅ FIX: cartCount passed to Navbar so it can show the badge */}
      <Navbar cartCount={cart.length} />
      <Hero />
      <Stats />
      {/* ✅ FIX: cart and setCart passed as props to Products */}
      <Products cart={cart} setCart={setCart} />
      <Steps />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
