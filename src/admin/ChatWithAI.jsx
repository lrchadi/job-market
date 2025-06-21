import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function ChatWithAI() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello Admin! How can I assist you today?" },
  ]);

  const handleSend = () => {
    if (input.trim() === "") return;

    const newMessages = [
      ...messages,
      { sender: "admin", text: input },
      { sender: "ai", text: "(Demo) I'm here to help!" },
    ];
    setMessages(newMessages);
    setInput("");
  };

  return (
    <div className="w-full max-w-xl bg-white rounded-lg shadow p-4 flex flex-col h-[90vh]">
      <div className="text-xl font-bold mb-4">Chat with AI Assistant</div>
      <div className="flex-1 overflow-y-auto mb-4 space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-[70%] px-4 py-2 rounded-lg text-sm ${
              msg.sender === "ai"
                ? "bg-gray-100 text-gray-800 self-start"
                : "bg-blue-600 text-white self-end"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex items-center border-t pt-2">
        <input
          type="text"
          className="flex-1 border rounded px-4 py-2 text-sm mr-2"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
}
