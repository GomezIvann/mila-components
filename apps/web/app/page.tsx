import Link from "next/link";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1>Bienvenido a mi librería de componentes</h1>
      <p>Elige una sección para comenzar:</p>
      <ul className={styles.linkList}>
        <li>
          <Link href="/get-started">Get Started</Link>
        </li>
        <li>
          <Link href="/foundations">Foundations</Link>
        </li>
        <li>
          <Link href="/components">Components</Link>
        </li>
      </ul>
    </div>
  );
}
