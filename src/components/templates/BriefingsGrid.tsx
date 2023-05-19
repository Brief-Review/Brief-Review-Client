import React from "react";
import { BriefingsProps } from "../../models/commons/Briefings.model";
import BriefingCard from "../../components/cards/BriefingCard";

interface BriefingsGridProps {
  briefings: BriefingsProps[];
  children?: React.ReactNode;
}

const BriefingsGrid: React.FC<BriefingsGridProps> = ({ briefings }) => {
  const availableBriefings = briefings.filter((briefing) => briefing.available);
  const pendingBriefings = briefings.filter((briefing) => !briefing.available);

  return (
    <div className="col-span-12 row-span-4 row-start-2 row-end-6 lg:row-span-5 lg:row-start-2 overflow-y-scroll p-4">
      <h2 className="dark:text-white mb-5">Briefings disponibles</h2>
      {availableBriefings.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3" id="briefings-section-available">
          {availableBriefings.map((briefing, index) => (
            <BriefingCard key={index} briefing={briefing} />
          ))}
        </div>
      ) : (
        <p>No hay briefings disponibles.</p>
      )}

      <h2 className="dark:text-white mt-5 mb-5">Briefings pendientes</h2>
      {pendingBriefings.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3" id="briefings-section-pending">
          {pendingBriefings.map((briefing, index) => (
            <BriefingCard key={index} briefing={briefing} />
          ))}
        </div>
      ) : (
        <p>No pending briefings.</p>
      )}
    </div>
  );
};

export default BriefingsGrid;
