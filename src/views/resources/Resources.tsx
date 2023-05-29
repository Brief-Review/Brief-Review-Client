import { ResourceCard } from "../../components/cards/ResourceCard";
import ResourcesGrid from "../../components/templates/ResourcesGrid";
import Header from "../../components/ui/header/Header";
import Navbar from "../../components/ui/navbar/Navbar";

function Resources() {
  const tags = ["JavaScript", "React", "CSS"];
  const tags2 = ["Laravel", "Blade", "Php"];
  const tags3 = ["Bootstrap", "Jest", "Vite"];
  const tags4 = ["Bootstrap", "React", "Laravel"];
  const thumbnailUrl = "https://react.dev/images/og-home.png";

  return (
    <div className="w-full h-screen py-8 grid grid-cols-12 grid-rows-6 gap-4">
      <Header className="col-span-12 row-span-1 place-self-center lg:col-span-11 " />
      <Navbar className="col-span-12 row-span-1 place-self-center row-start-6 max-h-12 lg:max-h-[100%] lg:col-span-1 lg:row-start-1 lg:row-end-7 " />
      <ResourcesGrid className="col-span-12 row-span-4 row-start-2 row-end-6 lg:row-span-5 lg:row-start-2 overflow-y-scroll p-4">
        <ResourceCard
          tags={tags}
          thumbnail={thumbnailUrl}
          title="Titulo! :)"
          isNew={false}
          date={"Mayo 9, 2023"}
          sortBy="newest"
        ></ResourceCard>
        <ResourceCard
          tags={tags2}
          thumbnail={thumbnailUrl}
          title="Titulo! :) pero distinto!"
          isNew={false}
          date={"Mayo 15, 2022"}
          sortBy="oldest"
        ></ResourceCard>
        <ResourceCard
          tags={tags3}
          thumbnail={thumbnailUrl}
          title="Titulo! :) pero distinto!"
          isNew={false}
          date={"Mayo 11, 2023"}
          sortBy="oldest"
        ></ResourceCard>
        <ResourceCard
          tags={tags}
          thumbnail={thumbnailUrl}
          title="Titulo! :) pero distinto!"
          isNew={true}
          date={"Mayo 12, 2023"}
          sortBy="oldest"
        ></ResourceCard>
        <ResourceCard
          tags={tags}
          thumbnail={thumbnailUrl}
          title="Titulo! :) pero distinto!"
          isNew={true}
          date={"Mayo 11, 2023"}
          sortBy="oldest"
        ></ResourceCard>
        <ResourceCard
          tags={tags4}
          thumbnail={thumbnailUrl}
          title="Titulo! :) pero distinto!"
          isNew={false}
          date={"Mayo 11, 2023"}
          sortBy="oldest"
        ></ResourceCard>
      </ResourcesGrid>
    </div>
  );
}

export default Resources;
