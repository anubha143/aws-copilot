import { useState } from "react";
import "../App.css";
import ChatMessage from "../components/ChatMessage";
import { VscSend } from "react-icons/vsc";
import { FaCode } from "react-icons/fa6";
import { Options } from "../components/Options";
import { data } from "../utils/data";

const Home = () => {
  const [query, setQuery] = useState("");
  const [chatlog, setChatlog] = useState([]);
  const [activeQuery, setActiveQuery] = useState(1);

  const handleForm = (e) => {
    e.preventDefault();
    setQuery("");
    setChatlog((prev) => [
      ...prev,
      { user: "me", message: e.target.query.value },
      { user: "gpt", message: ["I am not sure about that"] },
    ]);
  };

  const handleSubmit = async (message, id) => {
    setQuery("");
    setActiveQuery(++id);
    setChatlog((prev) => [...prev, { user: "me", message: `${message}` }]);
    //fetch data from data array
    const found = data.find((item) => item.message === message);
    if (found) {
      for (let i = 0; i < found.answer.length; i++) {
        await new Promise((r) => setTimeout(r, 800));
        setChatlog((prev) => [
          ...prev,
          {
            user: "gpt",
            message: found.answer[i],
            nodata: found.nodata,
          },
        ]);
      }
    } else {
      setChatlog((prev) => [
        ...prev,
        { user: "gpt", message: "I am not sure about that" },
      ]);
    }
  };
  return (
    <div className="bg-gray-100 max-w-screen py-8 min-h-screen">
      <section className="container mx-auto relative h-full w-full">
        <div className="w-full">
          <div className="mb-20">
            {chatlog?.map((message, index) => (
              <ChatMessage
                isLast={index === chatlog.length - 1}
                handleSubmit={handleSubmit}
                activeQuery={activeQuery}
                key={index}
                message={message}
              />
            ))}
          </div>
        </div>
        <div className="fixed left-0 bottom-0 w-full">
          {chatlog.length ? (
            <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-gray-100 to-gray-500 opacity-40"></div>
          ) : null}
          <div className="container mx-auto mb-4 relative z-10">
            {chatlog.length === 0 ? (
              <Options activeQuery={activeQuery} handleSubmit={handleSubmit} />
            ) : null}
            <form onSubmit={handleForm} className="relative">
              <input
                name="query"
                rows="1"
                className="chat-input-textarea"
                placeholder="Start typing you query here..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <div className="absolute right-8 top-0 flex items-center space-x-4 h-full">
                <FaCode className="text-gray-500 text-xl" />
                <VscSend className="text-gray-500 text-xl" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
