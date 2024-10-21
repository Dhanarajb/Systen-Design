// src/Chat.js
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000");

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    socket.on("receiveMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  const sendMessage = () => {
    if (input) {
      socket.emit("sendMessage", input);
      setInput("");
    }
  };

  return (
    <div>
      <h1>Real-Time Chat</h1>
      <div
        style={{
          height: "400px",
          overflowY: "scroll",
          border: "1px solid black",
          marginBottom: "10px",
        }}
      >
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
