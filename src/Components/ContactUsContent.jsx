// ContactUsContent.js
import facebook from "../../assets/facebook.jpg";
import tiktok from "../../assets/tiktok.jpg";
import instagram from "../../assets/instagram.jpg";

import "./contactus.css"; // Style as needed

function ContactUsContent() {
  return (
    <div className="imagetextfooter">
      <div className="footer">
        <h2>MEET US ON SOCIAL MEDIA</h2>
        <a href="https://www.facebook.com/dinas.face.cream?mibextid=ZbWKwL">
          <img src={facebook} className="facebook_icon" alt="Facebook" />
        </a>
        <a href="https://tiktok.com/@dinas_face_cream">
          <img src={tiktok} className="tiktok_icon" alt="TikTok" />
        </a>
        <a href="https://instagram.com/dinas_face_cream">
          <img src={instagram} className="instagram_icon" alt="Instagram" />
        </a>
      </div>
    </div>
  );
}

export default ContactUsContent;
