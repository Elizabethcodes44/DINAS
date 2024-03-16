import { Routes, Route, Link } from "react-router-dom";
import HomeContent from "./Components/HomeContent";
import AboutUsContent from "./Components/AboutUsContent.jsx";
import ContactUsContent from "./Components/ContactUsContent";
import logo from "../assets/logo.jpg";
import "./App.css";

function App() {
  return (
    <>
    <div className = "app_container">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/about" element={<AboutUsContent />} />
        <Route path="/contact" element={<ContactUsContent />} />
      </Routes>
      </div>
      </>
  );
}

export default App;
