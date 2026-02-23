import "./Hero.css"
import heroImg from "../../assets/hero.jpg";

function Hero(){

        return (
            <section className="hero" 
            style={{backgroundImage: `url(${heroImg})`}}>

            <div className="overlay"></div>

        <div className="hero-content">
        <p className="subtitle">THE ALL-NEW</p>
        <h1>X3</h1>
        <p className="price">Price starting at ₹ 74,50,000.</p>
        <button className="hero-btn">Know more</button>
      </div>
         </section>
        )
    }
export default Hero;