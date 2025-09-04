import React, { useState } from "react";
import { RiRobot2Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]); 
  const [inputValue, setInputValue] = useState(""); 
  const [isLoading, setIsLoading] = useState(false); 

  // Function to send user message to the API
  const sendMessage = async () => {
    if (!inputValue.trim()) return; 

    // Add user message to chat history
    const userMessage = { sender: "user", text: inputValue };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue(""); 

    setIsLoading(true); 

    try {
      const response = await fetch("https://api.your-service.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`, // Simpan API key di .env
        },
        body: JSON.stringify({ message: inputValue }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API Error: ${response.status} ${response.statusText} - ${errorText}`);
      }

      const data = await response.json(); 
      const botMessage = { sender: "bot", text: data.reply || "I couldn't understand that." };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error fetching API:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: "An error occurred. Please try again later." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="w-[16rem] h-[4rem] bg-gradient-to-r from-[#FF0000] to-[#950101] fixed bottom-6 right-6 rounded-xl shadow-lg flex items-center justify-center gap-2 text-white font-semibold text-[1.2rem]"
      >
        <RiRobot2Fill size={42} />
        Virtual Assistant
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-[#020301] bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#020301] w-[28rem] h-[38rem] rounded-2xl shadow-xl flex flex-col overflow-hidden">
            <div className="bg-gradient-to-r from-[#FF0000] to-[#950101] text-white flex justify-between items-center px-4 py-3">
              <h2 className="text-lg font-semibold">AI Virtual Assistant</h2>
              <button onClick={() => setIsOpen(false)}>
                <AiOutlineClose size={24} />
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto">
              {messages.length === 0 && (
                <p className="text-gray-500">Hello! How can I assist you today?</p>
              )}
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex flex-col mb-4 ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`rounded-lg p-3 max-w-[70%] ${
                      msg.sender === "user"
                        ? "bg-red-600 text-white"
                        : "bg-gray-200 text-black"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-center my-2">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-red-600"></div>
                </div>
              )}
            </div>

            <div className="p-3 border-t flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Type a message..."
              />
              <button
                onClick={sendMessage}
                className="ml-2 bg-red-600 text-white px-4 py-2 rounded-lg"
                disabled={isLoading}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
