import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">
            <a>Anasayfa</a>
          </Link>
        </li>
        <li>
          <Link href="/kodizim">
            <a>Kodizim</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
