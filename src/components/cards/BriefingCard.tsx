import React from "react";
import { BriefingsProps } from "../../models/commons/Briefings.model.tsx";

interface BriefingCardProps {
  briefing: BriefingsProps;
  onClick?: () => void;
}

const BriefingCard: React.FC<BriefingCardProps> = ({ briefing, onClick }) => {
  return (
    <div
      className="briefing-card w-full flex justify-between bg-white shadow-lg rounded-lg p-4 dark:bg-neutral-800 dark:text-white hover:transition ease-in-out delay-150 duration-150 hover:scale-[1.03] hover:outline hover:outline-2 hover:outline-cyan-800"
      onClick={onClick}
    >
      <h3 className="text-md font-medium">{briefing.description}</h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        id="diagonal-left-up-arrow"
        className="click-icon transform rotate-90 scaleX(-1) w-6 fill-cyan-800"
      >
        <g data-name="Layer 2">
          <g data-name="diagonal-arrow-left-up">
            <rect width="24" height="24" opacity="0"></rect>
            <path d="M17.71 16.29L9.42 8H15a1 1 0 0 0 0-2H7.05a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1H7a1 1 0 0 0 1-1V9.45l8.26 8.26a1 1 0 0 0 1.42 0 1 1 0 0 0 .03-1.42z"></path>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default BriefingCard;
