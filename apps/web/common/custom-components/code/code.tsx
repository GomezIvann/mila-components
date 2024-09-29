import styles from "./code.module.css";

type CodeProps = {
  language: string;
  children: React.ReactNode;
};

const Code = ({ language, children }: CodeProps) => {
  return (
    <pre className={styles.codeBlock}>
      <code>{children}</code>
    </pre>
  );
};

export default Code;
