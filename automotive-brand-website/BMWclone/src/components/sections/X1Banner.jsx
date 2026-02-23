import "./X1Banner.css"
import x1Img from "../../assets/X1.jpg"

function X1Banner () {
    return (
        <section className="x1-banner">
            <img src={x1Img} alt="BMW 7 Range" className="x1-img"></img>
            <div className="x1-overlay"></div>

            <div className="x1-content">
                <p className="x1-p1">THE</p>
                <h2 className="x1-h2">iX1</h2>
                <p className="x1-p">LONG WHEELBASE</p>
                <p className="x1-p">DOMINATE EVERYDAY. YOUR WAY.</p>
                <button className="x1-btn">Discover Now</button>
            </div>
        </section>
    );
}

export default X1Banner;