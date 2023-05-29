import React from "react";

interface HomeGridProps {
  className: string;
  children?: React.ReactNode;
}

const HomeGrid: React.FC<HomeGridProps> = ({ className, children }) => {
  const filteredChildren = React.Children.toArray(children).filter((child) => {
    const element = child as React.ReactElement;
    return element.props.isNew;
  }) as React.ReactElement[];

  return (
    <div className={className}>
      <div className="md:flex m-4 gap-5">
        <div className="flex flex-col bg-white shadow-md rounded-lg p-4 dark:bg-neutral-800 xl:w-[60rem] md:w-[30rem] lg:w-[40rem]">
          <span className="dark:text-white">
            Espacio para anunciar algo interesante relacionado al bootcamp o
            algo similar, además tiene opciones para hacer algo.
          </span>
          <div className="flex flex-row gap-5 mt-5 mb-2 ">
            <button className="text-orange-600 w-[150px] border-2 border-orange-500 outline-orange-500 outline-offset-2 rounded-lg">
              Click me!
            </button>
            <button className="text-white w-[150px] bg-orange-600 p-1 ring-offset-2 rounded-lg">
              Click me!
            </button>
          </div>
        </div>
        <div className="hidden md:flex flex-col bg-white shadow-md rounded-lg p-4 dark:bg-neutral-800 md:w-[15rem] xl:w-[20rem]">
          <button>aqui hay algo</button>
          <button>aqui hay algo</button>
          <button>aqui hay algo</button>
        </div>
      </div>
      <div className="mt-5 flex justify-between flex-col p-4 lg:items-center lg:flex-row">
        <h1 className="text-lg dark:text-white">Nuevos recursos</h1>
        <a href="/#/resources" className="text-cyan-700 underline decoration-1">
          Ver todos los recursos
        </a>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-3 p-4">
        {filteredChildren}
      </div>
    </div>
  );
};

export default HomeGrid;
