import { ResourcesCardProps } from "../../models/commons/ResourcesCard.model";

export const ResourceCard = ({
  children,
  onClick,
  className,
  disabled,
  thumbnail,
  title,
  description,
  isNew: isNew,
  date,
  sortBy,
  tags,
}: ResourcesCardProps) => {
  const cardClasses = `w-full bg-white shadow-md rounded-lg p-4 dark:bg-neutral-800 md:w-98 ${className}`;
  const isNewCard = isNew ? "Nuevo!" : "";

  return (
    <div className={cardClasses}>
      {thumbnail && (
        <img src={thumbnail} alt="Thumbnail" className="w-full h-auto mb-4" />
      )}
      <div className="flex justify-between mb-2">
        <div className="flex flex-wrap items-center">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-200 rounded-md text-gray-700 mr-2 mb-2 dark:bg-neutral-700 00 dark:text-neutral-100"
            >
              {tag}
            </span>
          ))}
        </div>
        {isNew && (
          <span className="h-8 px-2 py-1 bg-green-500 rounded-md text-white mr-2 mb-2">
            {isNewCard}
          </span>
        )}
      </div>
      <h2 className="text-lg text-gray-500 font-bold mb-2 dark:text-neutral-50">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      {children}
      <div className="text-gray-500 text-sm mt-2 dark:text-neutral-50">
        <span>{date}</span>
      </div>
    </div>
  );
};