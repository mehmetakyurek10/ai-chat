import React, { useState } from "react";

export default function ChatInput({ onSendMsg }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    onSendMsg(input);
    setInput("");
  };
  return (
    <>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSend}>Gönder</button>
      </div>
    </>
  );
}
