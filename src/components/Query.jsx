import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";

const Query = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <div>
      <div className="flex items-center justify-between space-x-4 w-full">
        <div className="text-xs text-gray-500">Query</div>
        <div className="bg-gray-500 grow h-[1px]"></div>
        <FaChevronUp
          onClick={() => setIsExpanded((prev) => !prev)}
          className={`text-gray-500 ${!isExpanded ? "rotate-180" : ""}`}
        />
      </div>
      {isExpanded ? (
        <div className="rounded-lg overflow-hidden py-4">
          <img className="rounded-lg" src="query.png" />
        </div>
      ) : null}
    </div>
  );
};

export default Query;
