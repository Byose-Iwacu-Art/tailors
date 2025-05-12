"use client";

import { useEffect, useState } from "react";

const ContactUs = () => {
  const [isChatVisible, setIsChatVisible] = useState(false); // Start with chat hidden
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [typing, setTyping] = useState(false);
  const [chatHistory, setChatHistory] = useState<string[]>([]);
  const [responseMessage, setResponseMessage] = useState("");

  // Function to handle sending a message via the contact form
  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form submission

    if (name.trim() && email.trim() && message.trim()) {
      // Send message to the backend
      try {
        const response = await fetch("http://localhost:5000/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        });

        const data = await response.json();

        if (response.ok) {
          setResponseMessage("Message sent successfully!");
          setChatHistory((prev) => [...prev, `You: ${message}`]);
          setMessage("");
          setName("");
          setEmail("");
        } else {
          setResponseMessage(data.message || "An error occurred.");
        }
      } catch (error) {
        setResponseMessage("An error occurred while sending the message.");
      }
      setTyping(false);
    }
  };

  // Effect to simulate typing indicator
  useEffect(() => {
    if (typing) {
      const timer = setTimeout(() => {
        setTyping(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [typing]);

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    setTyping(true);
  };

  const handleChatInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
    setTyping(true);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // Function to toggle chat visibility
  const toggleChat = () => {
    setIsChatVisible((prev) => !prev);
  };

  // Function to handle sending chat messages (optional)
  const handleSendChatMessage = () => {
    if (message.trim()) {
      setChatHistory((prev) => [...prev, `You: ${message}`]);
      setMessage("");
      setTyping(false);
    }
  };

  return (
    <div className="w-full bg-gray-100 py-12 flex flex-col items-center">
      <h2 className="text-2xl font-semibold text-center mb-10 text-gray-800">Contact Us</h2>

      <div className="max-w-[90%] w-full grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-10">
        {/* Contact Information */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-4/5 mx-auto">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Get in Touch</h3>
          <div className="flex items-center mb-4">
            <i className="bi bi-geo-alt text-3xl text-gray-600 mr-3" />
            <p className="text-gray-700">Giporoso Market Place, SAR Motor, Kigali</p>
          </div>
          <div className="flex items-center mb-4">
            <i className="bi bi-telephone text-3xl text-gray-600 mr-3" />
            <p className="text-gray-700">+250 788 282 252</p>
          </div>
          <div className="flex items-center mb-4">
            <i className="bi bi-envelope text-3xl text-gray-600 mr-3" />
            <p className="text-gray-700">info@biafricantouch.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-4/5 mx-auto">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Send a Message</h3>
          <form className="flex flex-col space-y-4" onSubmit={handleSendMessage}>
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg px-3 py-2 outline-none"
              value={name}
              onChange={handleNameChange}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg px-3 py-2 outline-none"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <textarea
              placeholder="Your Message"
              className="border border-gray-300 rounded-lg px-3 py-2 h-24 outline-none"
              value={message}
              onChange={handleMessageChange} // This is correct for the textarea
              required
            />
            <button type="submit" className="bg-orange-600 text-white rounded-lg px-4 py-2">
              Send Message
            </button>
            {responseMessage && (
              <p className="text-green-600">{responseMessage}</p>
            )}
          </form>
        </div>
      </div>

      {/* Live Chat Button */}
      <div className="fixed bottom-5 right-5 z-50">
        {!isChatVisible ? (
          <button 
            onClick={toggleChat}
            className="bg-sky-600 text-white rounded-lg px-4 py-2 flex items-center"
          >
            <i className="bi bi-chat text-lg mr-2"></i>
            Chat with Us!
          </button>
        ) : (
          <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-4">
            <div className="bg-sky-700 bg-opacity-80 text-white rounded-t-lg py-3 px-4 text-lg text-center font-semibold flex justify-between items-center">
              <span>Live Chat</span>
              <button onClick={toggleChat} className="text-white">
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <div className="h-[50vh] overflow-y-auto my-2 border border-gray-300 rounded-md p-2">
              {chatHistory.map((msg, index) => (
                <p key={index} className="text-sky-900 mb-1">{msg}</p>
              ))}
              {typing && (
                <div className="flex items-center mb-1 text-xs">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse mr-1"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse mr-1"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-400 ml-2">Typing...</span>
                </div>
              )}
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={handleChatInputChange} // Use a different handler for chat input
                className="border border-gray-200 rounded-l-lg p-2 flex-1 outline-none text-md"
              />
              <button 
                className="bg-orange-600 text-white rounded-r-lg px-4"
                onClick={handleSendChatMessage} // Call the chat send function
              >
                <i className="bi bi-send"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
