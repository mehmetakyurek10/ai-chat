import React from "react";
import { useRef, useEffect } from "react";

export default function ChatWindow({ messages }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <div>
        {messages.map((msg, key) => (
          <div
            key={key}
            style={{
              backgroundColor: msg.role === "user" ? "lightblue" : "lightgray",
              textAlign: msg.role === "user" ? "right" : "left",
              padding: "10px",
              margin: "5px",
              borderRadius: "8px",
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
