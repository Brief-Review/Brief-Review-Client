import SingleBrief from "../../components/singleBrief/SingleBrief";
import Header from "../../components/ui/header/Header";
import Navbar from "../../components/ui/navbar/Navbar";
import { BriefData } from "../../models/briefs/Brief.model";

function Brief() {
  return (
    <div className="w-full h-screen px-[10%] py-8 grid grid-cols-12 grid-rows-6 gap-4">
      <Header className="col-span-12 row-span-1 place-self-center lg:col-span-11 " />
      <Navbar className="col-span-12 row-span-1 place-self-center row-start-6 max-h-12 lg:max-h-[100%] lg:col-span-1 lg:row-start-1 lg:row-end-7 " />
      <SingleBrief className="col-span-12 row-span-4 row-start-2 row-end-6 lg:row-span-5 lg:row-start-2 overflow-y-scroll scrollbar-thin scrollbar scrollbar-thumb-primary md:overflow-hidden  pb-4" />
    </div>
  );
}

export default Brief;
