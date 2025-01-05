import React from "react";
import "./Header.css";

function Header({ openChat }) {
  return (
    <header className="header">
      <h1>GreenGauge AI</h1>
      <nav>
        <button onClick={openChat}>AI Assistant</button>
        <a href="#insights-dashboard">Insights</a>
      </nav>
    </header>
  );
}

export default Header;
