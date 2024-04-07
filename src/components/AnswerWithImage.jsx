import { RiOpenaiFill } from "react-icons/ri";

const AnswerWithImage = ({ message, image, customComponent }) => {
  return (
    <>
      {message ? (
        <div className="flex items-center space-x-4">
          <div className="rounded-lg bg-green-500 w-10 h-10 flex items-center justify-center p-2">
            <RiOpenaiFill className="text-white text-2xl" />
          </div>
          {message}
        </div>
      ) : null}
      {image && (
        <div className="rounded-lg overflow-hidden py-4">
          <img src={image} />
        </div>
      )}
      {customComponent ? (
        customComponent
      ) : (
        <div className="flex items-center justify-between text-green-600 text-sm mb-4">
          <div>Add to Dashboard</div>
          <div>Export</div>
        </div>
      )}
      <div className="flex items-center justify-between space-x-4 w-full">
        <div className="text-xs text-gray-500">You might also want to know</div>
        <div className="bg-gray-500 grow h-[1px]"></div>
      </div>
    </>
  );
};

export default AnswerWithImage;
