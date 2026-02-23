import "./SpecialOffer.css";
import offerImg from "../../assets/offer.jpg"; // put your image here

function SpecialOffers() {
  return (
    <section className="special-offers">
      <div className="offers-container">

        <div className="offers-image">
          <img src={offerImg} alt="BMW Special Offers" />
        </div>

        <div className="offers-content">
          <h2>BMW Special Offers.</h2>
          <p className="offers-desc">
            Monthly EMI starting from Rs.29,999/Month*. Check Out similar BMW
            finance offers available across the BMW range.
          </p>

          <a href="#" className="offers-link">
            Know more <span className="arrow">›</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default SpecialOffers;