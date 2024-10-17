import styles from "./code.module.css";

type CodeBlockProps = {
  children: React.ReactNode;
  language?: string;
};

type CodeProps = {
  children: React.ReactNode;
  table?: boolean;
};

export const CodeBlock = ({ children, language }: CodeBlockProps) => (
  <div className={styles.codeBlock}>
    {language && <span>{language}</span>}
    <pre>
      <code>{children}</code>
    </pre>
  </div>
);

export const Code = ({ children, table }: CodeProps) => <code className={table ? styles.tableCode : styles.code}>{children}</code>;
