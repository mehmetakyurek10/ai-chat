import React, { useState } from "react";
import "../css/ChatInput.css";

export default function ChatInput({ onSendMsg }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    onSendMsg(input);
    setInput("");
  };
  return (
    <>
      <div className="input-div">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Herhangi bir şey sor"
        />
        <button onClick={handleSend}>Gönder</button>
      </div>
    </>
  );
}
