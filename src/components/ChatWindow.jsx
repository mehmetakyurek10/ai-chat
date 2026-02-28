import React from "react";
import { useRef, useEffect } from "react";
import react from "../images/react.png";
import "../css/ChatWindow.css";

export default function ChatWindow({ messages }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <div className="title-ai">
        <img src={react} alt="React Logo" className="react-logo" />
        <h4>React AI Chat</h4>
      </div>
      <div className="messages-container">
        {messages.map((msg, key) => (
          <div
            key={key}
            style={{
              backgroundColor: msg.role === "user" ? "#d1e7ff" : "#e2e3e5",
              textAlign: msg.role === "user" ? "right" : "left",
              padding: "12px",
              margin: "8px 0",
              borderRadius: "12px",
              maxWidth: "80%",
              marginLeft: msg.role === "user" ? "auto" : "0",
            }}
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>
    </>
  );
}
