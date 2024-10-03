export type CodeBlockProps = {
  children: React.ReactNode;
  language?: string;
};

export type CodeProps = {
  children: React.ReactNode;
  table?: boolean;
};

export type LiveCodeBlockProps = {
  defaultOpenEditor?: boolean;
  example: {
    code: string;
    scope?: Record<string, any>;
  };
};
