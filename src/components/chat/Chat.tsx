import { AiOutlineSend, AiTwotoneMessage } from "react-icons/ai";
import IconButton from "../ui/common/IconButton";
import ChatsButton from "./ChatsButton";

function Chat({ className }: { className?: string }) {
  return (
    <div className={`h-full w-full shadow-md rounded flex flex-col justify-between ${className}`}>
      <div className="w-full text-white px-4 py-2 bg-primary flex flex-row justify-between items-center shadow-md rounded-t">
        <h4>Grupo mentorias con Anna</h4>
        <ChatsButton/>
      </div>
      <div className="w-full p-8">Mensajes</div>
      <div className="p-4 gap-4 flex flex-row w-full justify-between">
        <input type="text" placeholder="Escribe algo" className="p-2 shadow-md w-full opacity-60" />
        <IconButton>
          <AiOutlineSend />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
