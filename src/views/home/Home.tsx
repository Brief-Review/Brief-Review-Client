import HomeGrid from "../../components/templates/HomeGrid";
import Header from "../../components/ui/header/Header";
import Navbar from "../../components/ui/navbar/Navbar";
import { ResourceCard } from "../../components/cards/ResourceCard";
import { ResourcesCardProps } from "../../models/commons/ResourcesCard.model";
import { useAssets } from "../../hooks/useAssets";

function Home() {
  const resourceData: ResourcesCardProps[] = useAssets();
  console.log(resourceData)
  const thumbnailUrl = "https://react.dev/images/og-home.png";

  return (
    <div className="w-full px-[5%] h-screen py-8 grid grid-cols-12 grid-rows-6 gap-4">
      <Header className="col-span-12 row-span-1 place-self-center lg:col-span-11 " />
      <Navbar className="col-span-12 row-span-1 place-self-center row-start-6 max-h-12 lg:max-h-[100%] lg:col-span-1 lg:row-start-1 lg:row-end-7 " />
      <HomeGrid className="col-span-12 row-span-4 row-start-2 row-end-6 lg:row-span-5 lg:row-start-2 overflow-y-scroll scrollbar-thin scrollbar-thumb-primary">
      {resourceData.length > 0 ? (
          resourceData.map((resource) => (
            <ResourceCard
              key={resource.id}
              id={resource.id}
              tags={resource.tags}
              thumbnail={thumbnailUrl}
              title={resource.title}
              created_at={resource.created_at}
              isNew={false}
              date={resource.created_at}
              sortBy="newest"
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </HomeGrid>
    </div>
  );
}

export default Home;
