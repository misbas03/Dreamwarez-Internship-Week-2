import { Phone } from "lucide-react";
import "./CallButton.css";

function CallButton() {
  return (
    <a href="tel:+911234567890" className="floating-btn">
      <Phone size={20} strokeWidth={2} />
    </a>
  );
}

export default CallButton;