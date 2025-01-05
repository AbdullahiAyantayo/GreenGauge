import React, { useState } from "react";
import Header from "./components/Header";
import ChatAssistant from "./components/ChatAssistant";
import InsightsDashboard from "./components/InsightsDashboard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const openChat = () => setIsChatOpen(true);
  const closeChat = () => setIsChatOpen(false);

  return (
    <div className="App">
      <Header openChat={openChat} />
      <main>
        <section id="insights-dashboard">
          <InsightsDashboard />
        </section>
        {isChatOpen && (
          <div className="chat-modal">
            <ChatAssistant closeChat={closeChat} />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
