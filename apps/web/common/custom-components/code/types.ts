export type CodeBlockProps = {
  children: React.ReactNode;
  language?: string;
};

export type CodeProps = {
  children: React.ReactNode;
};

export type LiveCodeBlockProps = {
  defaultEditorIsOpen?: boolean;
  example: {
    code: string;
    scope?: Record<string, any>;
  };
};
