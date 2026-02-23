import NavBar from "./components/layout/NavBar"
import Hero from "./components/sections/Hero";
import FindBMW from "./components/sections/FindBMW"
import PromoVideo from "./components/sections/PromoVideo";
import LuxuryBanner from "./components/sections/LuxuryBanner";
import X1Banner from "./components/sections/X1Banner";
import SpecialOffer from "./components/sections/SpecialOffer";
import Footer from "./components/layout/Footer"
import CallButton from "./components/ui/CallButton";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <FindBMW />
      <PromoVideo />
      <LuxuryBanner />
      <X1Banner />
      <SpecialOffer />
      <Footer />
      <CallButton />
    </>
  )
}

export default App;