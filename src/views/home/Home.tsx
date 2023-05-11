import { Card } from "../../components/ui/cards/Card";
import CardsGrid from "../../components/ui/cards/CardsGrid";

function Home() {
  const tags = ["JavaScript", "React", "CSS"];
  const tags2 = ["Laravel", "Blade", "Php"];
  const tags3 = ["Bootstrap", "Jest", "Vite"];
  const thumbnailUrl = "https://react.dev/images/og-home.png";

  return (
    <>
      <CardsGrid>
        <Card
          tags={tags}
          thumbnail={thumbnailUrl}
          className="text-red-500"
          title="Titulo! :)"
          description="Descripcioooon pero esta vez larga para ver si es responsive o si se rompe seguramente se rompa pero no pasa nada"
          new={true}
          date={"May 9, 2023"}
          sortBy="newest"
        ></Card>
        <Card
          tags={tags2}
          thumbnail={thumbnailUrl}
          className="text-red-500"
          title="Titulo! :) pero distinto!"
          description="Descripcioooon pero otra!"
          new={true}
          date={"May 11, 2023"}
          sortBy="oldest"
        ></Card>
        <Card
          tags={tags3}
          thumbnail={thumbnailUrl}
          className="text-red-500"
          title="Titulo! :) pero distinto!"
          description="Descripcioooon pero otra!"
          new={true}
          date={"May 11, 2023"}
          sortBy="oldest"
        ></Card>
        <Card
          tags={tags}
          thumbnail={thumbnailUrl}
          className="text-red-500"
          title="Titulo! :) pero distinto!"
          description="Descripcioooon pero otra!"
          new={true}
          date={"May 11, 2023"}
          sortBy="oldest"
        ></Card>
        <Card
          tags={tags}
          thumbnail={thumbnailUrl}
          className="text-red-500"
          title="Titulo! :) pero distinto!"
          description="Descripcioooon pero otra!"
          new={true}
          date={"May 11, 2023"}
          sortBy="oldest"
        ></Card>
        <Card
          tags={tags}
          thumbnail={thumbnailUrl}
          className="text-red-500"
          title="Titulo! :) pero distinto!"
          description="Descripcioooon pero otra!"
          new={true}
          date={"May 11, 2023"}
          sortBy="oldest"
        ></Card>
      </CardsGrid>
    </>
  );
}

export default Home;
