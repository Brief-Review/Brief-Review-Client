import { useState, useEffect } from "react";
import { ResourceCard } from "../../components/cards/ResourceCard";
import ResourcesGrid from "../../components/templates/ResourcesGrid";
import Header from "../../components/ui/header/Header";
import Navbar from "../../components/ui/navbar/Navbar";
import { assetsService } from "../../services/assetsServices/asset.service";

function Resources() {
  const [resourceData, setResourceData] = useState<any[]>([]);

  useEffect(() => {
    showAsset();
  }, []);

  const showAsset = async () => {
    try {
      const { data } = await assetsService.index();
      console.log(data.data.data);
      setResourceData(data.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const thumbnailUrl = "https://react.dev/images/og-home.png";

  return (
    <div className="w-full px-[5%] h-screen py-8 grid grid-cols-12 grid-rows-6 gap-4">
      <Header className="col-span-12 row-span-1 place-self-center lg:col-span-11 " />
      <Navbar className="col-span-12 row-span-1 place-self-center row-start-6 max-h-12 lg:max-h-[100%] lg:col-span-1 lg:row-start-1 lg:row-end-7 " />
      <ResourcesGrid className="col-span-12 row-span-4 row-start-2 row-end-6 lg:row-span-5 lg:row-start-2 overflow-y-scroll scrollbar scrollbar-thumb-primary p-4">
        {resourceData.map((resource) => (
          <ResourceCard
            key={resource.id}
            tags={resource.tags}
            thumbnail={thumbnailUrl}
            title={resource.title}
            isNew={resource.isNew}
            date={resource.created_at}
            sortBy="oldest"
          />
        ))}
      </ResourcesGrid>
    </div>
  );
}

export default Resources;
