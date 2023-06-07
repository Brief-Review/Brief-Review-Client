export interface ResourcesCardProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  id: number;
  thumbnail?: string;
  title: string;
  description?: string;
  isNew?: boolean;
  date: string;
  created_at: string;
  sortBy: "newest" | "oldest";
  tags: string;
}
