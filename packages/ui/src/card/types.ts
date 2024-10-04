type CardProps = {
  actions: React.ReactNode;
  content: React.ReactNode;
  media: { position?: "top" | "right" | "bottom" | "left"; source: React.ReactNode };
  onClick?: () => void;
  title: string;
  variant?: "default" | "outlined";
};

export default CardProps;
