import React, { useState } from 'react';
import ConverterForm from './componets/ConverterForm';


// NavBar component with a language dropdown
const NavBar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="\public\8850658.png" alt="Company Logo" className="logo"/>     
        <span className="company-name">CEX Converter</span>
      </div>

      <div className="Lan-navbar">
        <select value={selectedLanguage} onChange={handleLanguageChange} className="language-dropdown">
          <option value="English">English</option>
          <option value="Spanish">Español</option>
          <option value="French">Français</option>
          <option value="German">Deutsch</option>
          <option value="Chinese">中文</option>
        </select>
        <a><span>Rate Us</span></a>
      </div>
    </nav>
  );
};

// Main App Component
function App() {
  return (
    <div className="currency-converter">
      <NavBar />
      <div className="title">
        <h1 className="converter-title">Currency Converter</h1>
        <p className="subtile">Check live foreign currency rates</p>
      </div>
      <ConverterForm/>


      <footer className="footer">
        <div className="details">
          <span className="details-link">
            <a href="About_Us.html">About Us</a>
            <a href="Contact_Us.html">Contact Us</a>
            <a href="Help_Center.html">Help Center</a>
            <a href="Feedback.html">Feedback</a>
            <a href="Legal.html">Legal</a>
            <a href="Privacy.html">Privacy</a>
            <a href="Policy.html">Policy</a>
            <a href="Disclaimer.html">Disclaimer</a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
