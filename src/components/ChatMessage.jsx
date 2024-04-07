import { useEffect, useState } from "react";
import "../App.css";
import { Options } from "./Options";
import { FaUserAlt } from "react-icons/fa";

const ChatMessage = ({ message, isLast, handleSubmit, activeQuery }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (isLast) {
      setTimeout(() => setIsReady(true), 1000);
    }
  }, []);

  return (
    <div
      className={`chat-message ${
        message.user === "gpt" ? "chatgpt bg-gray-50" : "bg-blue-50"
      }`}
    >
      <div className="message grow">
        {message.user === "gpt" ? (
          <>
            {message.message}
            {isLast && isReady ? (
              <div className="mt-8">
                <Options
                  activeQuery={activeQuery}
                  handleSubmit={handleSubmit}
                />{" "}
              </div>
            ) : null}
          </>
        ) : (
          <div className="flex items-center space-x-4">
            <div className={`avatar ${message.user === "gpt" && "chatgpt"}`}>
              <FaUserAlt className="text-2xl text-white" />
            </div>
            <p>{message.message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
