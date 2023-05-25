// utils.ts

import { ResourcesCardProps } from "../models/commons/ResourcesCard.model";

export const getTags = (node: React.ReactNode): string[] => {
  return (node as React.ReactElement<ResourcesCardProps>)?.props?.tags || [];
};

export const getTitle = (node: React.ReactNode): string => {
  return (node as React.ReactElement<ResourcesCardProps>)?.props?.title || "";
};
