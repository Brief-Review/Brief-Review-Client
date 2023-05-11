import { Card } from "../../components/ui/cards/Card";
import CardsGrid from "../../components/ui/cards/CardsGrid";
import Header from "../../components/ui/header/Header";
import Navbar from "../../components/ui/navbar/Navbar";

function Resources() {
  const tags = ["JavaScript", "React", "CSS"];
  const tags2 = ["Laravel", "Blade", "Php"];
  const tags3 = ["Bootstrap", "Jest", "Vite"];
  const thumbnailUrl = "https://react.dev/images/og-home.png";

  return (
    <div className="w-full h-screen px-[10%] py-8 grid grid-cols-12 grid-rows-6 gap-4">
      <Header className="col-span-12 row-span-1 place-self-center lg:col-span-11 " />
      <Navbar className="col-span-12 row-span-1 place-self-center row-start-6 max-h-12 lg:max-h-[100%] lg:col-span-1 lg:row-start-1 lg:row-end-7 " />
      <CardsGrid className="col-span-12 row-span-4 row-start-2 row-end-6 lg:row-span-5 lg:row-start-2 overflow-y-scroll py-4">
        <Card
          tags={tags}
          thumbnail={thumbnailUrl}
          className="text-red-500"
          title="Titulo! :)"
          description="Descripcioooon pero esta vez larga para ver si es responsive o si se rompe seguramente se rompa pero no pasa nada"
          isNew={false}
          date={"Mayo 9, 2023"}
          sortBy="newest"
        ></Card>
        <Card
          tags={tags2}
          thumbnail={thumbnailUrl}
          className="text-red-500"
          title="Titulo! :) pero distinto!"
          description="Descripcioooon pero otra!"
          isNew={false}
          date={"Mayo 15, 2022"}
          sortBy="oldest"
        ></Card>
        <Card
          tags={tags3}
          thumbnail={thumbnailUrl}
          className="text-red-500"
          title="Titulo! :) pero distinto!"
          description="Descripcioooon pero otra!"
          isNew={false}
          date={"Mayo 11, 2023"}
          sortBy="oldest"
        ></Card>
        <Card
          tags={tags}
          thumbnail={thumbnailUrl}
          className="text-red-500"
          title="Titulo! :) pero distinto!"
          description="Descripcioooon pero otra!"
          isNew={true}
          date={"Mayo 12, 2023"}
          sortBy="oldest"
        ></Card>
        <Card
          tags={tags}
          thumbnail={thumbnailUrl}
          className="text-red-500"
          title="Titulo! :) pero distinto!"
          description="Descripcioooon pero otra!"
          isNew={true}
          date={"Mayo 11, 2023"}
          sortBy="oldest"
        ></Card>
        <Card
          tags={tags}
          thumbnail={thumbnailUrl}
          className="text-red-500"
          title="Titulo! :) pero distinto!"
          description="Descripcioooon pero otra!"
          isNew={false}
          date={"Mayo 11, 2023"}
          sortBy="oldest"
        ></Card>
      </CardsGrid>
    </div>
  );
}

export default Resources;
