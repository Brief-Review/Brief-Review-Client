import { useState } from "react";
import { AiTwotoneMessage } from "react-icons/ai";
import { Link } from "react-router-dom";

interface chat {
  id: number;
  nameChat: string;
}

function ChatsButton(props: { chats: chat[] }) {
  const [openPopup, setOpenPopup] = useState<boolean>(false);

  return (
    <div className="relative">
      <button
        className="min-w-[3] h-12 shadow-md dark:bg-transparent flex items-center px-4 gap-4"
        onClick={() => setOpenPopup(!openPopup)}
      >
        <p>CHATS</p>
        <AiTwotoneMessage className="text-white w-6 h-6 " />
      </button>

      <div
        className={`absolute top-0 right-0 translate-y-16 w-80 min-h-8 rounded p-4 shadow-md bg-white cursor-default transition-all hover:scale-105 text-black select-none flex flex-col ${
          openPopup ? "block" : "hidden"
        }`}
      >
        {props.chats.map((chat: chat, index: number) => {
          return (
            <Link
              key={index}
              to={`/messages/${chat.id}`}
              className="w-full hover:bg-gray-100 rounded-sm p-2 cursor-pointer"
            >
              {chat.nameChat}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ChatsButton;
