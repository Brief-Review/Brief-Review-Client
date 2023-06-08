import { useAssets } from "../../hooks/useAssets";
import { ResourceCard } from "../../components/cards/ResourceCard";
import ResourcesGrid from "../../components/templates/ResourcesGrid";
import Header from "../../components/ui/header/Header";
import Navbar from "../../components/ui/navbar/Navbar";
import { ResourcesCardProps } from "../../models/commons/ResourcesCard.model";

function Resources() {
  const resourceData: ResourcesCardProps[] = useAssets();
  const thumbnailUrl = "https://react.dev/images/og-home.png";

  return (
    <>
      <div className="w-full px-[5%] h-screen py-8 grid grid-cols-12 grid-rows-6 gap-4">
        <Header className="col-span-12 row-span-1 place-self-center lg:col-span-11 " />
        <Navbar className="col-span-12 row-span-1 place-self-center row-start-6 max-h-12 lg:max-h-[100%] lg:col-span-1 lg:row-start-1 lg:row-end-7 " />
        <ResourcesGrid className="col-span-12 row-span-4 row-start-2 row-end-6 lg:row-span-5 lg:row-start-2 overflow-y-scroll scrollbar-thin scrollbar-thumb-primary p-4">
          {resourceData.map((resource) => (
            <ResourceCard
              key={resource.id}
              id={resource.id}
              tags={resource.tags}
              thumbnail={thumbnailUrl}
              title={resource.title}
              created_at={resource.created_at}
              isNew={resource.isNew}
              date={resource.created_at}
              sortBy="newest"
            />
          ))}
        </ResourcesGrid>
      </div>
    </>
  );
}

export default Resources;
