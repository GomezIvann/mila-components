import styles from "./code.module.css";
import { CodeBlockProps, CodeProps } from "./types";

export const CodeBlock = ({ children, language }: CodeBlockProps) => (
  <div className={styles.codeBlock}>
    {language && <span>{language}</span>}
    <pre>
      <code>{children}</code>
    </pre>
  </div>
);

export const Code = ({ children }: CodeProps) => <code className={styles.code}>{children}</code>;
