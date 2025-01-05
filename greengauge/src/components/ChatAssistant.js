import React, { useState } from "react";
import "./ChatAssistant.css";

function ChatAssistant({ closeChat }) {
  const [query, setQuery] = useState("");
  const [responses, setResponses] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const response = `AI's recommendation: Based on your query '${query}', consider wind investments for the highest ROI in the next 5 years.`;
    setResponses([...responses, { user: query, bot: response }]);
    setQuery("");
  };

  return (
    <div className="chat-assistant">
      <button className="close-btn" onClick={closeChat}>✖</button>
      <h2>AI Investment Advisor</h2>
      <div className="chat-box">
        {responses.map((res, index) => (
          <div key={index} className="chat-message">
            <p><strong>You:</strong> {res.user}</p>
            <p><strong>AI:</strong> {res.bot}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask about clean energy investments..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatAssistant;
