import Sidebar from "./components/Sidebar";
import ChatInput from "./components/ChatInput";
import ChatWindow from "./components/ChatWindow";
import { useState } from "react";

function App() {
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Merhaba! Sana nasıl yardımcı olabilirim",
    },
    {
      role: "user",
      text: "React öğreniyorum",
    },
  ]);

  const handleSendMsg = (text) => {
    if (text.trim() === "") return;
    setMessages([...messages, { role: "user", text: text }]);
    setTimeout(() => {
      setMessages((prevMessage) => [
        ...prevMessage,
        {
          role: "ai",
          text: "Bu harika bir soru! Sana nasıl yardım edebilirim?",
        },
      ]);
    }, 1500);
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
