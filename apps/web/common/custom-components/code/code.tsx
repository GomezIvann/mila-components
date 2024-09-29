import styles from "./code.module.css";

export const CodeBlock = ({ children, language }: { children: React.ReactNode; language?: string }) => (
  <div className={styles.codeBlock}>
    {language && <span>{language}</span>}
    <pre>
      <code>{children}</code>
    </pre>
  </div>
);

export const Code = ({ children }: { children: React.ReactNode }) => <code className={styles.code}>{children}</code>;
