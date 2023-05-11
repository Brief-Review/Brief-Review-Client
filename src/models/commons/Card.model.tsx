export interface CardProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  thumbnail?: string;
  title: string;
  description: string;
  isNew?: boolean;
  date: string;
  sortBy: "newest" | "oldest";
  tags: string[];
}
