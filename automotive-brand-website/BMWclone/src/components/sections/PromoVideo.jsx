import "./PromoVideo.css";
import promoVideo from "../../assets/bmw-video.mp4";

function PromoVideo() {
  return (
    <section className="promo-video">
      <video
        className="promo-bg"
        src={promoVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="promo-overlay"></div>

      <div className="promo-content">
        <p className="small-text">THE NEW</p>
        <h1 className="big-number">2</h1>
        <h3 className="tagline">LEAVE BORING BEHIND.</h3>
        <p className="desc">
          Drive Your Match at a special EMI of ₹29,999*.
        </p>
        <button className="blue-btn">Skip Boring</button>
      </div>
    </section>
  );
}

export default PromoVideo;