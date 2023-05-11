import { AiOutlineSend } from "react-icons/ai";
import { useState } from "react";
import IconButton from "../ui/common/IconButton";
import ChatsButton from "./ChatsButton";
import data from "./dataChat.json";
import { useParams } from "react-router-dom";
import Message from "./Message";
function Chat({ className }: { className?: string }) {
  const { id } = useParams();

  interface ChatData {
    id: number;
    nameChat: string;
  }
  const [message, setMessage] = useState<string>("");

  const chatData: ChatData = data.data[Number(id)];

  const [arrayMessages, setArrayMessages] = useState([
    { id: 0, name: "me", message: "Holi soy yo el usuario" },
    { id: 1, name: "alex", message: "Holi soy yo el alex" },
    { id: 2, name: "alex", message: "Que tal" },
    { id: 3, name: "me", message: "Todo bien" },
    { id: 4, name: "alex", message: "Que bueno" },
    { id: 0, name: "me", message: "Holi soy yo el usuario" },
    { id: 1, name: "alex", message: "Holi soy yo el alex" },
    { id: 2, name: "alex", message: "Que tal" },
    { id: 3, name: "me", message: "Todo bien" },
    { id: 4, name: "alex", message: "Que bueno" },
  ]);

  const sendMessage = (e: any) => {
    e.preventDefault();
    if (message === "") {
      return;
    }
    console.log("hola form");
    setArrayMessages((prevMessages) => [
      ...prevMessages,
      { id: prevMessages.length, name: "me", message: message },
    ]);
    setMessage("");
  };

  return (
    <div
      className={`h-full w-full shadow-md rounded flex flex-col justify-between bg-neutral-100 dark:bg-neutral-800  dark:text-white ${className}`}
    >
      <div className="w-full text-white px-4 py-2 bg-primary flex flex-row justify-between items-center shadow-md rounded-t">
        <h4>{chatData?.nameChat}</h4>
        <ChatsButton chats={data.data} />
      </div>
      <div className="w-full h-full overflow-y-scroll flex flex-col  p-8  ">
        {arrayMessages.map((message, index) => {
          return <Message key={index} messageData={message} />;
        })}
      </div>
      <form
        onSubmit={(e) => sendMessage(e)}
        className="p-4 gap-4 flex flex-row w-full justify-between"
      >
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escribe algo..."
          className="p-2 shadow-md w-full outline-none placeholder:opacity-90 focus:ring-1 focus:ring-primary dark:bg-neutral-900 "
        />
        <IconButton>
          <AiOutlineSend />
        </IconButton>
      </form>
    </div>
  );
}

export default Chat;
