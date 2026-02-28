import Sidebar from "./components/Sidebar";
import ChatInput from "./components/ChatInput";
import ChatWindow from "./components/ChatWindow";
import { useState } from "react";
import axios from "axios";

function App() {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY.trim();

  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Merhaba! Sana nasıl yardımcı olabilirim",
    },
  ]);

  const handleSendMsg = async (text) => {
    if (text.trim() === "") return;
    setMessages([...messages, { role: "user", text: text }]);

    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
      const response = await axios.post(
        url,
        { contents: [{ parts: [{ text: text }] }] },
        { headers: { "Content-Type": "application/json" } },
      );
      const aiText = response.data.candidates[0].content.parts[0].text;
      setMessages((prevMsg) => [
        ...prevMsg,
        {
          role: "ai",
          text: aiText,
        },
      ]);
    } catch (error) {
      console.error("API Hatası:", error);
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ width: "250px", backgroundColor: "#f0f0f0" }}>
        <Sidebar />
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ flex: 1, overflowY: "auto", padding: "20px" }}>
          <ChatWindow messages={messages} />
        </div>
        <ChatInput onSendMsg={handleSendMsg} />
      </div>
    </div>
  );
}

export default App;
