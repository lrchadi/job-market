import React, { useState } from "react";

const initialMessages = [
  { id: 1, sender: "Yassine Ouakrim", content: "Hi, when is my interview scheduled?", time: "10:01 AM" },
  { id: 2, sender: "Admin", content: "Hello Yassine, your interview is at 10:00 AM tomorrow.", time: "10:03 AM" },
];

export default function Messages() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newMessage = {
      id: messages.length + 1,
      sender: "Admin",
      content: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages([...messages, newMessage]);
    setInput("");
  };

  return (
    <div className="p-4 md:p-8 bg-white rounded-lg shadow-md max-w-4xl mx-auto h-[80vh] flex flex-col">
      <h1 className="text-2xl font-bold mb-4">Messages</h1>
      <div className="flex-1 overflow-y-auto mb-4 border p-4 rounded bg-gray-50">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`mb-3 flex ${msg.sender === "Admin" ? "justify-end" : "justify-start"}`}
          >
            <div className={`max-w-xs p-3 rounded-lg ${msg.sender === "Admin" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-900"}`}>
              <p className="text-sm">{msg.content}</p>
              <p className="text-xs mt-1 opacity-70 text-right">{msg.time}</p>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="flex gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </form>
    </div>
  );
}
