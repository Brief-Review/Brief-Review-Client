// utils.ts

import { ResourcesCardProps } from "../models/commons/ResourcesCard.model";

export const getTags = (node: React.ReactNode): string[] => {
  const tags: string | string[] =
    (node as React.ReactElement<ResourcesCardProps>)?.props?.tags || [];
  if (Array.isArray(tags)) {
    return tags;
  } else if (typeof tags === "string") {
    return (tags as string).split(",").map((tag) => tag.trim());
  }
  return [];
};

export const getTitle = (node: React.ReactNode): string => {
  return (node as React.ReactElement<ResourcesCardProps>)?.props?.title || "";
};
