import { VscSend } from "react-icons/vsc";
import { data } from "../utils/data";

export function Options({ activeQuery, handleSubmit }) {
  return (
    <div className="grid grid-cols-2 gap-4 pb-16">
      {data?.map((item) => (
        <div
          onClick={() => handleSubmit(item.message, item?.id)}
          className={`relative group border border-gray-300 rounded-xl p-6 ${
            item?.id === activeQuery
              ? "bg-gray-50 text-gray-600 cursor-pointer"
              : "text-gray-400 cursor-default"
          } hover:bg-blue-50 transition-all`}
          key={item?.id}
        >
          {item?.message}
          <div className="hidden absolute right-8 top-0 group-hover:flex items-center h-full">
            <VscSend className="text-green-500 text-xl" />
          </div>
        </div>
      ))}
    </div>
  );
}
