export interface messageData {
  id: number;
  name: string;
  message: string;
}

function Message(props: { messageData: messageData }) {
  return (
    <div
      className={`p-2 bg-white shadow-md my-4 rounded max-w-[80%] dark:bg-neutral-900  ${
        props.messageData?.name === "me" ? " self-end" : "self-start"
      }`}
    >
      {props.messageData?.message}
    </div>
  );
}

export default Message;
