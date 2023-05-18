import BriefingsGrid from "../../components/templates/BriefingsGrid";
import BriefingCard from "../../components/cards/BriefingCard";
import { BriefingsProps } from "../../models/commons/Briefings.model";
import Header from "../../components/ui/header/Header";
import Navbar from "../../components/ui/navbar/Navbar";

function Briefings() {
  const briefings: BriefingsProps[] = [
    {
      description: "Briefing Title 1",
      available: true,
      title: "Real Title 1",
    },{
      description: "Briefing Title 1",
      available: true,
      title: "Real Title 1",
    },{
      description: "Briefing Title 1",
      available: true,
      title: "Real Title 1",
    },{
      description: "Briefing Title 1",
      available: true,
      title: "Real Title 1",
    },{
      description: "Briefing Title 1",
      available: true,
      title: "Real Title 1",
    },{
      description: "Briefing Title 1",
      available: true,
      title: "Real Title 1",
    },
    {
      description: "Briefing Title 2",
      available: false,
      title: "Real Title 2",
    },
    {
      description: "Briefing Title 2",
      available: false,
      title: "Real Title 2",
    },
    {
      description: "Briefing Title 2",
      available: false,
      title: "Real Title 2",
    },
  ];

  return (
    <div className="w-full h-screen py-8 grid grid-cols-12 grid-rows-6 gap-4">
      <Header className="col-span-12 row-span-1 place-self-center lg:col-span-11 " />
      <Navbar className="col-span-12 row-span-1 place-self-center row-start-6 max-h-12 lg:max-h-[100%] lg:col-span-1 lg:row-start-1 lg:row-end-7 " />
    <BriefingsGrid briefings={briefings}>
      {briefings.map((briefing, index) => (
        <BriefingCard key={index} briefing={briefing} />
      ))}
    </BriefingsGrid>
    </div>
  );
}

export default Briefings;
