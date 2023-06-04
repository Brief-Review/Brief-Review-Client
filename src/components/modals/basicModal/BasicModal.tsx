import * as React from "react";
import * as ReactDOM from "react-dom";
import { AiFillCloseSquare, AiOutlineClose, AiOutlineCloseCircle, AiOutlineSetting } from "react-icons/ai";

interface BasicModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

const BasicModal: React.FC<BasicModalProps> = ({
  children,
  isOpen,
  closeModal,
}) => {
  const handleModalContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return ReactDOM.createPortal(
    <article
      className={`fixed z-50 top-0 left-0 w-full min-h-screen bg-black bg-opacity-75 flex justify-center items-center ${
        isOpen ? "flex" : "hidden"
      }`}
      onClick={closeModal}
    >
      <div
        className="relative min-w-[320px] max-w-[480px] min-h-[200px] max-h-[600px] overflow-y-auto bg-white rounded shadow-md"
        onClick={handleModalContainerClick}
      >
        <button className="absolute right-0 m-4" onClick={closeModal}><AiOutlineClose/></button>
        {children}
      </div>
    </article>,
    document.getElementById("modal")!
  );
};

export default BasicModal;
