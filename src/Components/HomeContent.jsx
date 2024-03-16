// HomeContent.js
import image from "../../assets/dinas.jpg";
import image2 from "../../assets/dinas2.jpg";
import "./home.css"; // Style as needed

function HomeContent() {
  return (
    <div className="imagetextfooter">
      <div className="images">
        <img src={image} alt="lady" />
        <img src={image2} alt="cream" />
      </div>
    </div>
  );
}

export default HomeContent;
