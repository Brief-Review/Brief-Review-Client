export interface CardProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  thumbnail?: string;
  title: string;
  description: string;
  new?: boolean; 
  date: string;
  sortBy: "tags" | "newest" | "oldest";
  tags: string[];
}