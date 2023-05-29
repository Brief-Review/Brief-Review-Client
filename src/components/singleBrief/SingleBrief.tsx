import { TfiArrowTopRight } from "react-icons/tfi";
import Button from "../ui/common/Button";
import { BriefData } from "../../models/briefs/Brief.model";
import { useParams } from "react-router-dom";
import { TestBriefs } from "../../views/brief/TestData";

function SingleBrief({ className }: { className?: string }) {
  const { id } = useParams();

  const brief: BriefData = TestBriefs[parseInt(id ?? "")];

  return (
    <div className={`w-full flex flex-col dark:text-white ${className}`}>
      <div className="w-full py-4">
        <h2>{brief.Title}</h2>
      </div>
      <div className="grid md:grid-cols-6  gap-4 ">
        <div className=" flex flex-col col-span-6 md:col-span-4  shadow-md bg-white rounded p-4 gap-4 dark:bg-neutral-900">
          <h2>Descripción:</h2>
          <p>{brief.Description}</p>
          <h2>Requisitos:</h2>
          <ul>
            <li>Objetivo 1</li>
            <li>Objetivo 2</li>
            <li>Objetivo 3</li>
            <li>Objetivo 4</li>
          </ul>
          <h2>Recursos:</h2>
          <div className="flex gap-4">
            <div className="shadow-md w-full md:w-[30%] p-4 aspect-video  rounded relative dark:bg-neutral-800">
              <div className="absolute top-[-0.5rem] w-8 h-8 right-[-0.5rem] aspect-square rounded-full border flex items-center justify-center border-primary hover:scale-105 active:scale-100 transition-all cursor-pointer">
                <TfiArrowTopRight className="w-4 h-4 text-primary  " />
              </div>
            </div>
            <div className="shadow-md w-full md:w-[30%] p-4 aspect-video  rounded relative dark:bg-neutral-800">
              <div className="absolute top-[-0.5rem] w-8 h-8 right-[-0.5rem] aspect-square rounded-full border flex items-center justify-center border-primary hover:scale-105 active:scale-100 transition-all cursor-pointer">
                <TfiArrowTopRight className="w-4 h-4 text-primary  " />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6 md:col-span-2 p-4 shadow-md rounded flex flex-col justify-between gap-4 dark:bg-neutral-900">
          <div className=" w-full aspect-video  bg-neutral-600"></div>
          <div className="flex flex-col gap-4">
            <Button>Text white</Button>
            <Button>Text white</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBrief;
