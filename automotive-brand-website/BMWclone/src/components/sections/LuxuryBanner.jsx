import "./LuxuryBanner.css"
import luxuryImg from "../../assets/luxury.jpg"

function LuxuryBanner(){
    return(
        <section className="luxury-banner">
            <img src={luxuryImg} alt="BMW 7 Range" className="luxury-img" />
            <div className="luxury-overlay"></div>
            <div className="luxury-content">
                <h2>LUXURY. FAST. FORWARD.</h2>
                <p className="sub">THE BMW 7 RANGE.</p>
                <button className="outline-btn">Discover now</button>
            </div>
        </section>
    )
}

export default LuxuryBanner;