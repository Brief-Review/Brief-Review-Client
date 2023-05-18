export interface BriefingsProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  title: string;
  description?: string;
  resources?: [object];
  available: boolean;
}
